import { useState } from 'react'
import DonationCard   from '../components/DonationCard'
import SectionHeading from '../components/SectionHeading'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'

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

// CUSTOMISE: Update as your volunteering opportunities develop
const volunteerRoles = [
  { title: 'General Support',      icon: 'community', description: 'Help with day-to-day tasks and operations.' },
  { title: 'Skilled Volunteering', icon: 'education', description: 'Offer professional skills in communications, finance, or design.' },
  { title: 'Community Outreach',   icon: 'volunteer', description: 'Help us connect with people and communities.' },
  { title: 'Fundraising Support',  icon: 'fundraise', description: 'Help us raise funds through events or campaigns.' },
]

const tabs = [
  { id: 'donate',    label: 'Donate',    icon: 'donate'    },
  { id: 'volunteer', label: 'Volunteer', icon: 'volunteer' },
  { id: 'partner',   label: 'Partner',   icon: 'partner'   },
  { id: 'fundraise', label: 'Fundraise', icon: 'fundraise' },
]

export default function SupportUs() {
  const [activeTab, setActiveTab] = useState('donate')

  return (
    <>
      <PageHero
        eyebrow="Support our work"
        title="Get Involved"
        subtitle="There are several ways to support what we are building. Find the one that is right for you."
      />

      {/* ── TAB NAV ───────────────────────────────────────────────────── */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-forest text-white'
                    : 'text-gray-500 hover:bg-forest-50 hover:text-forest'
                }`}
              >
                <Icon name={tab.icon} className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DONATE ────────────────────────────────────────────────────── */}
      {activeTab === 'donate' && (
        <section className="py-24 lg:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">Donate</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
                  Support Our Work
                </h2>
                {/* CUSTOMISE: Replace donation copy */}
                <p className="text-gray-500 leading-relaxed mb-8">
                  Your donation goes directly towards enabling our work — covering the essential costs that allow us to operate, listen, and act with purpose.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    'Donations processed securely',
                    'Choose a one-time or monthly contribution',
                    'Full record provided for every donation',
                    'Gift Aid available once registration is confirmed',
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-gray-600">
                      <Icon name="check" className="w-5 h-5 text-forest flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <DonationCard />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── VOLUNTEER ─────────────────────────────────────────────────── */}
      {activeTab === 'volunteer' && (
        <section className="py-24 lg:py-32 bg-cream" id="volunteer">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Volunteer"
              title="Give Your Time"
              subtitle="We welcome volunteers with all kinds of skills and backgrounds. Get in touch and we will find the right fit."
              className="mb-16"
            />
            {/* CUSTOMISE: Update volunteer roles above */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {volunteerRoles.map((role) => (
                <div key={role.title} className="bg-white rounded-2xl p-7 shadow-premium border border-gray-100">
                  <div className="w-12 h-12 rounded-xl bg-forest-50 text-forest flex items-center justify-center mb-5">
                    <Icon name={role.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif font-bold text-forest-dark mb-2">{role.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{role.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-premium p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-forest-dark mb-6">Register Your Interest</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text"  placeholder="Your name"     required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm" />
                  <input type="email" placeholder="Email address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm" />
                </div>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm bg-white text-gray-600">
                  <option value="">Select an area</option>
                  {volunteerRoles.map((r) => <option key={r.title}>{r.title}</option>)}
                </select>
                <textarea rows={3} placeholder="Tell us about yourself and your availability" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm resize-none" />
                {/* NOTE: Connect to your backend or form service */}
                <button type="submit" className="w-full bg-forest text-white py-4 rounded-xl font-semibold hover:bg-forest-light transition-colors">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* ── PARTNER ───────────────────────────────────────────────────── */}
      {activeTab === 'partner' && (
        <section className="py-24 lg:py-32 bg-cream" id="partner">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <SectionHeading
              eyebrow="Partner"
              title="Work With Us"
              subtitle="We are open to partnerships with organisations that share our values. Whether you are a community group, a funder, or a business — let us talk."
              className="mb-12"
            />
            <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
              {[
                { title: 'Community Organisations', body: 'Do you work with similar communities? We are interested in collaboration, referrals, and shared learning.' },
                { title: 'Corporate Partners',       body: 'Align your organisation with a cause rooted in purpose. We are open to in-kind support, giving, and team engagement.' },
                { title: 'Funders & Grant-Makers',   body: 'We welcome conversations with those who support early-stage organisations with a clear mission.' },
                { title: 'Pro-Bono Support',          body: 'Could your organisation offer skills in kind? Legal, financial, or communications support would be gratefully received.' },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-2xl p-7 shadow-premium">
                  <div className="w-2 h-8 bg-gold rounded-full mb-4" />
                  <h3 className="font-serif text-xl font-bold text-forest-dark mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <CTAButton to="/contact" variant="primary" size="lg">Start a Conversation</CTAButton>
          </div>
        </section>
      )}

      {/* ── FUNDRAISE ─────────────────────────────────────────────────── */}
      {activeTab === 'fundraise' && (
        <section className="py-24 lg:py-32 bg-cream" id="fundraise">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Fundraise"
              title="Raise Funds for Us"
              subtitle="Any fundraising effort — however small — helps us do more. We are grateful for every act of support."
              className="mb-12"
            />
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: 'Online Fundraising',   body: 'Set up a page and share with your network.' },
                { title: 'Sponsored Challenges', body: 'A run, a cycle, a swim — raise funds in our name.' },
                { title: 'Community Events',     body: 'Quiz nights, coffee mornings, raffles — every penny counts.' },
                { title: 'Share Our Work',       body: 'Spread the word on social media. That is fundraising too.' },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-2xl p-6 shadow-premium flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <div>
                    <h4 className="font-semibold text-forest-dark text-sm mb-1">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <CTAButton to="/contact" variant="primary" size="lg">Tell Us About Your Fundraiser</CTAButton>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
