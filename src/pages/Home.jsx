import { Link } from 'react-router-dom'
import Hero          from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import StatCard       from '../components/StatCard'
import ImpactCard     from '../components/ImpactCard'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'
import {
  impactStats,
  helpCards,
  supportOptions,
  fundBreakdown,
} from '../data'

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
      {/* ── 1. HERO ───────────────────────────────────────────────────── */}
      <Hero />

      {/* ── 2. HONEST LAUNCH BANNER ───────────────────────────────────── */}
      <div className="bg-gold/10 border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-forest-dark">
              <Icon name="check" className="w-4 h-4 text-forest" />
              <span className="font-medium">Newly Established · 2025</span>
            </div>
            <div className="flex items-center gap-2 text-forest-dark">
              <Icon name="check" className="w-4 h-4 text-forest" />
              <span className="font-medium">UK Based</span>
            </div>
            <div className="flex items-center gap-2 text-forest-dark">
              <Icon name="check" className="w-4 h-4 text-forest" />
              <span className="font-medium">Registration in Progress</span>
            </div>
            <div className="flex items-center gap-2 text-forest-dark">
              <Icon name="check" className="w-4 h-4 text-forest" />
              <span className="font-medium">100% Transparent from Day One</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. MISSION STATEMENT ──────────────────────────────────────── */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* CUSTOMISE: Replace with your mission statement */}
          <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-forest-dark leading-tight">
            "We believe mercy and justice are not opposites —<br className="hidden md:block" />
            <span className="italic text-forest"> they are the same calling,<br className="hidden md:block" />
            expressed in two directions."</span>
          </blockquote>
          <div className="mt-10 w-16 h-1 bg-gold mx-auto rounded-full" />
          <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
            {/* CUSTOMISE: Replace with your own description */}
            Mercy to Justice Foundation is a brand new UK-based NGO. We have just launched, and we are taking our very first steps. Our mission is to walk alongside vulnerable people and communities — providing compassion today while working for justice tomorrow.
          </p>
          <div className="mt-10 bg-cream rounded-2xl px-8 py-5 inline-block">
            <p className="text-sm text-forest font-medium">
              We are just getting started. No programmes yet. No statistics. Just a clear mission, a committed team, and a genuine belief that change is possible — with your support.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton to="/about"     variant="outline" size="lg">Who We Are</CTAButton>
            <CTAButton to="/support-us" variant="primary" size="lg">Support Our Launch</CTAButton>
          </div>
        </div>
      </Section>

      {/* ── 4. WHERE WE STAND (honest day-one pillars) ────────────────── */}
      <section className="bg-forest-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Day one. Clear purpose."
            title="Who We Are, Right Now"
            subtitle="We have no impact numbers yet. What we do have is a clear foundation, a firm commitment, and a vision for what comes next."
            dark
            className="mb-16"
          />
          {/* These reflect our commitments, not past achievements */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-forest-dark">
                <StatCard {...stat} dark />
              </div>
            ))}
          </div>
          <p className="text-center text-white/35 text-xs mt-6">
            These reflect our founding commitments and goals — not historical achievements. We are honest about where we are.
          </p>
        </div>
      </section>

      {/* ── 5. WHAT WE PLAN TO DO ─────────────────────────────────────── */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Our four pillars"
          title="What We Plan to Do"
          subtitle="Our programmes are not running yet — but this is where we are headed. These four areas will guide our work as we grow."
          className="mb-16"
        />
        {/* CUSTOMISE: Update programme areas in src/data/index.js */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCards.map((card) => (
            <ImpactCard key={card.id} {...card} />
          ))}
        </div>
        <div className="text-center mt-12">
          <CTAButton to="/impact" variant="outline">See Our Full Vision</CTAButton>
        </div>
      </Section>

      {/* ── 6. WHY NOW / URGENCY SECTION ──────────────────────────────── */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">
              Why we launched
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
              The Need Is Real.<br />The Time Is Now.
            </h2>
            {/* CUSTOMISE: Replace with your own founding rationale */}
            <p className="text-gray-500 leading-relaxed mb-4">
              We saw a gap. People in need, falling through the cracks. Systems that were meant to help — but did not always reach the people who needed them most.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We could not stay on the sidelines. So we took the hardest first step — we started. We do not have all the answers. We do not have years of data. But we have a clear direction, a willing team, and the courage to begin.
            </p>
            <div className="space-y-3">
              {[
                'We will be honest about what we know — and what we do not.',
                'We will report openly on how every penny is used.',
                'We will grow at the pace that our community supports.',
                'We will never claim more than we have done.',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-gray-600">
                  <Icon name="check" className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <CTAButton to="/about" variant="outline">Read Our Story</CTAButton>
            </div>
          </div>

          {/* Right: founding quote card */}
          <div className="bg-forest rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-6 right-6 opacity-10">
              <Icon name="quote" className="w-20 h-20 text-white" />
            </div>
            <div className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl font-medium text-white leading-relaxed italic mb-8">
                "We do not need to be large to be effective. We just need to be honest, focused, and relentless."
              </p>
              <div>
                {/* CUSTOMISE: Replace with your founder's name */}
                <p className="text-gold font-semibold text-sm">The Founding Team</p>
                <p className="text-white/50 text-xs mt-0.5">Mercy to Justice Foundation · Est. 2025</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 7. HOW TO SUPPORT US ──────────────────────────────────────── */}
      <Section className="bg-cream">
        <SectionHeading
          eyebrow="Get involved"
          title="Four Ways to Help Us Begin"
          subtitle="We are starting with nothing but purpose. With your help — whether that is time, money, or a shared post — we can take our first meaningful steps."
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
                  : 'bg-white shadow-premium hover:shadow-premium-lg border border-gray-100'
              }`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${
                opt.highlight ? 'bg-white/15 text-white' : 'bg-forest-50 text-forest'
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

      {/* ── 8. OUR COMMITMENT TO TRANSPARENCY ────────────────────────── */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">
              Our promise
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
              Transparent from Day One
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              {/* CUSTOMISE: Replace with your transparency statement */}
              We have nothing to hide — because we have only just begun. What we commit to is this: every penny you give will be tracked, every decision will be explained, and our accounts will be published as soon as we are established enough to produce them.
            </p>
            <ul className="space-y-4">
              {[
                'We will publish our income and expenditure openly',
                'We will apply for charity registration as soon as eligible',
                'We will never inflate our numbers or make up achievements',
                'We will report honestly on progress — including setbacks',
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

          {/* Right: Planned fund breakdown */}
          <div className="bg-cream rounded-3xl p-8 lg:p-10">
            <h3 className="font-serif text-xl font-semibold text-forest-dark mb-2">
              Our Planned Fund Allocation
            </h3>
            <p className="text-xs text-gray-400 mb-8">This is how we intend to use donations — before we have any to report.</p>
            <div className="space-y-5">
              {/* CUSTOMISE: Update in src/data/index.js */}
              {fundBreakdown.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-forest-dark">{item.label}</span>
                    <span className="text-sm font-bold text-forest">{item.percentage}%</span>
                  </div>
                  <div className="h-3 bg-cream-dark rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.color}`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-cream-dark flex items-center gap-3">
              <Icon name="shield" className="w-5 h-5 text-forest" />
              <p className="text-xs text-gray-500">
                We are committed to applying for Fundraising Regulator membership and following best-practice standards from the outset.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 9. FINAL CTA ──────────────────────────────────────────────── */}
      <section className="bg-forest py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-100" />
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-forest-light/30 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Be part of the beginning
          </p>
          {/* CUSTOMISE: Replace with your final CTA headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Every great organisation<br className="hidden md:block" />
            starts with{' '}
            <span className="italic text-gold/90">someone like you.</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            We are at zero. With your support — whether that is a donation, a volunteer shift, or simply sharing our page — we can take our very first steps towards mercy and justice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton to="/support-us" variant="gold"      size="xl">Support Our Launch</CTAButton>
            <CTAButton to="/contact"    variant="secondary" size="xl">Get in Touch</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
