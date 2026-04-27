import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import ExpAndSkills from './components/ExpAndSkills.jsx'
import Contact from './components/Contact.jsx'

function App() {
  return (
    <div className="portfolio-app">
      <Navbar />

      <main className="portfolio-main">
        <Hero />
        <About />
        <Projects />
        <ExpAndSkills />
        <Contact />
      </main>

    </div>
  )
}

export default App
