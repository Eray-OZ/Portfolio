import React from 'react'
import { Link } from 'react-router-dom'

// Import all showcase images
import imgChat from '../../assets/PersonalAIAssistantImages/Chat.png'
import imgDb from '../../assets/PersonalAIAssistantImages/DB.png'
import imgPipeline from '../../assets/PersonalAIAssistantImages/User Data Import Pipeline-2026-04-29-091639.png'

const features = [
  {
    title: "WhatsApp Chat Interface",
    description: "A dedicated conversational interface for WhatsApp messages powered by local AI. Query your chat history, extract insights, and interact with your conversations through natural language — all processed offline with complete privacy.",
    image: imgChat,
    alt: "WhatsApp chat interface with AI integration"
  },
  {
    title: "RAG Database Architecture",
    description: "Custom-built retrieval-augmented generation pipeline using vector embeddings and local Ollama models. Data is chunked, embedded, and indexed for instant semantic search without cloud dependencies.",
    image: imgDb,
    alt: "Database and RAG architecture diagram"
  },
  {
    title: "Secure Data Import Pipeline",
    description: "Automated ingestion pipeline that parses, cleans, and vectorizes your personal data locally. Supports multiple formats including message exports, email archives, and markdown notes with full privacy.",
    image: imgPipeline,
    alt: "User data import pipeline interface"
  },
  {
    title: "Multi-Source Chat Architecture",
    description: "Dedicated chat interfaces for WhatsApp, email, and personal notes — each powered by its own custom RAG pipeline. All text embeddings are generated locally using the Gemma model through Ollama, while responses are produced by the Gemma 4B chat model running entirely on-device. Query conversations, search through message archives, and extract insights across all your personal data sources entirely offline with complete privacy."
  }
];

function PersonalAI() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md text-body-md min-h-screen pt-20 flex flex-col">
      <header className="bg-surface/90 backdrop-blur-md font-manrope text-sm font-medium tracking-tight fixed top-0 left-0 w-full flex justify-between items-center px-8 h-20 max-w-[1120px] mx-auto z-50">
        <Link to="/" className="text-lg font-bold tracking-tighter text-on-surface">Portfolio</Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-outline hover:text-on-surface transition-colors active:scale-95 duration-200">Back to Home</Link>
        </nav>
      </header>

      <main className="flex-grow w-full max-w-container-max mx-auto px-8 py-section-padding mt-10">
        <div className="max-w-3xl mb-16">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm block">RAG SYSTEM</span>
          <h1 className="font-h1 text-h1 text-primary mb-stack-lg">Personal AI Assistant</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Local-first AI assistant with dedicated chat interfaces for your personal data. Built with Next.js, Python, and Ollama.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Python</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Ollama</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">RAG</span>
          </div>
        </div>

        {/* Features Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {features.map((feature, index) => (
            <section key={index} className="flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_30px_rgba(15,23,42,0.1)] transition-shadow duration-300 border border-surface-variant/50">
              <div className="p-8 pb-4">
                <h3 className="font-h3 text-h3 text-primary mb-3">{feature.title}</h3>
                <p className="font-body-md text-on-surface-variant">{feature.description}</p>
              </div>
              {feature.image && (
                <div className="p-8 pt-4 flex justify-center items-center bg-gradient-to-t from-surface-container-low/50 to-transparent mt-4">
                  <img 
                    src={feature.image} 
                    alt={feature.alt} 
                    className="rounded-xl max-h-[400px] object-contain shadow-lg drop-shadow-sm border border-outline-variant/30"
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}

export default PersonalAI
