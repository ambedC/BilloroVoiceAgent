import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  MenuItem,
  Button,
  Stack,
  Slider,
  Checkbox,
  FormControlLabel,
  Divider,
  Grid
} from "@mui/material";

export default function Settings() {
  return (
    <Box p={3} sx={{ bgcolor: "#f6f7f9" }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Settings
      </Typography>

      {/* Section 1 */}
      <Section title="Section 1: Agent Configuration">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Label>Agent Name</Label>
            <TextField fullWidth select value="Billoro Voice Agent (Default)">
              <MenuItem>Billoro Voice Agent (Default)</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <Label>Role</Label>
            <TextField fullWidth value="Customer Support" />
          </Grid>

          <Grid item xs={12} md={6}>
            <Label>Language</Label>
            <TextField fullWidth select value="English (US)">
              <MenuItem>English (US)</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <Label>Accent</Label>
            <TextField fullWidth select value="Neutral Professional">
              <MenuItem>Neutral Professional</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12}>
            <Label>Voice Selection</Label>
            <Stack direction="row" spacing={2}>
              <TextField
                fullWidth
                value="Eleven Labs - Beila (V2 High Fidelity)"
              />
              <Button variant="outlined">Preview Voice</Button>
              <Button variant="outlined">Change Voice</Button>
            </Stack>
          </Grid>
        </Grid>
      </Section>

      {/* Section 2 */}
      <Section title="Section 2: Agent Instruction">
        <Box
          sx={{
            bgcolor: "#fff7e6",
            borderLeft: "4px solid #f0b429",
            p: 2,
            mb: 2,
          }}
        >
          <Typography fontSize={14} fontWeight={500}>
            Critical: Changes to these instructions affect all live calls immediately upon saving
          </Typography>
        </Box>

        <Label>System Prompt</Label>
        <TextField
          fullWidth
          multiline
          minRows={5}
          value={`You are Nova, a helpful and professional customer support assistant for OmniCorp...`}
        />
        <Typography variant="caption" color="text.secondary">
          431 / 5000 characters
        </Typography>
      </Section>

      {/* Section 3 */}
      <Section title="Section 3: Knowledge Base">
        <Box
          sx={{
            border: "2px dashed #d0d5dd",
            borderRadius: 2,
            p: 5,
            textAlign: "center",
            bgcolor: "#fafafa",
            mb: 2,
          }}
        >
          <Typography fontWeight={500}>
            Drop documents here or click to upload
          </Typography>
          <Typography variant="caption" color="text.secondary">
            PDF, DOCX or TXT (Max 10mb)
          </Typography>
        </Box>

        <Typography fontSize={13} fontWeight={600} mb={1}>
          CURRENT KNOWLEDGE SOURCES
        </Typography>

        <Paper variant="outlined">
          <FileRow name="Billoro_call_agent_default_FAQ_answer.pdf" />
          <Divider />
          <FileRow name="Billoro_call_agent_default_FAQ_answer.pdf" />
        </Paper>
      </Section>

      {/* Section 4 */}
      <Section title="Section 4: Call handling">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Label>Business hours</Label>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField value="9:00 AM" />
              <Typography>to</Typography>
              <TextField value="9:00 PM" />
            </Stack>

            <Box
              sx={{
                mt: 2,
                bgcolor: "#fdecea",
                color: "#d32f2f",
                p: 1,
                borderRadius: 1,
                width: 160,
                textAlign: "center",
              }}
            >
              Sat - Sun CLOSED
            </Box>

            <Label sx={{ mt: 2 }}>Outside-hours-behaviour</Label>
            <TextField fullWidth select value="Transfer to after hours on call">
              <MenuItem>Transfer to after hours on call</MenuItem>
            </TextField>
          </Grid>

          <Grid item xs={12} md={6}>
            <SliderBlock label="Silence Timeout" value={5} max={30} unit="seconds" />
            <SliderBlock label="Max Call Duration" value={15} max={60} unit="minutes" />
          </Grid>
        </Grid>
      </Section>

      {/* Section 5 */}
      <Section title="Section 5: Escalation">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Label>Transfer Triggers</Label>
            <Stack>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Customer explicitly requests human" />
              <FormControlLabel control={<Checkbox defaultChecked />} label="AI confidence below 70% threshold" />
              <FormControlLabel control={<Checkbox />} label="Detected high sentiments/anger" />
              <FormControlLabel control={<Checkbox />} label={`Repeated "I don't understand (3x)"`} />
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Label>Escalation Destination</Label>
            <TextField fullWidth value="+91 70256 14770" sx={{ mb: 2 }} />
            <Label>Backup Email Address</Label>
            <TextField fullWidth value="voice.agent@billoro.com" />
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
}

/* ---------- helpers ---------- */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Paper elevation={0} sx={{ p: 3, borderRadius: 2, mb: 3 }}>
      <Typography fontWeight={600} mb={2}>
        {title}
      </Typography>
      {children}
    </Paper>
  );
}

function Label({ children, sx }: any) {
  return (
    <Typography fontSize={13} color="text.secondary" mb={0.5} sx={sx}>
      {children}
    </Typography>
  );
}

function FileRow({ name }: { name: string }) {
  return (
    <Box p={1.5}>
      <Typography fontSize={14}>{name}</Typography>
      <Typography variant="caption" color="text.secondary">
        Added 3 days ago
      </Typography>
    </Box>
  );
}

function SliderBlock({
  label,
  value,
  max,
  unit,
}: {
  label: string;
  value: number;
  max: number;
  unit: string;
}) {
  return (
    <Box mb={4}>
      <Stack direction="row" justifyContent="space-between">
        <Typography fontSize={13} color="text.secondary">
          {label}
        </Typography>
        <Typography fontSize={13} color="primary">
          {value} {unit}
        </Typography>
      </Stack>
      <Slider defaultValue={value} max={max} />
    </Box>
  );
}
