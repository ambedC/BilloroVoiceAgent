import { Box, IconButton, Typography } from "@mui/material";
import { ArrowLeft } from "lucide-react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface NavbarProps {
  pageTitle: string;
  showBack?: boolean;
  onBackClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({pageTitle, showBack = false, onBackClick}) => {
    return (
        <Box
            sx={{
                position: "relative",
                top: 0,
                zIndex: 1100,
                backgroundColor: "transparent",
                px: { xs: 2, sm: 3, lg: 2 },
                py: 2,
                flexGrow:1
            }}
        >
            <Box
                sx={{
                    height: 56,
                    borderRadius: 1,
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 2,
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
            >
            {/* LeftSide */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                {showBack && (
                <IconButton onClick={onBackClick} size="small">
                    <ArrowLeft size={16} />
                </IconButton>
                )}
                <Typography fontWeight={600} variant="h6" sx={{color:"#2F4F4F"}}>{pageTitle}</Typography>
            </Box>

            {/* RightSide */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <IconButton size="small">
                    <DarkModeIcon fontSize="small" sx={{color:"#2F4F4F"}} />
                </IconButton>
                <IconButton size="small">
                    <NotificationsIcon fontSize="small" sx={{color:"#2F4F4F"}} />
                </IconButton>
                <IconButton size="small">
                    <AccountCircleIcon fontSize="small" sx={{color:"#2F4F4F"}} />
                </IconButton>
            </Box>
        </Box>
    </Box>
  );
};

export default Navbar;
