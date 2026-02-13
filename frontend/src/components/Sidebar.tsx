import { Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import { Link as RouterLink, useLocation} from "react-router-dom"

// types
import type { SvgIconComponent } from "@mui/icons-material";

// icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

    interface NavItems {
        href: string,
        icon: SvgIconComponent 
    }

    const location = useLocation()

    const navItems: NavItems[] = [
        {
            href:"/dashboard",
            icon: DashboardIcon
        },
        {
            href:"/liveCalls",
            icon: PhoneInTalkIcon
        },
        {
            href:"/callHistory",
            icon: HistoryIcon
        },
        {
            href:"/settings",
            icon: SettingsIcon
        },
        {
            href:"/analytics",
            icon: AnalyticsIcon
        },
    ]

    return(
        <Box
            sx={{
                width: 64,
                height: "100vh",
                bgcolor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 4,
                gap: 2
            }}
        >
            <img src={logo} alt="Billoro"/>
            <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    gap:2,
                    mt:2    
                }}
            >
                {navItems.map((item,index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href
                    return (
                        <Box
                            component={RouterLink}
                            to={item.href}
                            key={index}
                            sx={{
                                p: 1,
                                borderRadius: 1 ,
                                cursor: "pointer",
                                bgcolor: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                                "&:hover": {
                                    bgcolor: "rgba(255,255,255,0.1)"
                                }
                            }}
                        >
                            <Icon sx={{color: "white"}}/>
                        </Box>

                    )
                })}
            </Box>
            <Box
                sx={{
                    p: 1,
                    borderRadius: 1 ,
                    cursor: "pointer",
                    "&:hover": {
                        bgcolor: "rgba(255,255,255,0.1)"
                    }
                }}
            >
                <LogoutIcon/>   
            </Box>
        </Box>
    )
}

export default Sidebar