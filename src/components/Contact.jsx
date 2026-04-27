import { useState } from 'react'
import emailjs from '@emailjs/browser'

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M12 1.5a10.5 10.5 0 0 0-3.32 20.46c.53.1.72-.23.72-.52v-1.84c-2.95.64-3.58-1.25-3.58-1.25-.48-1.21-1.16-1.53-1.16-1.53-.95-.65.07-.64.07-.64 1.05.08 1.61 1.08 1.61 1.08.94 1.6 2.46 1.14 3.05.87.09-.68.37-1.14.67-1.4-2.36-.27-4.84-1.18-4.84-5.26 0-1.16.42-2.1 1.09-2.84-.1-.27-.47-1.36.11-2.84 0 0 .9-.29 2.95 1.08a10.3 10.3 0 0 1 5.38 0c2.05-1.37 2.95-1.08 2.95-1.08.58 1.48.21 2.57.11 2.84.68.74 1.09 1.68 1.09 2.84 0 4.09-2.49 4.98-4.86 5.25.38.33.72.99.72 1.99v2.95c0 .29.19.63.73.52A10.5 10.5 0 0 0 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path
        d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.6 18.4h2.69V9.82H5.6V18.4Zm4.38 0h2.68v-4.79c0-1.27.24-2.5 1.82-2.5 1.56 0 1.58 1.46 1.58 2.58v4.71h2.69v-5.25c0-2.58-.56-4.56-3.58-4.56-1.45 0-2.42.79-2.82 1.54h-.04V9.82H9.98c.03.75 0 8.58 0 8.58Z"
        fill="currentColor"
      />
      <path
        d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21Zm0 19.2a8.7 8.7 0 1 1 0-17.4 8.7 8.7 0 0 1 0 17.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      event.target.reset()
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section section--muted" id="contact">
      <div className="shell">
        <div className="contact-card">
          <div className="contact-card__intro">
            <h2 className="section-title section-title--tight">Let&apos;s Connect</h2>
            <p className="contact-card__summary">
              I&apos;m always open to discussing product design work or partnership opportunities.
            </p>

            <div className="contact-list">
              <div className="contact-list__item">
                <span className="material-symbols-outlined" aria-hidden="true">
                  mail
                </span>
                <span>ozeray66@gmail.com</span>
              </div>
              <div className="contact-list__item">
                <span className="material-symbols-outlined" aria-hidden="true">
                  location_on
                </span>
                <span>Bandırma, Balıkesir</span>
              </div>

              <div className="contact-list__item">
                <a
                  className="contact-social"
                  href="https://github.com/Eray-OZ"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="contact-social__icon">
                    <GithubIcon />
                  </span>
                  <span>GitHub</span>
                </a>
              </div>

              <div className="contact-list__item">
                <a
                  className="contact-social"
                  href="https://www.linkedin.com/in/eray-öz-5b7437207/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="contact-social__icon">
                    <LinkedinIcon />
                  </span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-form__field">
              <span className="sr-only">Name</span>
              <input name="from_name" type="text" placeholder="Name" required />
            </label>
            <label className="contact-form__field">
              <span className="sr-only">Email</span>
              <input name="from_email" type="email" placeholder="Email" required />
            </label>
            <label className="contact-form__field">
              <span className="sr-only">Message</span>
              <textarea name="message" rows="4" placeholder="Message" required />
            </label>
            {submitStatus === 'success' && (
              <p style={{ color: 'green', marginBottom: '1rem' }}>Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: 'red', marginBottom: '1rem' }}>Failed to send message. Please try again.</p>
            )}
            <button
              className="button button--primary button--submit"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
