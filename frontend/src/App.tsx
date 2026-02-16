import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import LiveCalls from "./pages/LiveCalls";

function App() {

  return (
    <div>
      {/* <Sidebar/> */}
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/liveCalls" element={<LiveCalls />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
