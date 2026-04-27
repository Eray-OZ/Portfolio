import { useEffect, useRef, useState } from 'react'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Exp and Skills' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [activeHref, setActiveHref] = useState('')
  const pendingHrefRef = useRef('')

  useEffect(() => {
    const isSectionActive = (href, probeLine) => {
      const section = document.querySelector(href)

      if (!section) {
        return false
      }

      const { top, bottom } = section.getBoundingClientRect()
      return top <= probeLine && bottom >= probeLine
    }

    const updateActiveSection = () => {
      const probeLine = 120 + window.innerHeight * 0.25

      if (pendingHrefRef.current) {
        if (isSectionActive(pendingHrefRef.current, probeLine)) {
          setActiveHref(pendingHrefRef.current)
          pendingHrefRef.current = ''
        } else {
          setActiveHref(pendingHrefRef.current)
          return
        }
      }

      const nextActiveItem = navItems.find((item) => isSectionActive(item.href, probeLine))

      setActiveHref(nextActiveItem?.href ?? '')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <header className="site-header">
      <nav className="shell site-nav" aria-label="Primary">
        <a className="site-brand" href="#hero">
          Portfolio
        </a>

        <div className="site-nav__links">
          {navItems.map((item) => (
            <a
              key={item.href}
              aria-current={item.href === activeHref ? 'page' : undefined}
              className={`site-nav__link${item.href === activeHref ? ' is-active' : ''}`}
              href={item.href}
              onClick={() => {
                pendingHrefRef.current = item.href
                setActiveHref(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="button button--primary button--small" type="button">
          Resume
        </button>
      </nav>
    </header>
  )
}

export default Navbar
