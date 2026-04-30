import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import SubTracker from './pages/projects/SubTracker.jsx'
import NoteBrain from './pages/projects/NoteBrain.jsx'
import PersonalAI from './pages/projects/PersonalAI.jsx'
import UberClone from './pages/projects/UberClone.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/sub-tracker" element={<SubTracker />} />
        <Route path="/projects/notebrain" element={<NoteBrain />} />
        <Route path="/projects/personal-ai-assistant" element={<PersonalAI />} />
        <Route path="/projects/uber-clone" element={<UberClone />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
