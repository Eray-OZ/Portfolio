import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  {
    label: 'MOBILE APP',
    title: 'Sub-Tracker',
    description: "Developed with React Native and Expo, this offline-first mobile application allows users to easily track subscriptions and recurring payments in one place. By integrating a notification infrastructure and iOS/Android widgets, it enables real-time monitoring of upcoming transactions directly from the home screen, significantly enhancing payment visibility and user experience.",
    size: 'large',
    theme: 'aura',
    link: '/projects/sub-tracker',
  },
  {
    label: 'SYSTEM OPTIMIZATION',
    title: 'Ticket-System',
    description: 'Built an experimental NestJS backend to benchmark high-traffic scalability. Integrating Redis for atomic stock management and BullMQ for async queueing eliminated database bottlenecks. Validated via k6 load tests, the optimized architecture achieved 270% higher throughput and 75% lower latency compared to traditional setups.',
    size: 'small',
    theme: 'midnight',
    link: '/projects/ticket-system',
  },
  {
    label: 'MOBILE/WEB APP',
    title: 'NoteBrain',
    description: 'Built with React Native and Supabase, NoteBrain is a social AI platform unifying multi-format content (PDFs, YouTube, URLs). Utilizing a Gemini- powered RAG architecture for smart chat and summarization, its backend is highly optimized for scalability, delivering a fast, collaborative environment for knowledge sharing and discovery.',
    size: 'small',
    theme: 'midnight',
    link: '/projects/notebrain',
  },
  {
    label: 'RAG SYSTEM',
    title: 'Personal AI Assistant',
    description: 'Developed with Next.js, Python, and Ollama, this personal AI assistant unifies WhatsApp, emails, and notes into a single chat interface. Running entirely on local models via a custom RAG pipeline, it ensures zero data leaves the device, allowing secure, offline natural language querying across all personal data.',
    size: 'large',
    theme: 'aura',
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

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={project.link}
              key={project.title}
              className={`project-card project-card--${project.size} project-card--${project.theme}`}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              {project.art}
              <div className="project-card__overlay" aria-hidden="true" />
              <div className="project-card__content">
                <span className="project-card__tag">{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
