import React from 'react'
import { Link } from 'react-router-dom'

function NoteBrain() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen pt-20 flex flex-col">
      <header className="bg-surface/90 backdrop-blur-md font-manrope text-sm font-medium tracking-tight fixed top-0 left-0 w-full z-50">
        <div className="flex justify-between items-center px-8 h-20 max-w-[1120px] mx-auto w-full">
          <Link to="/" className="text-lg font-bold tracking-tighter text-on-surface">Portfolio</Link>
          <nav className="flex gap-6 items-center">
            <Link to="/" className="text-outline hover:text-on-surface transition-colors active:scale-95 duration-200">Back to Home</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-8 py-section-padding mt-10">
        <div className="max-w-3xl">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm block">MOBILE/WEB APP</span>
          <h1 className="font-h1 text-h1 text-primary mb-stack-lg">NoteBrain</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Built with React Native and Supabase, NoteBrain is a social AI platform unifying multi-format content (PDFs, YouTube, URLs). Utilizing a Gemini- powered RAG architecture for smart chat and summarization, its backend is highly optimized for scalability, delivering a fast, collaborative environment for knowledge sharing and discovery.
          </p>
          <div className="flex flex-wrap gap-2 mb-stack-lg">
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">React Native</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Supabase</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">AI/RAG</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default NoteBrain
