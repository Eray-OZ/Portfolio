import React from 'react'
import { Link } from 'react-router-dom'

// Import all showcase images
import imgChat from '../../assets/NotebrainImages/chat.png'
import imgDashboard from '../../assets/NotebrainImages/dashboard.png'
import imgDiscover from '../../assets/NotebrainImages/discover.png'

const features = [
  {
    title: "Main Dashboard",
    description: "A centralized hub to view your notebooks, recent activity, and manage your content. The dashboard provides quick access to your unified multi-format knowledge base.",
    image: imgDashboard,
    alt: "NoteBrain main dashboard interface"
  },
  {
    title: "AI Chat Interface",
    description: "Interact directly with your content using the Gemini-powered RAG architecture. Ask questions, generate summaries, and extract insights from PDFs, YouTube videos, and web articles seamlessly.",
    image: imgChat,
    alt: "AI chat interface for knowledge extraction"
  },
  {
    title: "Discover Collaborative Content",
    description: "Explore and discover knowledge shared by others. The highly scalable Supabase backend ensures a fast, collaborative environment for finding and engaging with community-curated notebooks.",
    image: imgDiscover,
    alt: "Discover content interface"
  },
  {
    title: "Complete Feature Set & Architecture",
    description: "NoteBrain is available seamlessly across both Mobile and Web platforms. It empowers users to create notebooks by ingesting diverse data types including PDFs, web URLs, and YouTube videos. At its core, a Gemini-powered RAG architecture allows for dynamic question-answering and intelligent summarization of your content. You have full control over privacy—keep notebooks private for personal use or publish them publicly to contribute to the community. Additionally, you can explore the Discover page to find and instantly clone public notebooks from other users into your own workspace. The entire platform is powered by a highly scalable Supabase backend and built with React/React Native."
  }
];

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
        <div className="max-w-3xl mb-16">
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm block">MOBILE/WEB APP</span>
          <h1 className="font-h1 text-h1 text-primary mb-stack-lg">NoteBrain</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            NoteBrain is a cross-platform social AI application that unifies your multi-format content into interactive, collaborative notebooks.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">React</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">React Native</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Supabase</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">AI/RAG</span>
          </div>
        </div>

        {/* Features Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          {features.map((feature, index) => (
            <section key={index} className="flex flex-col h-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0px_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0px_10px_30px_rgba(15,23,42,0.1)] transition-shadow duration-300 border border-surface-variant/50">
              <div className="p-8 pb-4 flex-grow">
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

export default NoteBrain
