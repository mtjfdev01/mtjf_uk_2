import SectionHeading from '../components/SectionHeading'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'
import { helpCards, fundBreakdown } from '../data'

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

// CUSTOMISE: Replace placeholder numbers with real goals as your work develops
const ourGoals = [
  {
    icon:   'education',
    title:  'Education & Skills',
    target: 'Year 1 Goal: First Cohort',
    body:   'We plan to run our first education or skills workshop within our first year of operation. Numbers and details will be shared once we are ready.',
    color:  'blue',
  },
  {
    icon:   'health',
    title:  'Health & Wellbeing',
    target: 'Year 1 Goal: Community Outreach',
    body:   'We intend to begin basic health outreach in our local community, working with established health providers to signpost people to support.',
    color:  'rose',
  },
  {
    icon:   'shelter',
    title:  'Shelter & Safety',
    target: 'Year 1 Goal: Local Partnerships',
    body:   'We will seek to establish working relationships with housing support providers so we can refer individuals to safe, appropriate shelter.',
    color:  'amber',
  },
  {
    icon:   'community',
    title:  'Community Development',
    target: 'Year 1 Goal: Community Listening',
    body:   'Before we design programmes, we will spend time listening. Our first goal is to understand the communities we hope to serve — properly.',
    color:  'green',
  },
]

const colourMap = {
  blue:  { bg: 'bg-blue-50',   text: 'text-blue-700'  },
  rose:  { bg: 'bg-rose-50',   text: 'text-rose-700'  },
  amber: { bg: 'bg-amber-50',  text: 'text-amber-700' },
  green: { bg: 'bg-forest-50', text: 'text-forest'    },
}

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our vision"
        title="Where We're Headed"
        subtitle="We have no impact to report yet — we just launched. This page shares our goals, our plans, and our commitment to honest reporting as we grow."
      />

      {/* ── HONEST BANNER ─────────────────────────────────────────────── */}
      <div className="bg-gold/10 border-y border-gold/20 py-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-forest-dark text-sm font-medium">
            <span className="font-bold">A note of honesty:</span> We launched in 2025. We have no impact statistics, completed programmes, or published accounts yet. This page reflects our plans and commitments — not past achievements. We will update it as our work begins.
          </p>
        </div>
      </div>

      {/* ── OUR FIRST-YEAR GOALS ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Year one priorities"
            title="What We Plan to Do First"
            subtitle="Before we report impact, we need to start. These are our honest, realistic goals for our first year of operation."
            className="mb-16"
          />
          {/* CUSTOMISE: Update goals above in this file as your plans develop */}
          <div className="grid md:grid-cols-2 gap-8">
            {ourGoals.map((goal) => {
              const c = colourMap[goal.color]
              return (
                <div key={goal.title} className="bg-cream rounded-3xl p-8 lg:p-10">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 ${c.bg} ${c.text}`}>
                    <Icon name={goal.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-forest-dark mb-2">{goal.title}</h3>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${c.text}`}>{goal.target}</p>
                  <p className="text-gray-500 leading-relaxed text-sm">{goal.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── THEORY OF CHANGE ──────────────────────────────────────────── */}
      <section className="py-24 bg-forest-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our approach"
            title="How We Plan to Create Change"
            subtitle="Before we do anything, we want to get this right. Here is our thinking on how change actually happens — and how we intend to create it."
            dark
            className="mb-16"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step:  '01',
                title: 'Listen First',
                body:  'We will spend our early months genuinely listening to communities — understanding what is needed before designing anything.',
              },
              {
                step:  '02',
                title: 'Plan Together',
                body:  'Programmes designed with communities, not for them. We will only build what people actually need and want.',
              },
              {
                step:  '03',
                title: 'Start Small',
                body:  'Our first programmes will be modest and manageable. We would rather do one thing well than five things poorly.',
              },
              {
                step:  '04',
                title: 'Report Honestly',
                body:  'We will share what worked, what did not, and what we learned — publicly and without spin.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="bg-forest rounded-2xl p-8 text-left group hover:bg-forest-light transition-colors">
                <span className="text-gold/50 font-serif text-4xl font-bold mb-4 block">{step}</span>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCY COMMITMENT ───────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Financial transparency"
                title="Our Planned Allocation"
                subtitle="We have no accounts to publish yet. But we are committing now to how we intend to use every donation we receive."
              />
              <div className="mt-10 space-y-5">
                {/* CUSTOMISE: Update fund breakdown in src/data/index.js */}
                {fundBreakdown.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-forest-dark">{item.label}</span>
                      <span className="text-sm font-bold text-forest">{item.percentage}%</span>
                    </div>
                    <div className="h-3 bg-white rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-6 italic">
                These are our intended allocations. Actual figures will be published once we have income to report.
              </p>
            </div>

            {/* Commitments panel */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-bold text-forest-dark mb-6">What We Are Committing To</h3>
              {[
                {
                  icon:  'shield',
                  title: 'Charity Commission Registration',
                  body:  'We are in the process of applying for registration. We will publish our registration number here as soon as it is confirmed.',
                },
                {
                  icon:  'chartBar',
                  title: 'Annual Accounts',
                  body:  'Once we have a full financial year, we will produce independently reviewed accounts and publish them publicly.',
                },
                {
                  icon:  'check',
                  title: 'Fundraising Standards',
                  body:  'We are committed to following the Code of Fundraising Practice from day one — before it is required of us.',
                },
                {
                  icon:  'lock',
                  title: 'Gift Aid Application',
                  body:  'We intend to apply for Gift Aid approval as soon as our charity registration is in place, maximising the value of every donation.',
                },
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

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-dark mb-4">
            Help Us Create the Impact We're Planning
          </h2>
          <p className="text-gray-500 mb-8">
            Every vision needs a first act of faith. Be among those who made this possible.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton to="/support-us" variant="primary" size="lg">Support Our Launch</CTAButton>
            <CTAButton to="/contact"    variant="outline"  size="lg">Ask Us a Question</CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}
