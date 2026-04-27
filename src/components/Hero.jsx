function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="shell hero__layout">
        <div className="hero__content">
          <div className="hero__eyebrow">Hello, I am</div>
          <h1 className="display-title">Eray ÖZ</h1>
          <p className="hero__subtitle">Software Developer.</p>
          <p className="hero__copy">
            I am a Software Developer who builds modern applications centered around intelligent and robust backends.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View Work
            </a>
            <a className="button button--secondary" href="#contact">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero__media">
          <div className="hero__portrait-frame">
            <img
              className="hero__portrait"
              alt="Portrait"
              src="https://avatars.githubusercontent.com/u/77747901?v=4"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
