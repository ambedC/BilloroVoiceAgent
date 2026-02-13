import { Box } from "@mui/material"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"

interface LayoutProps {
    children: React.ReactNode
}


const Layout:React.FC<LayoutProps> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false);
    const [notificationOpen, setNotificationOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const pathRef = useRef(location.pathname);

    useEffect(() => {
        pathRef.current = location.pathname;
    }, [location.pathname, location.search]);

    return(
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: '#E5E7EB',
            display:'flex',
            width:"100%",
            position:'relative'
        }}>
            <Sidebar/>
            <Box sx={{
                marginLeft: '64px',
                position:'relative',
                '@media (max-width: 767px)':{
                    marginLeft: 0
                },
                flexGrow: 1
            }}>
                <Navbar
                    pageTitle="Dashboard"
                    showBack={true}
                    onBackClick={() => console.log("Back button clicked")}
                />                    
                <Box sx={{
                    width: '100%',
                    padding: '0 16px',
                    '@media (min-width: 640px)': {
                        padding: '0 16px',
                    },
                    '@media (min-width: 1024px)': {
                        padding: '0 16px',
                    },
                }}>
                    { children }
                </Box>
            </Box>  
        </Box>
    )
}

export { Layout }


