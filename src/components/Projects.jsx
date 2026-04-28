import React from 'react'
import { Link } from 'react-router-dom'
import subTrackerBg from '../assets/SubImages/DashboardFull.jpeg'

const projects = [
  {
    label: 'MOBILE APP',
    title: 'Sub-Tracker',
    description: 'A comprehensive tool to manage, monitor, and optimize your monthly subscriptions with real-time analytics.',
    link: '/projects/sub-tracker',
    bgImage: subTrackerBg,
  },
  {
    label: 'SYSTEM OPTIMIZATION',
    title: 'Ticket-System',
    description: 'High-performance NestJS backend with Redis and BullMQ for scalable ticket management.',
    link: '/projects/ticket-system',
  },
  {
    label: 'MOBILE/WEB APP',
    title: 'NoteBrain',
    description: 'AI-powered social platform for multi-format content with Gemini RAG architecture.',
    link: '/projects/notebrain',
  },
  {
    label: 'RAG SYSTEM',
    title: 'Personal AI Assistant',
    description: 'Local-first AI assistant with custom RAG pipeline for secure personal data querying.',
    link: '/projects/personal-ai-assistant',
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="shell">
        <div className="section-copy">
          <h2 className="section-title">Selected Projects</h2>
          <p className="section-summary">
            A showcase of recent architectural design and development work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              to={project.link}
              key={project.title}
              className="group relative w-full h-[280px] rounded-xl overflow-hidden bg-surface-container-lowest border border-[#1f1f1f] shadow-lg hover:shadow-primary/20 hover:border-primary/30 transition-all duration-300 flex flex-col md:flex-row"
            >
              {project.bgImage ? (
                <>
                  {/* Left Column: Content (60%) */}
                  <div className="relative w-full md:w-[60%] p-6 flex flex-col justify-between bg-surface-container-low z-10 border-r border-[#1f1f1f] overflow-hidden">
                    {/* Subtle Noise Overlay */}
                    <div 
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        opacity: 0.02
                      }}
                    />
                    {/* Top Section */}
                    <div className="relative z-10">
                      <span className="font-label-caps text-on-surface-variant tracking-widest uppercase mb-2 inline-block">
                        {project.label}
                      </span>
                      <h3 className="font-h2 text-h2 text-on-surface mb-3">
                        {project.title}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant max-w-[90%] line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    {/* Bottom Section */}
                    <div className="mt-auto relative z-10">
                      <span className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-200">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* Right Column: Image Area (40%) */}
                  <div className="relative w-full md:w-[40%] bg-gradient-to-br from-surface-container-high to-surface-container-lowest flex items-center justify-center overflow-hidden h-full">
                    {/* Top Inner Highlight */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-white/10 z-20" />
                    {/* Floating App Screen Mockup */}
                    <div className="relative w-[140px] h-[280px] rounded-[20px] bg-black border-[3px] border-[#2a2a2a] shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform rotate-[-5deg] translate-y-4 group-hover:rotate-0 group-hover:translate-y-0 transition-all duration-500 overflow-hidden z-10">
                      <img 
                        src={project.bgImage} 
                        alt={project.title}
                        className="w-full h-full object-cover opacity-90"
                      />
                    </div>
                    {/* Ambient Glow Behind Device */}
                    <div className="absolute inset-0 bg-primary/5 blur-[40px] z-0 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </>
              ) : (
                /* Simple Card for projects without images */
                <div className="w-full h-full p-6 flex flex-col justify-between bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
                  <div>
                    <span className="font-label-caps text-on-surface-variant tracking-widest uppercase mb-2 inline-block">
                      {project.label}
                    </span>
                    <h3 className="font-h2 text-h2 text-on-surface mb-3">
                      {project.title}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 font-label-md text-label-md text-primary group-hover:translate-x-1 transition-transform duration-200">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
