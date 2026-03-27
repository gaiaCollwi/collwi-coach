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
        <div className="absolute top-[50%] left-[50%] w-64 h-64 bg-brand-teal/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[25%] right-[18%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[30%] left-[15%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-32 pb-20">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-coral/10 text-brand-coral text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-10">
              About CollWi
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extralight leading-[1.15] mb-16">
              Great coaches deserve<br />
              a <em className="text-brand-teal italic font-light">great business.</em>
            </h1>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.3}>
              <div className="group bg-white/50 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:bg-white/70 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 bg-brand-teal/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Heart size={22} className="text-brand-teal" />
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  You spend your days transforming lives. And your nights worrying about where the next client will come from.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="group bg-white/50 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:bg-white/70 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 bg-brand-coral/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles size={22} className="text-brand-coral" />
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  You&apos;re exhausted. Not from coaching&mdash;from everything else. The marketing, the selling, the hustle that never ends.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="group bg-white/50 backdrop-blur-sm border border-white/40 rounded-2xl p-8 hover:bg-white/70 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-500">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Target size={22} className="text-brand-purple" />
                </div>
                <p className="text-brand-navy/60 leading-relaxed">
                  We built CollWi so you can focus on your craft. We handle the rest.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── The Problem — Storytelling Journey ─── */}
      <section className="relative py-28 md:py-40 px-6 overflow-hidden" style={{
        background: 'linear-gradient(180deg, #FAF8F5 0%, #F5F0FF 50%, #F0F9F8 100%)',
      }}>
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-purple/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-brand-teal/[0.05] rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-sans font-extralight leading-tight text-center mb-24">
              The coach&apos;s paradox
            </h2>
          </FadeIn>

          {/* Storytelling timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple/20 via-brand-coral/20 to-brand-teal/20" />

            {/* Step 1 — The Dream */}
            <FadeIn delay={0.1}>
              <div className="relative flex items-start mb-20 md:mb-28">
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-purple ring-4 ring-brand-purple/20" />
                <div className="ml-20 md:ml-0 md:w-[45%] md:pr-16">
                  <span className="text-brand-purple text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">The dream</span>
                  <p className="text-xl md:text-2xl font-light text-brand-navy/70 leading-relaxed">
                    You spent thousands on your certification. Years perfecting your craft. Your clients <em className="text-brand-navy font-medium not-italic">transform.</em>
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 2 — The Reality */}
            <FadeIn delay={0.2}>
              <div className="relative flex items-start mb-20 md:mb-28 md:flex-row-reverse">
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-coral ring-4 ring-brand-coral/20" />
                <div className="ml-20 md:ml-0 md:w-[45%] md:pl-16 md:text-left">
                  <span className="text-brand-coral text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">The reality</span>
                  <p className="text-xl md:text-2xl font-light text-brand-navy/70 leading-relaxed">
                    And yet you can&apos;t fill your calendar. More time on marketing than coaching. Unpredictable income. 50-hour weeks for less than a corporate salary.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Step 3 — The Breaking Point */}
            <FadeIn delay={0.3}>
              <div className="relative flex items-start mb-20 md:mb-28">
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-teal ring-4 ring-brand-teal/20" />
                <div className="ml-20 md:ml-0 md:w-[45%] md:pr-16">
                  <span className="text-brand-teal text-xs font-semibold tracking-[0.2em] uppercase mb-3 block">The breaking point</span>
                  <p className="text-xl md:text-2xl font-light text-brand-navy/70 leading-relaxed">
                    You got into coaching to transform lives. But you&apos;re transforming nobody&mdash;because you&apos;re too busy trying to find clients.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* The Resolve */}
          <FadeIn delay={0.4}>
            <div className="text-center mt-8">
              <p className="text-2xl md:text-4xl font-extralight text-brand-navy/80 leading-relaxed">
                We couldn&apos;t find a platform that solved this.
              </p>
              <p className="text-2xl md:text-4xl font-light text-brand-teal mt-2">
                So we built it.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── What We Built ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-[5%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-[8%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[20%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[15%] right-[22%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[20%] left-[18%] w-3 h-3 rounded-full bg-brand-coral/30 animate-pulse-soft" />
        <div className="absolute top-[60%] left-[35%] w-2 h-2 rounded-full bg-brand-purple/35 animate-pulse-soft" />

        {/* Large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-teal/[0.03] tracking-widest uppercase">BUILT</span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
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
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-soft hover:shadow-glow-teal transition-all duration-300 card-hover h-full">
                <span className="absolute top-4 right-5 text-6xl font-sans font-light text-brand-navy/[0.04] select-none">01</span>
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
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-soft hover:shadow-glow-coral transition-all duration-300 card-hover h-full">
                <span className="absolute top-4 right-5 text-6xl font-sans font-light text-brand-navy/[0.04] select-none">02</span>
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
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-soft hover:shadow-glow-purple transition-all duration-300 card-hover h-full">
                <span className="absolute top-4 right-5 text-6xl font-sans font-light text-brand-navy/[0.04] select-none">03</span>
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
              <div className="relative bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl p-8 shadow-soft hover:shadow-glow-teal transition-all duration-300 card-hover h-full">
                <span className="absolute top-4 right-5 text-6xl font-sans font-light text-brand-navy/[0.04] select-none">04</span>
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
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-brand-navy/70 leading-relaxed mb-3">
                CollWi is a community for women seeking support, connection, and personal growth.
              </p>
              <p className="text-xl md:text-2xl font-medium text-brand-navy/90">
                A platform built by women, for women.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-purple overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 left-[10%] w-64 h-64 bg-brand-coral/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[5%] w-72 h-72 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] right-[40%] w-48 h-48 bg-brand-teal/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[18%] right-[15%] w-2 h-2 rounded-full bg-brand-purple/40 animate-pulse-soft" />
        <div className="absolute bottom-[22%] left-[20%] w-3 h-3 rounded-full bg-brand-coral/30 animate-pulse-soft" />

        {/* Large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-purple/[0.03] tracking-widest uppercase">VALUES</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
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
                accent: 'border-l-brand-teal',
                glow: 'hover:shadow-glow-teal',
              },
              {
                title: 'Great Coaches Deserve Great Income',
                desc: "If you're certified, skilled, and committed to client transformation, you should earn a comfortable living doing it. Not by hustling harder. By building smarter.",
                accent: 'border-l-brand-coral',
                glow: 'hover:shadow-glow-coral',
              },
              {
                title: 'Group Coaching is the Future',
                desc: "One-on-one coaching has a ceiling. Group coaching scales impact without burning out coaches. It creates community. It creates transformation. It's the better model.",
                accent: 'border-l-brand-purple',
                glow: 'hover:shadow-glow-purple',
              },
              {
                title: 'Coaches Need Support',
                desc: "The best coaches in the world struggle with business. You shouldn't have to. We're here to remove the barriers so you can do what you were meant to do.",
                accent: 'border-l-brand-teal',
                glow: 'hover:shadow-glow-teal',
              },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`relative bg-white/70 backdrop-blur-sm border border-white/30 border-l-4 ${value.accent} rounded-2xl pl-6 pr-8 py-6 shadow-soft ${value.glow} transition-all duration-300 card-hover`}>
                  <span className="absolute top-3 right-5 text-5xl font-sans font-light text-brand-navy/[0.04] select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">{value.title}</h3>
                  <p className="text-lg text-brand-navy/60 leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who We Are ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-warm overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[5%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] left-[40%] w-56 h-56 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[22%] left-[18%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[28%] right-[15%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />
        <div className="absolute top-[55%] left-[10%] w-2 h-2 rounded-full bg-brand-coral/35 animate-pulse-soft" />

        <div className="relative z-10 max-w-4xl mx-auto">
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
            <div className="bg-white/70 backdrop-blur-sm border border-white/30 rounded-3xl p-10 md:p-14 shadow-soft">
              <div className="space-y-6 text-brand-navy/60 leading-relaxed max-w-3xl mx-auto text-center">
                <p className="text-lg md:text-xl">
                  We&apos;re <span className="text-brand-navy font-medium">Barbara</span> and <span className="text-brand-navy font-medium">Adriana</span>.
                  Barbara is a coach who&apos;s lived the struggle&mdash;building a practice, hitting the ceiling, feeling the frustration of doing incredible work but struggling to grow.
                </p>
                <p className="text-lg md:text-xl">
                  Adriana experienced it from the other side&mdash;as a woman who knew she was capable of more but felt stuck navigating it alone. She watched so many incredible women around her feeling the same way: ambitious, capable, but lacking the right support and community to help them move forward.
                </p>
                <p className="text-lg md:text-xl">
                  Together, we realized: women don&apos;t need another productivity hack. They need real connection, honest conversations, and guidance from people who actually understand. That&apos;s why we built CollWi.
                </p>
              </div>
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
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 left-[8%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-72 h-72 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] right-[30%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[30%] left-[15%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />

        <div className="relative z-10 max-w-4xl mx-auto">
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
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 md:p-14 shadow-soft-xl border border-white/30 hover:shadow-glow-teal transition-all duration-500">
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
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-[40%] left-[40%] w-56 h-56 bg-white rounded-full blur-3xl animate-float-slow" />
        </div>
        {/* Pulsing dots */}
        <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-white/20 animate-pulse-soft" />
        <div className="absolute bottom-[25%] left-[20%] w-3 h-3 rounded-full bg-white/15 animate-pulse-soft" />
        <div className="absolute top-[60%] right-[35%] w-2 h-2 rounded-full bg-brand-gold/30 animate-pulse-soft" />

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
              href="https://collwi.com/register?type=coach"
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
