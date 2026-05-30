import { useState } from 'react'
import ContactForm    from '../components/ContactForm'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'
import { orgInfo, faqs } from '../data'

function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="bg-forest-dark pt-36 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern" />
      <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-forest/40 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">{eyebrow}</p>
        <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h1>
        {subtitle && <p className="text-white/65 text-xl max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}

      </div>
    </section>
  )
}

// Accordion FAQ item
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-forest-dark text-sm">{question}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-200 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-45 border-forest' : ''}`}>
          <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-gray-500 leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="We'd Love to Hear From You"
        subtitle="Whether you have a question, want to get involved, or simply want to learn more, our team is here to help."
      />

      {/* ── CONTACT GRID ──────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left: info + map */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-bold text-forest-dark mb-4">Contact Details</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We aim to respond to all enquiries within two working days. For urgent matters, please call us directly.
                </p>
              </div>

              {/* Contact info cards */}
              {/* CUSTOMISE: Update contact details in src/data/index.js */}
              {[
                { icon: 'email',    label: 'Email us',          value: orgInfo.email,   href: `mailto:${orgInfo.email}` },
                { icon: 'phone',    label: 'Call us',           value: orgInfo.phone,   href: `tel:${orgInfo.phone.replace(/\s/g,'')}` },
                { icon: 'location', label: 'Visit us',          value: orgInfo.address, href: '#' },
              ].map(({ icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-premium hover:shadow-premium-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest flex items-center justify-center flex-shrink-0 group-hover:bg-forest group-hover:text-white transition-colors">
                    <Icon name={icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-sm font-semibold text-forest-dark">{value}</p>
                  </div>
                </a>
              ))}

              {/* Office hours */}
              <div className="bg-white rounded-2xl p-6 shadow-premium">
                <h4 className="font-semibold text-forest-dark text-sm mb-3">Office Hours</h4>
                {/* CUSTOMISE: Replace with your real office hours */}
                <div className="space-y-1.5 text-sm text-gray-500">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="font-medium text-forest-dark">9:00 – 17:30</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-medium text-forest-dark">10:00 – 14:00</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-gray-400">Closed</span></div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-52 bg-forest-50 border border-forest/10 flex items-center justify-center">
                {/*
                  CUSTOMISE: Replace this placeholder with an embedded map.
                  Example (Google Maps embed):
                  <iframe
                    src="https://www.google.com/maps/embed?pb=..."
                    className="w-full h-full"
                    loading="lazy"
                    title="Office location"
                  />
                */}
                <div className="text-center">
                  <Icon name="location" className="w-8 h-8 text-forest/30 mx-auto mb-2" />
                  <p className="text-forest/40 text-xs">[ Replace with embedded map ]</p>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">FAQs</p>
            <h2 className="font-serif text-4xl font-bold text-forest-dark">Frequently Asked Questions</h2>
          </div>
          {/* CUSTOMISE: Update FAQ entries in src/data/index.js */}
          <div className="bg-cream rounded-3xl p-8">
            {faqs.map(({ q, a }) => (
              <FAQItem key={q} question={q} answer={a} />
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-8">
            Can't find what you're looking for?{' '}
            <a href={`mailto:${orgInfo.email}`} className="text-forest font-medium hover:underline">
              Email us directly
            </a>
          </p>
        </div>
      </section>

      {/* ── SOCIAL STRIP ──────────────────────────────────────────────── */}
      <section className="py-16 bg-cream border-t border-cream-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-forest-dark mb-2">Follow Our Work</h3>
          <p className="text-gray-500 text-sm mb-8">Stay up to date with stories, news, and ways to get involved.</p>
          <div className="flex justify-center gap-4">
            {[
              { icon: 'twitter',   href: orgInfo.social.twitter,   label: 'Twitter / X'  },
              { icon: 'facebook',  href: orgInfo.social.facebook,  label: 'Facebook'      },
              { icon: 'instagram', href: orgInfo.social.instagram, label: 'Instagram'     },
              { icon: 'linkedin',  href: orgInfo.social.linkedin,  label: 'LinkedIn'      },
            ].map(({ icon, href, label }) => (
              <a
                key={icon}
                href={href}
                aria-label={label}
                className="w-12 h-12 rounded-2xl bg-white shadow-premium hover:bg-forest hover:text-white text-gray-400 flex items-center justify-center transition-all duration-200"
              >
                <Icon name={icon} className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
