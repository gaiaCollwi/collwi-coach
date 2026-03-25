'use client'

import { ArrowRight, TrendingUp, Users, Settings, Heart, Award, Shield, Target } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from './components/AnimatedSection'

export default function CoachesPage() {
  return (
    <div className="min-h-screen">
      {/* ─── HERO SECTION ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-gold/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-[15%] right-[25%] w-48 h-48 bg-brand-coral/8 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-[30%] left-[20%] w-56 h-56 bg-brand-teal/6 rounded-full blur-3xl animate-float-delayed" />
        {/* Pulsing dots */}
        <div className="absolute top-[25%] right-[15%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[35%] left-[12%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />
        <div className="absolute top-[60%] right-[30%] w-2 h-2 rounded-full bg-brand-coral/40 animate-pulse-soft" />
        <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 rounded-full bg-brand-gold/50 animate-pulse-soft" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
          <FadeIn delay={0.15}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-light leading-[1.1] mb-8">
              You're an Exceptional Coach.
              <br />
              So Why Is It So Hard to Find Paying Clients?
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-brand-navy/70 font-light mb-6">
              You've tried everything—free discovery sessions, networking, posting on social media. Your website is beautiful. Yet you still struggle to get clients consistently.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg md:text-xl text-brand-navy/60 mb-12">
              You love coaching. You hate the business side. We've solved that for you.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <a
              href="https://collwi.com/register?type=coach"
              className="group inline-flex items-center gap-2.5 px-9 py-4 bg-brand-teal text-white font-semibold text-lg rounded-full shadow-teal hover:bg-brand-teal-dark hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Join as a Coach
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── THIS IS FOR YOU SECTION ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-warm overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 right-[10%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[5%] w-72 h-72 bg-brand-coral/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 right-[30%] w-48 h-48 bg-brand-purple/6 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-12 text-center">
              This is for you if you're a certified coach who...
            </h2>
          </FadeIn>

          <StaggerContainer className="space-y-4">
            {[
              "Delivers real transformations, but struggles to maintain a steady stream of clients",
              "Is stuck in 1:1 sessions with no clear way to scale beyond current hours",
              "Spends more time creating content than actually coaching clients",
              "Is tired of the constant hustle just to keep the calendar full",
              "Is already fully booked but wants to reach more people without working more",
              "Is great at what they do, but exhausted from having to prove it every single day"
            ].map((item, i) => {
              const borderColors = ['border-l-brand-teal', 'border-l-brand-coral', 'border-l-brand-purple', 'border-l-brand-teal', 'border-l-brand-coral', 'border-l-brand-purple']
              return (
                <StaggerItem key={i} index={i}>
                  <div className={`relative rounded-xl border-l-4 ${borderColors[i]} bg-white/40 backdrop-blur-sm p-6 group hover:bg-white/60 hover:backdrop-blur-sm hover:shadow-soft transition-all duration-300`}>
                    <span className="absolute top-3 right-4 text-5xl font-sans font-light text-brand-navy/5 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-lg md:text-xl text-brand-navy/70 leading-relaxed pr-12">
                      {item}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <FadeIn delay={0.5}>
            <p className="text-xl md:text-2xl text-center font-medium text-brand-navy/80 mt-16">
              You're one of the 82% of coaches who struggle—not because your coaching isn't good enough, but because client acquisition is a different skill set. CollWi solves that.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── WHY COACH ON COLLWI ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-[5%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[8%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
              Why CollWi Works When
              <br />
              Everything Else Hasn't
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-brand-navy/60 text-center mb-16 max-w-2xl mx-auto">
              You've tried free sessions, networking, social media. You've spent money on websites and courses. Nothing worked. Here's why CollWi is different:
            </p>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                color: "bg-brand-coral/10 text-brand-coral",
                hoverGlow: "hover:shadow-glow-coral",
                title: "We Connect You With Members Seeking Growth",
                desc: "Stop chasing clients. CollWi connects you with members actively seeking growth and community support. No more cold outreach. No more endless free discovery sessions."
              },
              {
                icon: Users,
                color: "bg-brand-teal/10 text-brand-teal",
                hoverGlow: "hover:shadow-glow-teal",
                title: "Scale Without Burning Out",
                desc: "You're stuck trading time for money in 1:1 sessions. Group coaching lets you serve 8-12 people at once—multiply your income without multiplying your hours."
              },
              {
                icon: Settings,
                color: "bg-brand-purple/10 text-brand-purple",
                hoverGlow: "hover:shadow-glow-purple",
                title: "We Handle What You Hate",
                desc: "Marketing. Tech. Logistics. Client acquisition. The stuff that keeps you up at night? We've solved it. You focus on coaching. We handle the rest."
              },
              {
                icon: Heart,
                color: "bg-brand-coral/10 text-brand-coral",
                hoverGlow: "hover:shadow-glow-coral",
                title: "Join a Growing Network",
                desc: "Connect with other coaches on the platform who understand the journey. Build your practice alongside others who are scaling their impact."
              }
            ].map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <StaggerItem key={i} index={i}>
                  <div className={`relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-soft-lg ${benefit.hoverGlow} transition-all duration-300 card-hover h-full flex flex-col border border-white/40 hover:border-brand-teal/20`}>
                    <span className="absolute top-4 right-5 text-6xl font-sans font-light text-brand-navy/[0.04] select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center mb-4 transition-shadow duration-300 group-hover:shadow-lg`}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-semibold text-brand-navy mb-3">{benefit.title}</h3>
                    <p className="text-lg text-brand-navy/70 leading-relaxed">{benefit.desc}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal/5 via-white to-brand-purple/5 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 right-[15%] w-56 h-56 bg-brand-teal/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-[10%] w-64 h-64 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] left-[50%] w-48 h-48 bg-brand-coral/5 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
              How It Works
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-center text-brand-navy/60 mb-16">
              Simple. Sustainable. No Marketing Required.
            </p>
          </FadeIn>

          <StaggerContainer className="relative space-y-8">
            {/* Vertical connecting line on desktop */}
            <div className="hidden md:block absolute left-6 top-8 bottom-8 w-px border-l-2 border-dashed border-brand-teal/20" />

            {[
              {
                number: "1",
                title: "Create Your Group Coaching Program",
                desc: "Quickly and easily set up your program on our platform. You decide the price, schedule, and structure."
              },
              {
                number: "2",
                title: "Members Find You",
                desc: "Members browse programs and choose what fits their needs. No more cold outreach. (Some introductory sessions may still be helpful, but no more spending all your time giving away free coaching.)"
              },
              {
                number: "3",
                title: "Lead Small Groups (8-12 People)",
                desc: "Guide live sessions. Build community. Make the impact you've always wanted."
              },
              {
                number: "4",
                title: "Earn Sustainably",
                desc: "Scale your income without scaling your hours. Build the financially viable practice you deserve."
              },
              {
                number: "5",
                title: "Join a Growing Network",
                desc: "Connect with other coaches on the platform who understand the journey."
              }
            ].map((step, i) => {
              const borderColors = ['border-l-brand-teal', 'border-l-brand-coral', 'border-l-brand-purple', 'border-l-brand-teal', 'border-l-brand-coral']
              return (
                <StaggerItem key={i} index={i}>
                  <div className={`flex items-start gap-6 bg-white/70 backdrop-blur-sm border-l-4 ${borderColors[i]} rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 card-hover`}>
                    <div className="relative flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl bg-gradient-to-br from-brand-teal to-brand-purple text-white shadow-md ring-4 ring-white/80">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-brand-navy mb-2">{step.title}</h3>
                      <p className="text-lg text-brand-navy/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── WHO WE'RE LOOKING FOR ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-purple overflow-hidden">
        {/* Large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-purple/[0.03] tracking-widest uppercase">COACHES</span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6 text-center">
              Who We're Looking For
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl md:text-2xl text-center text-brand-navy/70 mb-12 max-w-3xl mx-auto">
              <strong>We're selective.</strong> We only work with qualified, ethical coaches who are committed to transformation—for their clients AND themselves.
            </p>
          </FadeIn>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "Certified coaches (ICF, BCC, or equivalent credential)", icon: Award, accent: "border-t-brand-teal", glow: "hover:shadow-glow-teal" },
              { text: "Experience with group facilitation (or willingness to learn)", icon: Users, accent: "border-t-brand-coral", glow: "hover:shadow-glow-coral" },
              { text: "Commitment to emotional safety and inclusive practices", icon: Shield, accent: "border-t-brand-purple", glow: "hover:shadow-glow-purple" },
              { text: "Belief in the power of collective wisdom and peer support", icon: Heart, accent: "border-t-brand-teal", glow: "hover:shadow-glow-teal" },
              { text: "Ready to stop chasing clients and start building a real business", icon: Target, accent: "border-t-brand-coral", glow: "hover:shadow-glow-coral" },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <StaggerItem key={i} index={i}>
                  <div className={`relative bg-white/60 backdrop-blur-sm border-t-4 ${item.accent} rounded-xl p-6 ${item.glow} hover:bg-white/80 transition-all duration-300 h-full`}>
                    <span className="absolute top-3 right-4 text-5xl font-sans font-light text-brand-navy/[0.04] select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-4">
                      <Icon size={24} className="text-brand-purple" strokeWidth={1.5} />
                    </div>
                    <p className="text-lg text-brand-navy/70 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-brand-teal via-brand-teal-dark to-brand-purple overflow-hidden">
        {/* Floating animated orbs */}
        <div className="absolute top-10 left-[10%] w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[10%] w-72 h-72 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[30%] w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl animate-float-slow" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-8 text-white">
              Ready to Stop Struggling?
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-xl md:text-2xl text-white/80 mb-6 leading-relaxed">
              Join CollWi and finally build the financially viable coaching practice you deserve. No more free discovery sessions. No more 'hopeful' social media posts. No more wondering what you're doing wrong.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-lg md:text-xl text-white/70 mb-12">
              You're an exceptional coach. You just needed the other half of the equation. We've got it.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <a
              href="https://collwi.com/register?type=coach"
              className="group inline-flex items-center gap-2.5 px-10 py-5 bg-white text-brand-teal font-semibold text-xl rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/95"
            >
              Register as a Coach With CollWi
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeIn>

          <FadeIn delay={0.5}>
            <p className="text-sm text-white/60 mt-6">
              Join our growing network of certified coaches offering group programs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-warm overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.15em] uppercase rounded-full mb-5">
                Getting Started
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light">
                How CollWi <em className="text-brand-purple italic">works for coaches</em>
              </h2>
            </div>
          </FadeIn>

          <div className="relative grid sm:grid-cols-2 gap-6">
            {/* Connecting lines between cards */}
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[80%] border-l-2 border-dashed border-brand-purple/10" />
            <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-px border-t-2 border-dashed border-brand-purple/10" />

            {[
              { num: '01', title: 'Register as a Coach', desc: 'Quick registration for certified coaches ready to offer group programs', border: 'border-t-brand-teal' },
              { num: '02', title: 'Create Your Program', desc: 'Easy, quick process to set up your group coaching program. You set your own pricing and schedule', border: 'border-t-brand-coral' },
              { num: '03', title: 'Members Find You', desc: 'Members browse programs and choose what fits their needs—no marketing required on your end', border: 'border-t-brand-purple' },
              { num: '04', title: 'Lead & Earn', desc: 'Facilitate small groups (8-12 people), scale your impact, build sustainable income', border: 'border-t-brand-teal' },
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`bg-white/70 backdrop-blur-sm border-t-4 ${step.border} rounded-2xl p-8 shadow-soft hover:shadow-lg transition-all duration-300 h-full`}>
                  <span className="text-5xl font-sans font-bold bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent mb-4 block">{step.num}</span>
                  <h3 className="text-xl font-bold mb-3 text-brand-navy">{step.title}</h3>
                  <p className="text-brand-navy/60 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="text-center text-xl font-semibold text-brand-navy/60 mt-14">
              No more cold outreach. No more unpaid discovery sessions. Just coaching.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── ABOUT COLLWI ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-intense overflow-hidden">
        {/* Extra floating orbs */}
        <div className="absolute top-10 left-[8%] w-56 h-56 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[5%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[60%] left-[40%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[20%] right-[20%] w-2 h-2 rounded-full bg-brand-teal/30 animate-pulse-soft" />
        <div className="absolute bottom-[25%] left-[15%] w-3 h-3 rounded-full bg-brand-purple/25 animate-pulse-soft" />
        <div className="absolute top-[50%] right-[12%] w-2 h-2 rounded-full bg-brand-coral/30 animate-pulse-soft" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.15em] uppercase rounded-full mb-5">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-light leading-tight">
                What CollWi <em className="text-brand-teal italic">is</em>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <FadeIn delay={0.1}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-lg hover:shadow-glow-teal transition-all duration-300 h-full border border-white/40 hover:border-brand-teal/20">
                <div className="w-14 h-14 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={26} className="text-brand-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">For CollWiers (Participants)</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  We turn personal growth from a lonely journey into a shared, guided experience.
                  Small groups. Professional coaches. Real transformation.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-lg hover:shadow-glow-purple transition-all duration-300 h-full border border-white/40 hover:border-brand-purple/20">
                <div className="w-14 h-14 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp size={26} className="text-brand-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-brand-navy">For Coaches (You!)</h3>
                <p className="text-lg text-brand-navy/60 leading-relaxed">
                  We solve the client acquisition problem that causes 82% of coaches to fail.
                  Certified coaches get matched with people actively seeking transformation.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center">
              <p className="text-xl md:text-2xl text-brand-navy/60 leading-relaxed max-w-3xl mx-auto mb-6">
                CollWi is a platform, yes, but more than that, it's a <span className="text-brand-navy font-medium">movement</span>.
                A community where coaches can thrive and people can transform—together.
              </p>
              <p className="text-2xl font-semibold text-brand-teal">
                Our mission: Make growth social, accessible, and transformative—for everyone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative bg-brand-navy text-white py-12 overflow-hidden">
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-[20%] w-48 h-48 bg-brand-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-56 h-56 bg-brand-purple/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-navy-light">© 2026 CollWi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
