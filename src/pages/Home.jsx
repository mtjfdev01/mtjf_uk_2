import { Link } from 'react-router-dom'
import Hero          from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import ImpactCard     from '../components/ImpactCard'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'
import { helpCards, supportOptions, fundBreakdown } from '../data'

function Section({ children, className = '' }) {
  return (
    <section className={`py-24 lg:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── MISSION ───────────────────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-3xl mx-auto text-center">
          {/* CUSTOMISE: Replace with your mission statement */}
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-4">Our Purpose</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-forest-dark leading-tight mb-6">
            Mercy and justice,<br />
            <span className="italic text-forest">together.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            {/* CUSTOMISE: Replace with your own description */}
            Mercy to Justice Foundation is a UK-based organisation working alongside vulnerable individuals and communities. We believe that compassion and justice are not opposing forces — they are two sides of the same calling.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton to="/about"      variant="outline" size="lg">Who We Are</CTAButton>
            <CTAButton to="/support-us" variant="primary" size="lg">Get Involved</CTAButton>
          </div>
        </div>
      </Section>

      {/* ── WHAT WE DO ────────────────────────────────────────────────── */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Our work"
          title="What We Do"
          subtitle="Our work spans four areas, each chosen because of the depth of need and the opportunity to create real, lasting change."
          className="mb-16"
        />
        {/* CUSTOMISE: Update programme areas in src/data/index.js */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCards.map((card) => (
            <ImpactCard key={card.id} {...card} />
          ))}
        </div>
      </Section>

      {/* ── HOW TO HELP ───────────────────────────────────────────────── */}
      <Section className="bg-white">
        <SectionHeading
          eyebrow="Get involved"
          title="Ways to Support Us"
          subtitle="Whether you give your time, your resources, or your voice — every act of support moves us forward."
          className="mb-16"
        />
        {/* CUSTOMISE: Update support options in src/data/index.js */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((opt) => (
            <div
              key={opt.id}
              className={`group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
                opt.highlight
                  ? 'bg-forest text-white shadow-green hover:bg-forest-light'
                  : 'bg-cream shadow-premium hover:shadow-premium-lg border border-gray-100'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                opt.highlight ? 'bg-white/15 text-white' : 'bg-white text-forest'
              }`}>
                <Icon name={opt.icon} className="w-6 h-6" />
              </div>
              <h3 className={`font-serif text-xl font-bold mb-3 ${opt.highlight ? 'text-white' : 'text-forest-dark'}`}>
                {opt.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 ${opt.highlight ? 'text-white/75' : 'text-gray-500'}`}>
                {opt.description}
              </p>
              <Link
                to={opt.href}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                  opt.highlight ? 'text-gold hover:text-gold-light' : 'text-forest hover:text-forest-light'
                }`}
              >
                {opt.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TRANSPARENCY ──────────────────────────────────────────────── */}
      <Section className="bg-cream">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">Our commitment</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
              Transparency in Everything We Do
            </h2>
            {/* CUSTOMISE: Replace with your transparency statement */}
            <p className="text-gray-500 leading-relaxed mb-8">
              We believe donors deserve to know exactly how their support is used. Every pound is tracked and every decision is reported openly — because trust is the foundation of everything we do.
            </p>
            <ul className="space-y-4">
              {[
                'All income and expenditure reported openly',
                'Independent oversight from our board',
                'Committed to Charity Commission registration',
                'No hidden costs or unexplained overheads',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                  <Icon name="check" className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <CTAButton to="/contact" variant="outline">Ask Us Anything</CTAButton>
            </div>
          </div>

          {/* Fund breakdown */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-premium">
            <h3 className="font-serif text-xl font-semibold text-forest-dark mb-2">How We Use Donations</h3>
            <p className="text-xs text-gray-400 mb-8">Our planned allocation for every pound received.</p>
            <div className="space-y-5">
              {/* CUSTOMISE: Update in src/data/index.js */}
              {fundBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-forest-dark">{item.label}</span>
                    <span className="text-sm font-bold text-forest">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-cream rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-cream flex items-center gap-3">
              <Icon name="shield" className="w-5 h-5 text-forest" />
              <p className="text-xs text-gray-500">
                Committed to Fundraising Regulator standards from the outset.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
      <section className="bg-forest py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-forest-light/30 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* CUSTOMISE: Replace with your CTA headline */}
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Make a<br />
            <span className="italic text-gold/90">Real Difference?</span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Stand with us. Your support — however large or small — helps us do the work that needs doing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton to="/support-us" variant="gold"      size="xl">Support Our Work</CTAButton>
            <CTAButton to="/contact"    variant="secondary" size="xl">Get in Touch</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
