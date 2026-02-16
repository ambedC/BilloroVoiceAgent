import { useState } from "react";
import {
  Avatar,
  Box,
  Chip,
  Divider,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import CallEndIcon from "@mui/icons-material/CallEnd";

interface Contact {
  id: string;
  name: string;
  phone: string;
  duration: string;
  online?: boolean;
}

const contacts: Contact[] = [
    { 
        id: "1", 
        name: "Smera", 
        phone: "+91 9312312345", 
        duration: "2:48", 
        online: true 
    },
    { 
        id: "2", 
        name: "Basil Joseph", 
        phone: "+91 9312312345", 
        duration: "0:47" 
    },
    { 
        id: "3", 
        name: "Suresh Gopi", 
        phone: "+91 9312312345", 
        duration: "0:21" 
    },
];

interface ContactItemProps {
    contact: Contact;
    selected?: boolean;
    onSelect: (id: string) => void;
}

function ContactItem({ contact, selected, onSelect }: ContactItemProps) {
    return (
        <Paper
            variant="outlined"
            onClick={() => onSelect(contact.id)}
            sx={{
                p: 1.5,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                bgcolor: selected ? "#eef3f3" : "transparent",
                "&:hover": { bgcolor: "#f5f7f7" },
            }}
        >
            <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar sx={{ bgcolor: "#dbe7f5", color: "#3a6fb0" }}>
                    {contact.name[0]}
                </Avatar>

                <Box>
                    <Typography fontWeight={600}>
                        {contact.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {contact.phone}
                    </Typography>
                </Box>
            </Stack>
            <Typography fontWeight={500} sx={{ color: "#2F4F4F", fontSize: "12px" }}>
                {contact.duration}
            </Typography>
        </Paper>
  );
}

interface ContactListProps {
    items: Contact[];
    selectedId: string;
    onSelect: (id: string) => void;
}

function ContactList({ items, selectedId, onSelect }: ContactListProps) {
    return (
        <Stack spacing={1.5}>
            {items.map((c) => (
                <ContactItem
                    key={c.id}
                    contact={c}
                    selected={c.id === selectedId}
                    onSelect={onSelect}
                />
            ))}
        </Stack>
    );
}

export default function LiveCalls() {
    const [selectedId, setSelectedId] = useState("1");
    const active = contacts.find((c) => c.id === selectedId)!;

    return (
        <Box sx={{ height: "100vh", bgcolor: "#ffffff", display: "flex", flexDirection: "column", borderRadius: 1 }}>
            <Paper elevation={0} sx={{ flex: 1, mb: 2, borderRadius: 3, display: "flex", overflow: "hidden" }}>
                <Box sx={{ width: 340, p: 2 }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
                        <Typography fontWeight={600} sx={{ color: "#2F4F4F" }}>Active Calls</Typography>
                        <Chip size="small" label="Online" sx={{ bgcolor: "#d7efe3", color: "#2f8f5b", fontWeight: 500 }} />
                    </Stack>
                    <ContactList
                        items={contacts}
                        selectedId={selectedId}
                        onSelect={setSelectedId}
                    />
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" px={3} py={2}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar sx={{ bgcolor: "#dbe7f5", color: "#3a6fb0" }}>
                                {active.name[0]}
                            </Avatar>
                            <Box>
                                <Typography fontWeight={600}>{active.name}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {active.phone}
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography fontWeight={600}>{active.duration}</Typography>
                            <IconButton sx={{ bgcolor: "#e53935", color: "white", "&:hover": { bgcolor: "#c62828" } }}>
                                <CallEndIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Box sx={{ p: 3 }}>
                        <Typography variant="body2" color="text.secondary">
                            Conversation area…
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
  );
}
