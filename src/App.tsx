import { BrowserRouter, Routes, Route } from "react-router"
import Layout from "./components/Layout"
import Home from './pages/Home'
import Mission from "./pages/Mission"
import Projects from './pages/Projects'
import Solutions from "./pages/Solutions"
import AltimaIQ from "./pages/AltimaIQ"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mission" element={<Mission />} />
          <Route path="projects" element={<Projects />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="iq" element={<AltimaIQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App