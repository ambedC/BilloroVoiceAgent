import './App.css'
import { Layout } from './components/Layout'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div>
      {/* <Sidebar/> */}
      <Layout>
        <Dashboard/>
      </Layout>
    </div>
  )
}

export default App
