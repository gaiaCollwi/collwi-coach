'use client'

import { ArrowRight, Heart, Users, Sparkles, Target, Compass } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimatedSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        <div className="absolute top-32 right-[5%] w-80 h-80 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[8%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-coral/10 text-brand-coral text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8">
              About CollWi
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-light leading-[1.1] mb-8">
              We built CollWi because we know
              <br />
              how hard it is to be a <em className="text-brand-teal italic">great coach</em> and a 
              successful business owner.
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed mb-6">
              The best coaches we know spend their days helping other people transform their lives. 
              And spend their nights worried about where the next client will come from.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed">
              They're exhausted. They're burned out. They're thinking about leaving a profession they love because the business side feels impossible.
            </p>
          </FadeIn>

          <FadeIn delay={0.55}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-3xl mx-auto leading-relaxed">
              We realized: there are thousands of coaches just like this. Delivering world-class transformations while struggling to scale. 
              Coaches who should be focused on their craft, not consumed by <em className="text-brand-navy font-medium not-italic">client acquisition.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── The Problem We Saw ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                The Problem
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight mb-6">
                The coach's paradox:
                <br />
                <em className="text-brand-purple italic">Great at coaching. Terrible at business.</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-8 text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl">
                You spent thousands on your certification. You invested years perfecting your craft. Your clients transform. 
                You know you're damn good at what you do.
              </p>
              <p className="text-xl md:text-2xl">
                And yet you're still struggling to fill your calendar. You're spending more time on marketing and admin 
                than you are on actual coaching. Your income is unpredictable. You're working 50-hour weeks and earning less 
                than you could in a corporate job.
              </p>
              <p className="text-xl md:text-2xl">
                You didn't get into coaching to spend your days networking and posting on LinkedIn. You got into it to transform lives. 
                But right now, you're transforming nobody because you're too busy trying to find clients.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl font-sans font-light text-center mt-16 text-brand-navy">
              We couldn't find a platform that solved this... so we <em className="text-brand-teal italic">built it.</em>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── What We Built ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                Our Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight">
                What CollWi <em className="text-brand-teal italic">is</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-16" staggerDelay={0.08}>
            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={26} className="text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">We Handle the Business</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Marketing, enrollment, payments, member management—we do it all. 
                  You focus on coaching and changing lives.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-coral/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart size={26} className="text-brand-coral" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">We Connect You to Clients</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Our community brings you pre-qualified, ready-to-invest participants. 
                  No more cold outreach or networking pressure.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6">
                  <Compass size={26} className="text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">Recurring Revenue</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Monthly subscriptions replace the feast-or-famine cycle of 1:1 coaching. 
                  Know your income. Plan your life.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
                <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles size={26} className="text-brand-gold" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">A Community of Coaches</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  Learn from other coaches running successful groups. Share templates, best practices, 
                  and support each other as you build.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-center text-brand-navy/60 leading-relaxed max-w-3xl mx-auto">
              CollWi is a platform, yes, but more than that, it's a <span className="text-brand-navy font-medium">solution</span>. 
              A way for incredible coaches to finally build the business they deserve while staying true to what they love.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-coral/10 text-brand-coral text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                Our Beliefs
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight">
                What we believe about <em className="text-brand-coral italic">coaching</em>
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {[
              {
                title: 'Coaching Changes Lives',
                desc: "The best thing a person can do is invest in a coach who truly gets them. Coaching creates transformation at scale in a way nothing else can. We believe in this deeply.",
              },
              {
                title: 'Great Coaches Deserve Great Income',
                desc: "If you're certified, skilled, and committed to client transformation, you should earn a comfortable living doing it. Not by hustling harder. By building smarter.",
              },
              {
                title: 'Group Coaching is the Future',
                desc: "One-on-one coaching has a ceiling. Group coaching scales impact without burning out coaches. It creates community. It creates transformation. It's the better model.",
              },
              {
                title: 'Coaches Need Support',
                desc: "The best coaches in the world struggle with business. You shouldn't have to. We're here to remove the barriers so you can do what you were meant to do.",
              },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border-l-4 border-brand-teal pl-6 py-2">
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">{value.title}</h3>
                  <p className="text-lg text-brand-navy/60 leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Are ─── */}
      <section className="py-24 md:py-32 px-6 bg-surface-warm">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                The Team
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight mb-6">
                Meet the <em className="text-brand-purple italic">founders</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="space-y-6 text-brand-navy/60 leading-relaxed max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl">
                We're <span className="text-brand-navy font-medium">Barbara</span> and <span className="text-brand-navy font-medium">Adriana</span>. 
                We're both coaches ourselves. We've built 1:1 practices. We've hit the ceiling. We've felt the frustration.
              </p>
              <p className="text-lg md:text-xl">
                We know what it's like to be exceptional at your craft and terrible at business. We know what it feels like 
                to spend your days helping others and your nights stressed about your own financial stability.
              </p>
              <p className="text-lg md:text-xl">
                Then we realized: there are thousands of coaches feeling this way. Coaches who could be running multiple thriving groups, 
                earning real income, helping hundreds of people... but they're too stuck in the weeds of client acquisition to see it.
              </p>
              <p className="text-lg md:text-xl">
                That's why we built CollWi. A platform designed specifically for coaches like us. Built by coaches. For coaches.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-2xl md:text-3xl font-sans font-light text-center mt-16 text-brand-navy">
              And now, we're inviting you to join us and build the practice you deserve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Why Coaches Choose CollWi ─── */}
      <section className="py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal/5 via-white to-brand-coral/5">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                Why Join
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight mb-8">
                Why coaches trust CollWi
              </h2>
            </div>
          </FadeIn>

          <ScaleIn delay={0.15}>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-soft-xl border border-gray-100">
              <ul className="space-y-6 text-lg md:text-xl text-brand-navy/70 leading-relaxed">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 flex-shrink-0" />
                  <span>We handle the business so you can focus on coaching</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 flex-shrink-0" />
                  <span>We bring you qualified clients ready to invest</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 flex-shrink-0" />
                  <span>We pay you 70% of group revenue (no hidden fees)</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 flex-shrink-0" />
                  <span>We provide full platform support, training, and community</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 flex-shrink-0" />
                  <span>You can scale from 1 group to multiple groups</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 flex-shrink-0" />
                  <span>Your groups become recurring revenue streams</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-teal mt-2.5 flex-shrink-0" />
                  <span>You get the predictability and peace of mind you deserve</span>
                </li>
              </ul>
            </div>
          </ScaleIn>
        </div>
      </section>

      {/* ─── Join the Movement ─── */}
      <section className="relative py-28 md:py-36 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-light text-white mb-6 leading-tight">
              You don't have to choose between
              <br />
              doing great work and earning
              <br />
              a great income.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80 mb-4">
              Build a thriving group coaching business on CollWi.
            </p>
            <p className="text-lg text-white/60 mb-12">
              Join coaches earning $2,000-5,000+ monthly. Apply today.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://collwi.com/register"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-teal-dark font-semibold text-lg rounded-full shadow-soft-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              Apply as a Coach
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
