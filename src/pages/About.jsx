import SectionHeading from '../components/SectionHeading'
import CTAButton      from '../components/CTAButton'
import Icon           from '../components/Icons'
import { teamMembers, orgInfo } from '../data'

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
        eyebrow="About us"
        title="Who We Are"
        subtitle="A UK-based foundation working to bring mercy and justice to those who need it most."
      />

      {/* ── OUR STORY ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest-light mb-3">Our story</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-dark mb-6 leading-tight">
                Why We Exist
              </h2>
              {/* CUSTOMISE: Replace with your actual founding story */}
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Mercy to Justice Foundation was built on a simple belief: that mercy and justice are not abstract ideals. They are practical callings that require real, grounded action.
                </p>
                <p>
                  We exist to walk alongside people who have fallen through the gaps, providing compassionate support today while working towards fairer systems for tomorrow.
                </p>
                <p>
                  Our work is shaped by listening first, acting second, and always keeping the needs of those we serve at the centre of every decision we make.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton to="/support-us" variant="primary">Support Our Work</CTAButton>
                <CTAButton to="/contact"    variant="outline">Get in Touch</CTAButton>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              {/*
                CUSTOMISE: Replace with a real image:
                <img src="/about.jpg" alt="About us" className="rounded-3xl w-full h-[480px] object-cover shadow-premium-lg" />
              */}
              <div className="rounded-3xl overflow-hidden shadow-premium-lg bg-gradient-to-br from-forest to-forest-light h-[480px] flex items-center justify-center">
                <p className="text-white/25 text-sm text-center px-8">[ Replace with your image ]</p>
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
                label:     'Our Mission',
                heading:   'To act with mercy and advocate for justice.',
                body:      'We walk alongside vulnerable individuals and communities, providing compassionate support and working towards systemic change.',
                border:    'border-forest',
                text:      'text-forest',
              },
              {
                label:     'Our Vision',
                heading:   'A world where mercy and justice go hand in hand.',
                body:      'We believe the world is made better not just by kind acts, but by the structures that make cruelty unnecessary. We are working towards both.',
                border:    'border-gold',
                text:      'text-gold-dark',
              },
              {
                label:     'Our Values',
                heading:   'Honesty. Compassion. Accountability.',
                body:      'We lead with truth about who we are and where we are. We approach people with dignity. We hold ourselves accountable to those we serve.',
                border:    'border-forest-light',
                text:      'text-forest-light',
              },
            ].map(({ label, heading, body, border, text }) => (
              <div key={label} className={`bg-white rounded-2xl shadow-premium p-8 border-t-4 ${border}`}>
                <span className={`text-xs font-semibold uppercase tracking-widest ${text} mb-4 block`}>{label}</span>
                <h3 className="font-serif text-xl font-bold text-forest-dark mb-4 leading-snug">{heading}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our people"
            title="The Team"
            subtitle="A small, committed group united by a shared belief in the power of mercy and justice."
            className="mb-16"
          />
          {/* CUSTOMISE: Update team members in src/data/index.js */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group text-center">
                {/* CUSTOMISE: Replace placeholder with real headshots */}
                <div className="relative mb-5 mx-auto w-36 h-36 rounded-2xl overflow-hidden shadow-premium bg-cream flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Icon name="volunteer" className="w-10 h-10 text-forest/20" />
                  )}
                </div>
                <h3 className="font-serif font-bold text-forest-dark text-lg">{member.name}</h3>
                <p className="text-gold text-xs font-semibold uppercase tracking-wider mt-1 mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}

            {/* Join the team card */}
            <div className="text-center">
              <div className="mx-auto w-36 h-36 rounded-2xl border-2 border-dashed border-gray-200 bg-cream/50 flex items-center justify-center mb-5">
                <span className="text-3xl text-gray-300">+</span>
              </div>
              <h3 className="font-serif font-bold text-gray-400 text-lg">Join Us</h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                We are looking for people who share our values.
              </p>
              <CTAButton to="/contact" variant="outline" size="sm" className="mt-4">Get in Touch</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section className="bg-forest py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Stand With Us
          </h2>
          <p className="text-white/65 mb-8">
            Your support helps us do the work we believe in.
          </p>
          <CTAButton to="/support-us" variant="gold" size="lg">Support Our Work</CTAButton>
        </div>
      </section>
    </>
  )
}
