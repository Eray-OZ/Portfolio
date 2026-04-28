import React from 'react'
import { Link } from 'react-router-dom'

function TicketSystem() {
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
          <span className="font-label-caps text-label-caps text-on-surface-variant mb-stack-sm block">SYSTEM OPTIMIZATION</span>
          <h1 className="font-h1 text-h1 text-primary mb-stack-lg">Ticket-System</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
            Built an experimental NestJS backend to benchmark high-traffic scalability. Integrating Redis for atomic stock management and BullMQ for async queueing eliminated database bottlenecks. Validated via k6 load tests, the optimized architecture achieved 270% higher throughput and 75% lower latency compared to traditional setups.
          </p>
          <div className="flex flex-wrap gap-2 mb-stack-lg">
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">NestJS</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">Redis</span>
            <span className="bg-surface-container-low text-on-surface-variant font-label-caps text-label-caps px-3 py-1 rounded-full">BullMQ</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TicketSystem
