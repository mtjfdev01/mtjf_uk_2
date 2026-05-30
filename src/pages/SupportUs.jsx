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

// CUSTOMISE: Volunteering opportunity types — update as your opportunities develop
const volunteerRoles = [
  { title: 'General Support',     icon: 'community', description: 'Help us with day-to-day tasks as we set up our operations. Every pair of hands counts.' },
  { title: 'Skilled Volunteering', icon: 'education', description: 'Offer your professional skills in areas like communications, finance, legal, or design to help us get established.' },
  { title: 'Community Outreach',   icon: 'volunteer', description: 'Help us connect with people and communities. Spread the word about who we are and what we are building.' },
  { title: 'Fundraising Support',  icon: 'fundraise', description: 'Help us raise our first funds through events, challenges, or online campaigns.' },
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
        title="Help Us Take Our First Steps"
        subtitle="We just launched. We have no impact to point to yet — only a clear mission and an honest request for support."
      />

      {/* ── TAB NAV ───────────────────────────────────────────────────── */}
      <div className="sticky top-20 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-none gap-1 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={tab.id}
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

      {/* ── DONATE PANEL ──────────────────────────────────────────────── */}
      {activeTab === 'donate' && (
        <section className="py-24 lg:py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">Be our first</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
                  Be a Founding Donor
                </h2>
                {/* CUSTOMISE: Replace donation copy */}
                <p className="text-gray-500 leading-relaxed mb-4">
                  We have just launched. We have no history, no impressive statistics, and no track record to point to. What we do have is an honest mission, a committed team, and a genuine need for your support.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  Every penny you give right now will go towards getting our first programmes off the ground — covering essential costs, enabling community listening, and beginning the work we have committed to do.
                </p>

                {/* What donations fund right now */}
                <div className="bg-white rounded-2xl p-6 shadow-premium mb-8">
                  <h4 className="font-semibold text-forest-dark text-sm mb-4">Right now, donations help us:</h4>
                  <ul className="space-y-3">
                    {[
                      'Cover essential operational and registration costs',
                      'Begin community needs assessment and listening',
                      'Build the team and volunteer network',
                      'Develop our first programmes',
                      'Establish our financial and governance structures',
                    ].map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-gray-600">
                        <Icon name="check" className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Honest note */}
                <div className="bg-forest/5 border border-forest/10 rounded-xl p-5">
                  <p className="text-xs text-forest-dark leading-relaxed">
                    <span className="font-semibold">A note of honesty:</span> Our charity registration is in progress. We are not yet able to offer Gift Aid. We will communicate clearly when this changes. Thank you for understanding.
                  </p>
                </div>
              </div>

              <div>
                <DonationCard />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── VOLUNTEER PANEL ───────────────────────────────────────────── */}
      {activeTab === 'volunteer' && (
        <section className="py-24 lg:py-32 bg-cream" id="volunteer">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading
              eyebrow="Give your time"
              title="Volunteer With Us"
              subtitle="We are a brand new organisation building from scratch. Right now, volunteer support is every bit as valuable as a financial donation."
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

            {/* Volunteer enquiry form */}
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-premium p-8 md:p-10">
              <h3 className="font-serif text-2xl font-bold text-forest-dark mb-2">Register Your Interest</h3>
              <p className="text-sm text-gray-400 mb-6">We will get back to you within a few working days.</p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text"  placeholder="Your name"     required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm" />
                  <input type="email" placeholder="Email address" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm" />
                </div>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm bg-white text-gray-600">
                  <option value="">Select a volunteering area</option>
                  {volunteerRoles.map((r) => <option key={r.title}>{r.title}</option>)}
                </select>
                <textarea rows={3} placeholder="Tell us about yourself and your availability" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none text-sm resize-none" />
                {/* NOTE: Connect this form to your backend or form service */}
                <button type="submit" className="w-full bg-forest text-white py-4 rounded-xl font-semibold hover:bg-forest-light transition-colors">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* ── PARTNER PANEL ─────────────────────────────────────────────── */}
      {activeTab === 'partner' && (
        <section className="py-24 lg:py-32 bg-cream" id="partner">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <SectionHeading
              eyebrow="Work with us"
              title="Partner With a New Organisation"
              subtitle="We are at the very beginning. If you are an organisation that shares our values, we are actively seeking our first partnerships."
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
              {[
                {
                  title: 'Community Partners',
                  body:  'Do you work with similar communities? We are looking for local organisations to collaborate with — sharing knowledge, referrals, and reach.',
                },
                {
                  title: 'Corporate Supporters',
                  body:  'Does your company want to align with a brand new cause from the ground floor? We offer genuine co-creation, not just a logo placement.',
                },
                {
                  title: 'Institutional Funders',
                  body:  'Are you a grant-making organisation open to supporting early-stage NGOs? We would welcome a conversation about our plans and vision.',
                },
                {
                  title: 'Pro-Bono Professionals',
                  body:  'Could your organisation offer legal, financial, communications, or strategic support in kind? We would be grateful for any professional help.',
                },
              ].map(({ title, body }) => (
                <div key={title} className="bg-white rounded-2xl p-7 shadow-premium">
                  <div className="w-2 h-8 bg-gold rounded-full mb-4" />
                  <h3 className="font-serif text-xl font-bold text-forest-dark mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>

            <CTAButton to="/contact" variant="primary" size="lg">Start a Conversation</CTAButton>
          </div>
        </section>
      )}

      {/* ── FUNDRAISE PANEL ───────────────────────────────────────────── */}
      {activeTab === 'fundraise' && (
        <section className="py-24 lg:py-32 bg-cream" id="fundraise">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Raise funds for us"
                  title="Help Us Raise Our First Funds"
                  subtitle="A fundraising page, a sponsored event, or even a social media post — every act of advocacy helps a brand new organisation get off the ground."
                />
                <div className="mt-8 space-y-5">
                  {[
                    {
                      title: 'Online Fundraising',
                      body:  'Set up a page and share with your network. Ask people to back a new organisation with something to prove.',
                    },
                    {
                      title: 'Sponsored Challenges',
                      body:  'A run, a cycle, a swim, a bake-off — choose something that suits you and raise funds in our name.',
                    },
                    {
                      title: 'Community Events',
                      body:  'Quiz nights, coffee mornings, raffles — small events can make a big difference for a brand new charity.',
                    },
                    {
                      title: 'Spread the Word',
                      body:  'Share our website on social media. Tell people why you believe in what we are trying to do. That is fundraising too.',
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="flex gap-4">
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                      <div>
                        <h4 className="font-semibold text-forest-dark text-sm mb-1">{title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <CTAButton to="/contact" variant="primary" size="lg">Tell Us About Your Fundraiser</CTAButton>
                </div>
              </div>
              {/* Image placeholder */}
              <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-forest to-forest-light h-96 flex items-center justify-center">
                {/* CUSTOMISE: Replace with a real image */}
                <p className="text-white/30 text-sm px-8 text-center">[ Replace with a fundraising or team photo ]</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── HONEST TRANSPARENCY STRIP ─────────────────────────────────── */}
      <div className="bg-forest-50 border-y border-forest/10 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center flex-shrink-0">
              <Icon name="shield" className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-semibold text-forest-dark">Our registration is in progress</h4>
              <p className="text-sm text-gray-500">We will publish our charity number as soon as registration is confirmed. Thank you for trusting us.</p>
            </div>
          </div>
          <CTAButton to="/contact" variant="outline" size="sm">Ask Us Anything</CTAButton>
        </div>
      </div>
    </>
  )
}
