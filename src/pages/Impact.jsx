import SectionHeading from '../components/SectionHeading'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'
import { helpCards } from '../data'

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

const colourMap = {
  education: { bg: 'bg-blue-50',   text: 'text-blue-700'  },
  health:    { bg: 'bg-rose-50',   text: 'text-rose-700'  },
  shelter:   { bg: 'bg-amber-50',  text: 'text-amber-700' },
  community: { bg: 'bg-forest-50', text: 'text-forest'    },
}

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our vision"
        title="What We're Working Towards"
        subtitle="Our four programme areas and the change we aim to create within each of them."
      />

      {/* ── PROGRAMME AREAS ───────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programme areas"
            title="Four Pillars of Our Work"
            subtitle="These are the areas where we intend to focus, chosen because of the depth of need and the opportunity for meaningful change."
            className="mb-16"
          />
          {/* CUSTOMISE: Update programme areas in src/data/index.js */}
          <div className="grid md:grid-cols-2 gap-8">
            {helpCards.map((card) => {
              const c = colourMap[card.icon] ?? colourMap.community
              return (
                <div key={card.id} className="bg-cream rounded-3xl p-8 lg:p-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${c.bg} ${c.text}`}>
                    <Icon name={card.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark mb-4">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OUR APPROACH ──────────────────────────────────────────────── */}
      <section className="py-24 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we work"
            title="Our Approach"
            subtitle="How we intend to do this work, not just what we intend to do."
            dark
            className="mb-16"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step:  '01',
                title: 'Listen First',
                body:  'We will spend time genuinely understanding communities before designing anything.',
              },
              {
                step:  '02',
                title: 'Design Together',
                body:  'Programmes shaped with communities, not just for them.',
              },
              {
                step:  '03',
                title: 'Act Carefully',
                body:  'We will start small and build only what is needed and wanted.',
              },
              {
                step:  '04',
                title: 'Report Openly',
                body:  'We will share what works, what does not, and what we learn along the way.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-forest rounded-2xl p-8 text-left hover:bg-forest-light transition-colors">
                <span className="text-gold/40 font-serif text-4xl font-bold mb-4 block">{step}</span>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCY ──────────────────────────────────────────────── */}
      {/* Financial Transparency section - commented out, uncomment when ready
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Financial transparency"
                title="How We Use Donations"
                subtitle="Our planned allocation, a commitment we make publicly and will report against honestly."
              />
              <div className="mt-10 space-y-5">
                {fundBreakdown.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-forest-dark">{item.label}</span>
                      <span className="text-sm font-bold text-forest">{item.percentage}%</span>
                    </div>
                    <div className="h-3 bg-cream-dark rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 lg:pt-14">
              {[
                { icon: 'shield',   title: 'Charity Commission',    body: 'We are pursuing registration and will publish our number here as soon as it is confirmed.' },
                { icon: 'chartBar', title: 'Annual Reporting',      body: 'We will produce accounts and publish them publicly once we have a full financial year to report.' },
                { icon: 'check',    title: 'Fundraising Standards', body: 'We are committed to the Code of Fundraising Practice from the outset.' },
                { icon: 'lock',     title: 'Gift Aid',              body: 'We will apply for Gift Aid approval as soon as charity registration is confirmed.' },
              ].map(({ icon, title, body }) => (
                <div key={title} className="flex gap-5 bg-white rounded-2xl p-6 shadow-premium">
                  <div className="w-10 h-10 rounded-xl bg-forest-50 text-forest flex items-center justify-center flex-shrink-0">
                    <Icon name={icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-dark text-sm mb-1">{title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            Help Us Make This a Reality
          </h2>
          <p className="text-gray-500 mb-8">
            Every act of support helps us move from intention to action.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton to="/support-us" variant="primary" size="lg">Support Our Work</CTAButton>
            <CTAButton to="/contact"    variant="outline"  size="lg">Get in Touch</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
