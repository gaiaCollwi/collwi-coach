'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './components/AnimatedSection'

export default function CoachesPage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
          <FadeIn delay={0.15}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-light leading-[1.05] mb-8">
              Scale Your Impact.
              <br />
              Build Your Practice.
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl text-brand-navy/70 font-light mb-12">
              CollWi helps certified coaches deliver group coaching programs that change lives—without burning out on 1:1 sessions.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2.5 px-9 py-4 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Join as a Coach
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── THIS IS FOR YOU SECTION ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-12 text-center">
              This is for you if you're a certified coach who...
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {[
              "Wants to scale beyond 1:1 sessions without losing the personal touch",
              "Believes in the power of community and peer support",
              "Is ready to help people who are overwhelmed, isolated, and ready for real change",
              "Values connection, emotional safety, and transformation over quick fixes"
            ].map((item, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-brand-teal group-hover:scale-150 transition-transform" />
                  <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHY COACH ON COLLWI ─── */}
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-16 text-center">
              Why Coach on CollWi?
            </h2>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "📈",
                title: "Reach More People",
                desc: "Deliver group programs that serve multiple clients at once—without sacrificing quality or impact."
              },
              {
                icon: "👥",
                title: "Built-In Community",
                desc: "Your participants get peer support between sessions, creating momentum and accountability."
              },
              {
                icon: "🛠️",
                title: "Platform & Support",
                desc: "We handle the tech, marketing, and logistics. You focus on coaching."
              },
              {
                icon: "💜",
                title: "Mission-Driven",
                desc: "You're not just building a business—you're helping solve the loneliness crisis affecting millions."
              }
            ].map((benefit, i) => (
              <StaggerItem key={i} index={i}>
                <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all card-hover">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold text-brand-navy mb-3">{benefit.title}</h3>
                  <p className="text-lg text-brand-navy/70 leading-relaxed">{benefit.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal/5 via-white to-brand-purple/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-16 text-center">
              How It Works
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-8">
            {[
              {
                number: "1",
                title: "Design Your Program",
                desc: "Create group coaching experiences aligned with your expertise"
              },
              {
                number: "2",
                title: "Launch Your Cohort",
                desc: "We help you attract the right participants"
              },
              {
                number: "3",
                title: "Lead & Facilitate",
                desc: "Guide live sessions with small groups (typically 8-12 people)"
              },
              {
                number: "4",
                title: "Build Community",
                desc: "Foster peer connections that extend beyond sessions"
              },
              {
                number: "5",
                title: "Grow Your Practice",
                desc: "Scale your impact while maintaining quality"
              }
            ].map((step, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all card-hover">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-lg text-brand-navy/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHO WE'RE LOOKING FOR ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-12 text-center">
              Who We're Looking For
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-6">
            {[
              "Certified coaches (ICF, BCC, or equivalent credential)",
              "Experience with group facilitation (or willingness to learn)",
              "Commitment to emotional safety and inclusive practices",
              "Belief in the power of collective wisdom and peer support"
            ].map((item, i) => (
              <StaggerItem key={i} index={i}>
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-brand-purple group-hover:scale-150 transition-transform" />
                  <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed">
                    {item}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-8">
              Ready to Make a Bigger Impact?
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-xl md:text-2xl text-brand-navy/70 mb-12">
              Join CollWi's community of coaches who are transforming lives through group coaching.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-2.5 px-10 py-5 bg-brand-teal text-white font-semibold text-xl rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Apply to Coach
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── ABOUT COLLWI ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="bg-gradient-to-br from-brand-teal/5 via-white to-brand-purple/5 rounded-2xl p-10 shadow-soft">
              <h3 className="text-3xl font-semibold text-brand-navy mb-6">About CollWi</h3>
              <div className="space-y-4 text-lg text-brand-navy/70 leading-relaxed">
                <p>
                  CollWi is a social platform that turns personal growth from a lonely journey into a shared, 
                  guided experience through live group coaching and community. We're addressing the loneliness 
                  crisis by bringing people together with certified coaches in small, supportive groups.
                </p>
                <p className="text-xl font-semibold text-brand-teal">
                  Our mission: make growth social, accessible, and transformative.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-navy-light">© 2026 CollWi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
