const experiences = [
  {
    period: '2024 July - 2024 August',
    title: 'Intern',
    company: 'Eti Maden İşletmeleri',
    description: '',
    current: true,
  },
]

const skillGroups = [
  {
    title: 'Development',
    items: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Node.js', 'Nest.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Python'],
  },
  {
    title: 'AI & ML',
    items: ['AI Agents', 'RAG Architectures', 'Vector Databases', 'Semantic Search'],
  },
  {
    title: 'Tools',
    items: ['Git', 'Docker', 'Postman'],
  },
  {
    title: 'Languages',
    items: ['English (B2)'],
  },
]

function ExpAndSkills() {
  return (
    <section className="section section--plain" id="experience">
      <div className="shell split-section">
        <div>
          <h2 className="section-title section-title--tight">Experience</h2>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline__item" key={`${item.period}-${item.title}`}>
                <span className={`timeline__marker${item.current ? ' is-current' : ''}`} />
                <span className="timeline__period">{item.period}</span>
                <h3>{item.title}</h3>
                <p className="timeline__company">{item.company}</p>
                <p className="timeline__description">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div id="skills">
          <h2 className="section-title section-title--tight">Skills &amp; Tools</h2>

          <div className="skills-panel">
            {skillGroups.map((group) => (
              <section className="skills-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skills-group__chips">
                  {group.items.map((item) => (
                    <span className="skill-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpAndSkills
