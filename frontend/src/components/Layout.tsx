// import styled from "@emotion/styled"
// import { Box, IconButton, Typography } from "@mui/material"
// import type React from "react"
// import { useEffect, useRef, useState } from "react"
// import { useLocation, useNavigate } from "react-router-dom"

// interface LayoutProps {
//     children: React.ReactNode
// }

// const LayoutContainer= styled(Box)(() => ({
//     minHeight: '100vh',
//     backgroundColor: '#f3f4f6'
// }))

// const MainContent = styled(Box)(() => ({
//     marginLeft: '64px',
//     '@media (max-width: 767px)':{
//         marginLeft: 0
//     },
// }))

// const TopBarContainer = styled(Box)(() => ({
//   position: 'sticky',
//   top: 0,
//   zIndex: 30,
//   backgroundColor: '#f3f4f6',
//   padding: '8px 16px',
//   '@media (min-width: 640px)': {
//     padding: '8px 24px',
//   },
//   '@media (min-width: 1024px)': {
//     padding: '8px 32px',
//   },
// }));

// const TopBar = styled(Box)(() => ({
//   width: '100%',
//   height: '48px',
//   borderRadius: '8px',
//   backgroundColor: 'white',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   padding: '0 16px',
//   boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
// }));

// const LeftSection = styled(Box)(() => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '12px',
// }));

// const RightSection = styled(Box)(() => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '12px',
// }));

// const BackButton = styled(IconButton)(() => ({
//   height: '32px',
//   width: '32px',
//   borderRadius: '6px',
//   color: '#2F4F4F',
//   '&:hover': {
//     backgroundColor: '#f9fafb',
//   },
// }));

// const PageTitle = styled(Typography)(() => ({
//   fontSize: '18px',
//   fontWeight: 600,
//   letterSpacing: '-0.025em',
//   color: '#2F4F4F',
// }));

// const ActionButton = styled(IconButton)(() => ({
//   height: '36px',
//   width: '36px',
//   borderRadius: '50%',
//   backgroundColor: '#2F4F4F',
//   color: 'white',
//   '&:hover': {
//     backgroundColor: '#2F4F4F',
//     filter: 'brightness(1.1)',
//   },
//   '&:focus': {
//     outline: 'none',
//     boxShadow: '0 0 0 2px rgba(47, 79, 79, 0.4)',
//   },
// }));

// const NotificationDot = styled(Box)(() => ({
//   position: 'absolute',
//   top: '-2px',
//   right: '-2px',
//   height: '8px',
//   width: '8px',
//   borderRadius: '50%',
//   backgroundColor: '#10b981',
// }));

// const MainSection = styled(Box)(() => ({
//   width: '100%',
//   padding: '16px',
//   minHeight: 'calc(100vh - 56px)',
//   '@media (min-width: 640px)': {
//     padding: '16px 24px',
//   },
//   '@media (min-width: 1024px)': {
//     padding: '16px 32px',
//   },
// }));

// const Layout:React.FC<LayoutProps> = ({ children }) => {
//     const [sidebarOpen, setSidebarOpen] = useState(false)
//     const [darkMode, setDarkMode] = useState(false);
//     const [notificationOpen, setNotificationOpen] = useState(false);
//     const location = useLocation();
//     const navigate = useNavigate();
//     const pathRef = useRef(location.pathname);

//     useEffect(() => {
//         pathRef.current = location.pathname;
//     }, [location.pathname, location.search]);

// }



