import type { SvgIconComponent } from "@mui/icons-material";
import { Pagination } from "@mui/material";

import { Box, Typography } from "@mui/material"
// table imports
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

// icons
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useState } from "react";

interface StatCardProps {
    title: string;
    value: string;
    subtitle?: string;
    icon?: SvgIconComponent;
}

// Status Cards
const StatCards: React.FC<StatCardProps> = ({title, value, subtitle, icon}) => {
    const Icon = icon;
    return(
        <Box 
            sx={{
                bgcolor: "white",
                height: "125px",
                borderRadius: 2,
                p:3,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {Icon && (
                <Box 
                    sx = {{
                        position: 'absolute',
                        top: 18, 
                        right: 20, 
                        color: "#6B7280"
                    }}
                >
                    <Icon fontSize = "small"/>
                </Box>

            )}

            <Typography variant="body2" sx={{ fontWeight: 500, color:"#6B7280" }}>
                {title}
            </Typography>

            <Typography sx={{ color: "#2F4F4F", mt:1 }} variant="h5" fontWeight={600}>
                {value}
            </Typography>
            {subtitle && (
                <Typography variant="caption" sx={{ color: "#B3B3B3" }}>
                    {subtitle}
                </Typography>
            )}
        </Box>
    )
}

const stats: StatCardProps[] = [
  {
    title: "Agent Status",
    value: "Online",
    subtitle: "Active and ready",
    icon: SupportAgentIcon,
  },
  {
    title: "Live Calls",
    value: "3",
    subtitle: "Currently Active",
    icon: PhoneInTalkIcon,
  },
  {
    title: "Resolved %",
    value: "65.2%",
    subtitle: "Last 24 hours",
    icon: SentimentSatisfiedAltIcon,
  },
  {
    title: "Escalation %",
    value: "12.3%",
    subtitle: "Last 24 hours",
    icon: PhoneForwardedIcon,
  },
  {
    title: "Avg Call Duration",
    value: "4:32 min",
    subtitle: "Last 24 hours",
    icon: AccessTimeIcon,
  },
];

// chip color for table
const getStatusStyle = (status: string) => {
  switch (status) {
    case "Resolved":
      return { bgcolor: "#DCFCE7", color: "#166534" };
    case "Escalated":
      return { bgcolor: "#FEF9C3", color: "#854D0E" };
    case "Error":
      return { bgcolor: "#FEE2E2", color: "#991B1B" };
    default:
      return {};
  }
};

// table row data
const tableRows = [
  {
    time: "2:45 PM",
    date: "15 Jun 2023",
    customer: "Neha Singh",
    mobile: "+91 98765 43210",
    duration: "5:23",
    outcome: "Resolved",
  },
  {
    time: "3:55 PM",
    date: "14 Jun 2023",
    customer: "Ravi Kumar",
    mobile: "+91 87654 32109",
    duration: "1:22",
    outcome: "Escalated",
  },
  {
    time: "4:20 AM",
    date: "13 Jun 2023",
    customer: "Anjali Patel",
    mobile: "+91 76543 21098",
    duration: "3:11",
    outcome: "Error",
  },
  {
    time: "5:33 PM",
    date: "12 Jun 2023",
    customer: "Vikram Malhotra",
    mobile: "+91 65432 10987",
    duration: "1:22",
    outcome: "Resolved",
  },
];


const Dashboard = () => {
    const [page, setPage] = useState(1);

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    
    return(
        <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2

            }}
        >
            <Box sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        "@media (min-width: 500px)": "repeat(2, 1fr)",
                        "@media (min-width: 900px)": "repeat(3, 1fr)",
                        lg: "repeat(5, 1fr)",
                    },
                    gap: 3,
                }}
            >
                {stats.map((item,index) => (
                    <StatCards
                        key={index}
                        title={item.title}
                        value = {item.value}
                        subtitle = {item.subtitle}
                        icon={item.icon}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    bgcolor: "white",
                    borderRadius: 3,
                    p: 3,
                    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
                }}
            >
            {/* Header */}
                <Box
                    sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 3,
                    }}
                >
                    <Typography variant="h6" fontWeight={600} sx={{ color: "#2F4F4F" }}>
                        Recent Activity
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        <TextField
                            size="small"
                            placeholder="Search calls"
                        />

                        <TextField
                            select
                            size="small"
                            defaultValue="all"
                        >
                            <MenuItem value="all">All Time</MenuItem>
                            <MenuItem value="today">Today</MenuItem>
                        </TextField>
                    </Box>
                </Box>

                {/* Table */}
                <Table>
                    <TableHead>
                        <TableRow sx={{
                                bgcolor: "#F9FAFB"

                            }}
                        >
                            <TableCell sx={{ color:"#6B7280",fontWeight: 500 }}>
                                Time
                            </TableCell>
                            <TableCell sx={{ color:"#6B7280", fontWeight: 500 }}>
                                Date
                            </TableCell>
                            <TableCell sx={{ color:"#6B7280", fontWeight: 500 }}>
                                Customer
                            </TableCell>
                            <TableCell sx={{ color:"#6B7280", fontWeight: 500 }}>
                                Mobile
                            </TableCell>
                            <TableCell sx={{ color:"#6B7280", fontWeight: 500}}>
                                Duration
                            </TableCell>
                            <TableCell sx={{ color:"#6B7280", fontWeight: 500}}>
                                Outcome
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                    {tableRows.map((row, index) => (
                        <TableRow key={index}>
                        <TableCell>{row.time}</TableCell>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.customer}</TableCell>
                        <TableCell>{row.mobile}</TableCell>
                        <TableCell>{row.duration}</TableCell>
                        <TableCell>
                            <Chip
                                label={row.outcome}
                                size="small"
                                sx={{
                                    ...getStatusStyle(row.outcome),
                                    fontWeight: 600,
                                }}
                            />
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>

                {/* Footer */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mt: 3,
                    }}
                >
                    <Typography variant="body2" color="#6B7280">
                        Showing 1 to 4 of 24 entries
                    </Typography>

                    <Box sx={{ display: "flex", gap: 1 }}>
                        <Pagination
                            count={3}
                            page={page}
                            onChange={handlePageChange}
                            size="small"
                            shape="rounded"
                            sx={{
                                "& .MuiPaginationItem-root": {
                                    color: "#2F4F4F",
                                },
                                "& .Mui-selected": {
                                    bgcolor: "#2f4f4f",
                                    color: "white",
                                    "&:hover": {
                                    bgcolor: "#2F4F4F",
                                    },
                                },
                            }}
                        />                    
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard