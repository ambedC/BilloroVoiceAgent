import { Box, Typography } from "@mui/material"

// icons
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styled from "@emotion/styled";

const TopBar = styled(Box)(() => ({
  width: '100%',
  height: '48px',
  borderRadius: '8px',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
}));


const Navbar = () => {
    return(
        <Box
            sx={{
                bgcolor: "white",
                borderRadius: 1,
                width:"100%",
                height: 64,
                px: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)", // subtle shadow
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    color:"#2F4F4F",
                    fontWeight: "600",
                }}
            >
                Dashboard
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap:3
                }}
            >
                <DarkModeIcon sx={{ color: "#2F4F4F", cursor: "pointer"}}/>
                <NotificationsIcon sx={{ color: "#2F4F4F", cursor: "pointer"}}/>
                <AccountCircleIcon sx={{ color: "#2F4F4F", cursor: "pointer"}}/>
                

            </Box>

        </Box>
    )
}

export default Navbar