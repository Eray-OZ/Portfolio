import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import SubTracker from './pages/projects/SubTracker.jsx'
import TicketSystem from './pages/projects/TicketSystem.jsx'
import NoteBrain from './pages/projects/NoteBrain.jsx'
import PersonalAI from './pages/projects/PersonalAI.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/sub-tracker" element={<SubTracker />} />
        <Route path="/projects/ticket-system" element={<TicketSystem />} />
        <Route path="/projects/notebrain" element={<NoteBrain />} />
        <Route path="/projects/personal-ai-assistant" element={<PersonalAI />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
