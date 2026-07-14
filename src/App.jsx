import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Landing from "./pages/Landing"
import Contacts from "./pages/Contacts"
import "./App.css"

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
