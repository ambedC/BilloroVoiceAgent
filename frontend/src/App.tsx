import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import LiveCalls from "./pages/LiveCalls";
import CallHistoryPage from "./pages/CallsHistory";
import Settings from "./pages/Settings";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/liveCalls" element={<LiveCalls />} />
          <Route path="/callHistory" element={<CallHistoryPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
  );
}

export default App;
