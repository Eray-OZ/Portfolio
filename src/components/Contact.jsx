function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path
        d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.52v-1.84c-2.95.64-3.58-1.25-3.58-1.25-.48-1.21-1.16-1.53-1.16-1.53-.95-.65.07-.64.07-.64 1.05.08 1.61 1.08 1.61 1.08.94 1.6 2.46 1.14 3.05.87.09-.68.37-1.14.67-1.4-2.36-.27-4.84-1.18-4.84-5.26 0-1.16.42-2.1 1.09-2.84-.1-.27-.47-1.36.11-2.84 0 0 .9-.29 2.95 1.08a10.3 10.3 0 0 1 5.38 0c2.05-1.37 2.95-1.08 2.95-1.08.58 1.48.21 2.57.11 2.84.68.74 1.09 1.68 1.09 2.84 0 4.09-2.49 4.98-4.86 5.25.38.33.72.99.72 1.99v2.95c0 .29.19.63.73.52A10.5 10.5 0 0 0 12 1.5Z"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path
        d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.6 18.4h2.69V9.82H5.6V18.4Zm4.38 0h2.68v-4.79c0-1.27.24-2.5 1.82-2.5 1.56 0 1.58 1.46 1.58 2.58v4.71h2.69v-5.25c0-2.58-.56-4.56-3.58-4.56-1.45 0-2.42.79-2.82 1.54h-.04V9.82H9.98c.03.75 0 8.58 0 8.58Z"
      />
      <path
        d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm0 19.2a8.7 8.7 0 1 1 0-17.4 8.7 8.7 0 0 1 0 17.4Z"
      />
    </svg>
  )
}

function Contact() {
  return (
    <section className="section section--muted" id="contact">
      <div className="shell">
        <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-surface-container-lowest rounded-3xl shadow-md border border-surface-variant/50 w-full relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-low/50 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center w-full">
            <h2 className="section-title section-title--tight mb-10">Get in Touch</h2>

            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 w-full max-w-4xl">
              <a
                href="mailto:ozeray66@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-surface text-on-surface rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-outline-variant/30 hover:scale-105"
              >
                <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                  mail
                </span>
                <span className="font-semibold text-base tracking-wide">ozeray66@gmail.com</span>
              </a>

              <a
                href="https://github.com/Eray-OZ"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 bg-surface text-on-surface rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-outline-variant/30 hover:scale-105"
              >
                <span className="scale-125 flex items-center justify-center w-6 h-6">
                  <GithubIcon />
                </span>
                <span className="font-semibold text-base tracking-wide">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/eray-öz/"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-3 px-8 py-4 bg-surface text-on-surface rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-outline-variant/30 hover:scale-105"
              >
                <span className="scale-125 flex items-center justify-center w-6 h-6">
                  <LinkedinIcon />
                </span>
                <span className="font-semibold text-base tracking-wide">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
