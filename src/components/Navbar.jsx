import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { orgInfo } from '../data'
import Icon from './Icons'

// CUSTOMISE: Add or remove navigation links here
const navLinks = [
  { label: 'Home',       to: '/'           },
  { label: 'About Us',   to: '/about'      },
  { label: 'Our Vision', to: '/impact'     },
  { label: 'Stories',    to: '/stories'    },
  { label: 'Contact',    to: '/contact'    },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 40) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    function onResize() { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navBase     = 'fixed top-0 left-0 right-0 z-50 transition-all duration-300'
  const navScrolled = 'bg-white/95 backdrop-blur-md shadow-premium border-b border-gray-100'
  const navTop      = 'bg-transparent'

  return (
    <>
      <header className={`${navBase} ${scrolled || mobileOpen ? navScrolled : navTop}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileOpen(false)}>
              {/* CUSTOMISE: Replace this mark with your own logo image */}
              <div className="w-9 h-9 bg-forest rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-forest-light transition-colors">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                {/* Short brand name on one line, full name below */}
                <span className={`font-serif font-bold text-lg leading-none block transition-colors ${scrolled || mobileOpen ? 'text-forest-dark' : 'text-white text-shadow'}`}>
                  {orgInfo.shortName}
                </span>
                <span className={`text-[10px] uppercase tracking-widest block transition-colors leading-tight ${scrolled || mobileOpen ? 'text-gray-400' : 'text-white/55'}`}>
                  Mercy to Justice Foundation
                </span>
              </div>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                      isActive
                        ? 'bg-forest text-white'
                        : scrolled
                          ? 'text-gray-600 hover:text-forest hover:bg-forest-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/support-us"
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-gold text-forest-dark hover:bg-gold-light transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Support Us
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled || mobileOpen ? 'text-forest-dark hover:bg-forest-50' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <Icon name={mobileOpen ? 'close' : 'menu'} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-gray-100 px-6 pb-6 pt-4 bg-white">
            <nav className="flex flex-col gap-1 mb-6">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive ? 'bg-forest text-white' : 'text-gray-600 hover:bg-forest-50 hover:text-forest'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
            <Link
              to="/support-us"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3.5 rounded-full font-semibold bg-forest text-white hover:bg-forest-light transition-colors"
            >
              Support Us
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-forest-dark/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  )
}
