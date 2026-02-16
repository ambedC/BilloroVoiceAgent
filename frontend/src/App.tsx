import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import LiveCalls from "./pages/LiveCalls";

function App() {
  return (
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/liveCalls" element={<LiveCalls />} />
        </Routes>
      </Layout>
  );
}

export default App;
