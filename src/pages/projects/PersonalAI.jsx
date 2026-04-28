import React from 'react'
import { Link } from 'react-router-dom'

function PersonalAI() {
  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen pt-20 flex flex-col">
      <header className="bg-surface/90 backdrop-blur-md font-manrope text-sm font-medium tracking-tight fixed top-0 left-0 w-full flex justify-between items-center px-8 h-20 max-w-[1120px] mx-auto z-50">
        <Link to="/" className="text-lg font-bold tracking-tighter text-on-surface">Portfolio</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-outline hover:text-on-surface transition-colors active:scale-95 duration-200">Back to Home</Link>
        </nav>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-8 py-section-padding mt-10">
        <div className="max-w-3xl">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm block">RAG SYSTEM</span>
          <h1 className="font-h1 text-h1 text-primary mb-stack-lg">Personal AI Assistant</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Developed with Next.js, Python, and Ollama, this personal AI assistant unifies WhatsApp, emails, and notes into a single chat interface. Running entirely on local models via a custom RAG pipeline, it ensures zero data leaves the device, allowing secure, offline natural language querying across all personal data.
          </p>
          <div className="flex flex-wrap gap-2 mb-stack-lg">
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Python</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Ollama</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PersonalAI
