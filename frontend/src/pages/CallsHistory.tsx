import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Divider,
  Stack,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

type CallItem = {
  name: string;
  phone: string;
  time: string;
  duration: string;
};

const todayCalls: CallItem[] = [
  { name: "Smera", phone: "+91 9312312345", time: "3:43 pm", duration: "2m 32s" },
  { name: "Thoufeer", phone: "+91 9312312345", time: "3:43 pm", duration: "2m 32s" },
  { name: "Thaj", phone: "+91 9312312345", time: "3:43 pm", duration: "2m 32s" },
  { name: "Mohith", phone: "+91 9312312345", time: "3:43 pm", duration: "2m 32s" },
];

const yesterdayCalls: CallItem[] = [
  { name: "Smera", phone: "+91 9312312345", time: "3:43 pm", duration: "2m 32s" },
  { name: "Thoufeer", phone: "+91 9312312345", time: "3:43 pm", duration: "2m 32s" },
  { name: "Thaj", phone: "+91 9312312345", time: "3:43 pm", duration: "2m 32s" },
];



type Message = {
  from: "me" | "them";
  text: string;
  time: string;
};

const sampleMessages: Message[] = [
  { from: "them", text: "Hello, I wanted to check the appointment.", time: "3:41 pm" },
  { from: "me", text: "Sure, it's confirmed for tomorrow.", time: "3:42 pm" },
  { from: "them", text: "Great, thank you!", time: "3:43 pm" },
];


function CallRow({
  item,
  onClick,
}: {
  item: CallItem;
  onClick: () => void;
}) {
  return (
    <Box
      p={1.5}
      onClick={onClick}
      sx={{
        cursor: "pointer",
        "&:hover": { bgcolor: "#ebebeb" },
        transition: "background-color 0.2s",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: "#E3F2FD", color: "#1976D2" }}>
            <PersonIcon />
          </Avatar>

          <Box>
            <Typography fontWeight={500}>{item.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {item.phone}
            </Typography>
          </Box>
        </Stack>

        <Box textAlign="right">
          <Typography fontWeight={500}>{item.time}</Typography>
          <Typography variant="body2" color="text.secondary">
            {item.duration}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

function Section({
  title,
  count,
  data,
  onSelect,
}: {
  title: string;
  count: number;
  data: CallItem[];
  onSelect: (item: CallItem) => void;
}) {
  return (
    <Box mb={3}>
      <Typography variant="h6" mb={1.5} sx={{ color: "#2F4F4F" }}>
        {title} ({count})
      </Typography>

      <Paper elevation={0} sx={{ borderRadius: 2 }}>
        <Box px={2}>
          {data.map((item, i) => (
            <React.Fragment key={i}>
              <CallRow item={item} onClick={() => onSelect(item)} />
              {i !== data.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}


function TranscriptDialog({
  item,
  onClose,
}: {
  item: CallItem | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={!!item} onClose={onClose} fullWidth maxWidth="sm">
      {item && (
        <>
          {/* header */}
          <DialogTitle sx={{ borderBottom: "1px solid #eee" }}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ bgcolor: "#E3F2FD", color: "#1976D2" }}>
                <PersonIcon />
              </Avatar>

              <Box>
                <Typography fontWeight={600}>{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.phone}
                </Typography>
              </Box>
            </Stack>
          </DialogTitle>

          {/* chat area */}
          <DialogContent
            sx={{
              bgcolor: "#f5f7fb",
              py: 2,
            }}
          >
            <Stack spacing={1.5} sx={{mt:2}}>
              {sampleMessages.map((msg, i) => {
                const isMe = msg.from === "me";

                return (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      justifyContent: isMe ? "flex-end" : "flex-start",
                    }}
                  >
                    <Box
                      sx={{
                        maxWidth: "75%",
                        px: 1.5,
                        py: 1,
                        borderRadius: 2,
                        bgcolor: isMe ? "#1976D2" : "white",
                        color: isMe ? "white" : "text.primary",
                        boxShadow: 1,
                      }}
                    >
                      <Typography variant="body2">{msg.text}</Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mt: 0.5,
                          opacity: 0.7,
                          textAlign: "right",
                        }}
                      >
                        {msg.time}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Stack>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

export default function CallHistoryPage() {
  const [selected, setSelected] = React.useState<CallItem | null>(null);

  return (
    <Box p={3} sx={{ bgcolor: "white" }}>
      <Section title="Today" count={10} data={todayCalls} onSelect={setSelected} />
      <Section title="Yesterday" count={6} data={yesterdayCalls} onSelect={setSelected} />
      <TranscriptDialog item={selected} onClose={() => setSelected(null)} />
    </Box>
  );
}

