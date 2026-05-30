import SectionHeading from '../components/SectionHeading'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'
import { teamMembers, milestones, orgInfo } from '../data'

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

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Who we are"
        title="Our Story Starts Here"
        subtitle="We are a brand new organisation. This is not a page of achievements — it is a page of purpose. Here is why we exist."
      />

      {/* ── OUR STORY ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">Our beginning</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
                We Just Started.<br />And That Is Enough.
              </h2>
              {/* CUSTOMISE: Replace with your actual founding story */}
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Mercy to Justice Foundation was not born out of decades of experience or a large team of professionals. It was born out of a conviction — that mercy and justice are not abstract ideals, but practical callings that require real, grounded action.
                </p>
                <p>
                  We saw people falling through the gaps. We saw systems that were meant to help — but did not always reach those who needed them most. We could not look away. So we made a decision: we would start something. Something small, honest, and rooted in genuine care.
                </p>
                <p>
                  Today is our first step. We do not have statistics to show you. We do not have years of impact to report. What we have is a clear sense of why we exist, a committed founding team, and an honest desire to earn your trust over time.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton to="/support-us" variant="primary">Support Our Launch</CTAButton>
                <CTAButton to="/contact"    variant="outline">Get in Touch</CTAButton>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              {/*
                CUSTOMISE: Replace this placeholder with a real image:
                <img src="/your-image.jpg" alt="About us" className="rounded-3xl w-full h-[500px] object-cover shadow-premium-lg" />
              */}
              <div className="rounded-3xl overflow-hidden shadow-premium-lg bg-gradient-to-br from-forest to-forest-light h-[500px] flex items-center justify-center">
                <p className="text-white/30 text-sm font-medium text-center px-8">
                  [ Replace with a photo of your team or community ]
                </p>
              </div>
              {/* Founding year badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-premium p-5">
                <div className="font-serif text-3xl font-bold text-forest mb-1">2025</div>
                <div className="text-xs text-gray-500 font-medium">Year Founded</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-forest rounded-2xl shadow-green p-5">
                <div className="font-serif text-3xl font-bold text-gold mb-1">Day 1</div>
                <div className="text-xs text-white/70 font-medium">Where we are</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ───────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="What drives us"
            title="Mission, Vision & Values"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {/* CUSTOMISE: Replace with your mission, vision, and values */}
            {[
              {
                label:      'Our Mission',
                heading:    'To act with mercy and advocate for justice — from day one.',
                body:       'We exist to walk alongside vulnerable individuals and communities, providing compassionate support today while working towards systemic justice tomorrow.',
                color:      'border-forest bg-forest/5',
                textColor:  'text-forest',
              },
              {
                label:      'Our Vision',
                heading:    'A world where mercy and justice go hand in hand.',
                body:       'We believe the world is made better not just by kind acts, but by the structures and systems that make those acts unnecessary. We are working towards both.',
                color:      'border-gold bg-gold/5',
                textColor:  'text-gold-dark',
              },
              {
                label:      'Our Values',
                heading:    'Honesty. Compassion. Accountability.',
                body:       'We lead with truth — especially about where we are in our journey. We approach people with dignity and warmth. And we hold ourselves accountable to those we serve.',
                color:      'border-forest-light bg-forest-lighter/5',
                textColor:  'text-forest-light',
              },
            ].map(({ label, heading, body, color, textColor }) => (
              <div key={label} className={`bg-white rounded-2xl shadow-premium p-8 border-t-4 ${color}`}>
                <span className={`text-xs font-semibold uppercase tracking-widest ${textColor} mb-4 block`}>{label}</span>
                <h3 className="font-serif text-xl font-bold text-forest-dark mb-4 leading-snug">{heading}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR JOURNEY SO FAR ──────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our journey"
            title="Where We Are"
            subtitle="We have one milestone so far. But every journey begins with one step."
            className="mb-16"
          />
          {/* CUSTOMISE: Add new milestones in src/data/index.js as your work grows */}
          <div className="relative">
            <div className="absolute left-[30px] top-0 bottom-0 w-px bg-cream-dark" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-sm font-bold flex-shrink-0 z-10 relative bg-forest text-gold">
                      {m.year}
                    </div>
                  </div>
                  <div className="pb-4 pt-2">
                    <h3 className="font-serif text-lg font-bold text-forest-dark mb-1">{m.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>
              ))}

              {/* Future entry placeholder */}
              <div className="flex gap-8 items-start opacity-30">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-dashed border-cream-darker">
                  <span className="text-gray-400 text-xl">+</span>
                </div>
                <div className="pb-4 pt-2">
                  <h3 className="font-serif text-lg font-bold text-gray-400 mb-1">Your Support Changes What Comes Next</h3>
                  <p className="text-gray-400 text-sm">Our next milestone depends on the people who believe in us now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOUNDING TEAM ────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="The people behind MTJF"
            title="Our Founding Team"
            subtitle="A small but committed team, united by a shared belief that now is the right time to act."
            className="mb-16"
          />
          {/* CUSTOMISE: Update team members in src/data/index.js */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="relative mb-5 mx-auto w-36 h-36 rounded-2xl overflow-hidden shadow-premium bg-forest-50 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    /* CUSTOMISE: Replace with real headshots */
                    <div className="text-center px-4">
                      <div className="w-12 h-12 rounded-full bg-forest/20 flex items-center justify-center mx-auto mb-2">
                        <Icon name="volunteer" className="w-6 h-6 text-forest/50" />
                      </div>
                      <p className="text-[10px] text-forest/40">Add photo</p>
                    </div>
                  )}
                </div>
                {/* CUSTOMISE: Replace placeholder name with real name */}
                <h3 className="font-serif font-bold text-forest-dark text-lg">{member.name}</h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-1 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}

            {/* "Join our team" card */}
            <div className="text-center group">
              <div className="mx-auto w-36 h-36 rounded-2xl border-2 border-dashed border-cream-darker bg-white flex items-center justify-center mb-5 group-hover:border-forest transition-colors">
                <span className="text-3xl text-gray-300 group-hover:text-forest transition-colors">+</span>
              </div>
              <h3 className="font-serif font-bold text-gray-400 text-lg">Join Our Team</h3>
              <p className="text-gray-400 text-xs uppercase tracking-wider mt-1 mb-2">Volunteer / Staff</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are actively looking for passionate people to join us.
              </p>
              <CTAButton to="/contact" variant="outline" size="sm" className="mt-4">Get in Touch</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────────────── */}
      <section className="bg-forest py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Be Part of Our Story — From the Beginning
          </h2>
          <p className="text-white/65 mb-8">
            We have just started. The next chapter is unwritten — and you can help write it.
          </p>
          <CTAButton to="/support-us" variant="gold" size="lg">Support Our Launch</CTAButton>
        </div>
      </section>
    </>
  )
}
