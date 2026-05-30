import { Link } from 'react-router-dom'
import { orgInfo } from '../data'
import Icon from './Icons'

// CUSTOMISE: Organise footer links to match your site structure
const footerNav = [
  {
    heading: 'Navigate',
    links: [
      { label: 'Home',        to: '/'           },
      { label: 'About Us',    to: '/about'      },
      { label: 'Our Vision',  to: '/impact'     },
      { label: 'Stories',     to: '/stories'    },
      { label: 'Contact',     to: '/contact'    },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Donate',        to: '/support-us'            },
      { label: 'Volunteer',     to: '/support-us#volunteer'  },
      { label: 'Partner',       to: '/support-us#partner'    },
      { label: 'Fundraise',     to: '/support-us#fundraise'  },
    ],
  },
  {
    heading: 'Legal',
    links: [
      // CUSTOMISE: Add links to your legal pages once available
      { label: 'Privacy Policy',  to: '#' },
      { label: 'Cookie Policy',   to: '#' },
      { label: 'Terms of Use',    to: '#' },
      { label: 'Safeguarding',    to: '#' },
    ],
  },
]

const socialIcons = [
  { name: 'twitter',   href: orgInfo.social.twitter,   label: 'X / Twitter' },
  { name: 'facebook',  href: orgInfo.social.facebook,  label: 'Facebook'    },
  { name: 'instagram', href: orgInfo.social.instagram, label: 'Instagram'   },
  { name: 'linkedin',  href: orgInfo.social.linkedin,  label: 'LinkedIn'    },
]

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* CUSTOMISE: Replace with your logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="font-serif font-bold text-lg block text-white">{orgInfo.shortName}</span>
                <span className="text-[10px] uppercase tracking-widest text-white/40">Mercy to Justice Foundation</span>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              {/* CUSTOMISE: Replace with your tagline or mission statement */}
              Leading with mercy. Standing for justice.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialIcons.map(({ name, href, label }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold hover:text-forest-dark flex items-center justify-center transition-all duration-200 text-white/70"
                >
                  <Icon name={name} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-5">{heading}</h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-white/60 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold mb-1">Stay connected</p>
              <p className="text-white/50 text-sm">Follow our journey from day one - receive updates as our work begins.</p>
            </div>
            {/* CUSTOMISE: Connect to your email provider (Mailchimp, etc.) */}
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-72 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gold text-forest-dark font-semibold text-sm hover:bg-gold-light transition-colors flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          {/* CUSTOMISE: Update once charity registration is confirmed */}
          <p>© {new Date().getFullYear()} {orgInfo.name}. UK Based.</p>
          <p>Est. 2025 · Built with purpose</p>
        </div>
      </div>
    </footer>
  )
}
