'use client'

import { useState } from 'react'
import {
  ArrowRight, Users, BarChart3, Clock, Shield, MessageCircle,
  Sparkles, CheckCircle, ChevronDown, Zap, TrendingUp,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const faqs = [
  {
    q: 'How do I set my pricing?',
    a: 'You decide your own pricing for your group coaching programs. The platform handles all payment processing through Stripe or PayPal.',
  },
  {
    q: 'Do I need to handle marketing?',
    a: 'Your programs appear in the platform catalog where members can browse and choose what fits their needs. You focus on creating great programs and coaching.',
  },
  {
    q: 'What if I already have 1:1 clients?',
    a: 'Many coaches run both. Group coaching complements 1:1 work beautifully. You can offer group programs to different cohorts and expand your reach.',
  },
  {
    q: 'How much time does this take?',
    a: 'A group coaching program typically requires 1-2 hours per week for the live session plus prep time. You set the schedule that works for you.',
  },
  {
    q: 'What qualifications do I need?',
    a: 'You need an active coaching certification (ICF, BCC, or equivalent). We want qualified, ethical coaches who are committed to transformation.',
  },
  {
    q: 'Can I run multiple groups?',
    a: 'Absolutely. Many coaches start with one group and scale to multiple groups with different niches or focuses. Each group is independent, so you can specialize and reach different audiences.',
  },
  {
    q: 'What support does CollWi provide?',
    a: 'Platform hosting, payment processing, and member management. A group chat is automatically created for each program so participants can stay connected between sessions.',
  },
  {
    q: 'How do I get started?',
    a: 'Register as a coach, add your profile and credentials, connect your payment method (Stripe or PayPal), then create your first group program. Simple and quick.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/20 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-lg font-semibold text-brand-navy/80 group-hover:text-brand-navy pr-4 transition-colors">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-brand-navy/30 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-brand-navy/55 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  )
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden mesh-gradient-intense">
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] left-[40%] w-56 h-56 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[25%] right-[20%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[30%] left-[18%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />
        <div className="absolute top-[55%] right-[35%] w-2 h-2 rounded-full bg-brand-coral/40 animate-pulse-soft" />
        <div className="absolute top-[35%] left-[25%] w-1.5 h-1.5 rounded-full bg-brand-gold/50 animate-pulse-soft" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block px-5 py-2 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              How It Works
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-sans font-light leading-tight mb-6">
              How to Build a Thriving Group
              <br />
              Coaching Business on CollWi
            </h1>
            <p className="text-lg md:text-xl text-brand-navy/50 max-w-xl mx-auto leading-relaxed">
              From application to your first full group. We handle the business. You handle the transformation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── The Platform ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 left-[5%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[8%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[25%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[25%] left-[20%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-light leading-tight mb-6">
                A platform built for <em className="text-brand-teal italic">your success</em>
              </h2>
              <p className="text-lg md:text-xl text-brand-navy/50 max-w-2xl mx-auto leading-relaxed">
                CollWi removes the barriers to building a thriving group coaching business. We handle marketing, enrollment, and payments. You deliver exceptional coaching.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: <Users size={26} />,
                title: 'Members Find You',
                desc: 'Members browse programs on the platform and choose what fits their needs. You focus on creating great programs.',
                color: 'teal',
                glow: 'hover:shadow-glow-teal',
                accent: 'border-t-brand-teal',
              },
              {
                icon: <BarChart3 size={26} />,
                title: 'Build Your Practice',
                desc: 'Create group programs that align with your expertise. Set your own pricing and schedule.',
                color: 'purple',
                glow: 'hover:shadow-glow-purple',
                accent: 'border-t-brand-purple',
              },
              {
                icon: <Zap size={26} />,
                title: 'Less Admin Work',
                desc: 'No more managing calendars, invoices, or follow-ups. We handle it all through our platform.',
                color: 'coral',
                glow: 'hover:shadow-glow-coral',
                accent: 'border-t-brand-coral',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className={`relative bg-white/80 backdrop-blur-sm border border-white/30 border-t-4 ${item.accent} rounded-2xl p-8 ${item.glow} transition-all duration-300 card-hover h-full`}>
                  <span className="absolute top-4 right-5 text-5xl font-sans font-light text-brand-navy/[0.04] select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      item.color === 'teal' ? 'bg-brand-teal/10 text-brand-teal' :
                      item.color === 'purple' ? 'bg-brand-purple/10 text-brand-purple' :
                      'bg-brand-coral/10 text-brand-coral'
                    }`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-brand-navy/55 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── The Journey ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-warm overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-brand-coral/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[5%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] left-[40%] w-56 h-56 bg-brand-purple/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[15%] left-[12%] w-2 h-2 rounded-full bg-brand-coral/40 animate-pulse-soft" />
        <div className="absolute bottom-[20%] right-[18%] w-3 h-3 rounded-full bg-brand-teal/30 animate-pulse-soft" />
        <div className="absolute top-[45%] right-[10%] w-2 h-2 rounded-full bg-brand-purple/35 animate-pulse-soft" />

        {/* Large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-coral/[0.03] tracking-widest uppercase">JOURNEY</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                Your path from <em className="text-brand-teal italic">registration to impact</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {[
              {
                step: 1,
                title: 'Register as a Coach',
                desc: 'Quick registration process. Add your profile, coaching credentials/certifications, and connect your preferred payment method (Stripe or PayPal). Then you\'re ready to create programs.',
                icon: <CheckCircle size={28} />,
                accent: 'border-l-brand-teal',
                glow: 'hover:shadow-glow-teal',
              },
              {
                step: 2,
                title: 'Create Your Program',
                desc: 'Set up your group coaching program: name, description, focus area, session schedule, and pricing. You control everything about your program.',
                icon: <Sparkles size={28} />,
                accent: 'border-l-brand-coral',
                glow: 'hover:shadow-glow-coral',
              },
              {
                step: 3,
                title: 'Members Find You',
                desc: 'Members on the platform browse programs and choose what fits their needs. Your program appears in the platform catalog.',
                icon: <TrendingUp size={28} />,
                accent: 'border-l-brand-purple',
                glow: 'hover:shadow-glow-purple',
              },
              {
                step: 4,
                title: 'Host Your Sessions',
                desc: 'Lead your live group sessions. A group chat is automatically created for participants (and you, if you like) to stay connected and grow together between sessions.',
                icon: <Users size={28} />,
                accent: 'border-l-brand-teal',
                glow: 'hover:shadow-glow-teal',
              },
              {
                step: 5,
                title: 'Build Your Practice',
                desc: 'As you build momentum, you can launch additional groups with different focuses or niches. Scale at your own pace.',
                icon: <MessageCircle size={28} />,
                accent: 'border-l-brand-coral',
                glow: 'hover:shadow-glow-coral',
              },
              {
                step: 6,
                title: 'Earn Sustainably',
                desc: 'You set your pricing. Platform handles all payments. Build the financially viable practice you deserve.',
                icon: <BarChart3 size={28} />,
                accent: 'border-l-brand-purple',
                glow: 'hover:shadow-glow-purple',
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className={`relative flex gap-6 bg-white/70 backdrop-blur-sm border border-white/30 border-l-4 ${item.accent} rounded-2xl p-6 shadow-soft ${item.glow} transition-all duration-300 card-hover`}>
                  <span className="absolute top-3 right-5 text-6xl font-sans font-light text-brand-navy/[0.04] select-none">
                    {String(item.step).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col items-center gap-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                      {item.icon}
                    </div>
                    {item.step < 6 && <div className="w-1 h-16 bg-gradient-to-b from-brand-teal to-brand-coral/20" />}
                  </div>
                  <div className="pb-4">
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">
                      Step {item.step}: {item.title}
                    </h3>
                    <p className="text-brand-navy/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Key Benefits ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-cool overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 left-[8%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[5%] w-72 h-72 bg-brand-purple/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] right-[30%] w-56 h-56 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[18%] right-[22%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[22%] left-[15%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />
        <div className="absolute top-[60%] left-[30%] w-2 h-2 rounded-full bg-brand-coral/35 animate-pulse-soft" />

        {/* Large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-teal/[0.03] tracking-widest uppercase">BENEFITS</span>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                Why coaches love <em className="text-brand-teal italic">building on CollWi</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.08}>
            {[
              {
                title: 'Scale Without Burnout',
                desc: 'One group session reaches multiple people at once. Help more members in less time.',
                accent: 'border-t-brand-teal',
                glow: 'hover:shadow-glow-teal',
              },
              {
                title: 'Deeper Transformations',
                desc: 'Group dynamics create peer support and accountability that enhance individual results.',
                accent: 'border-t-brand-coral',
                glow: 'hover:shadow-glow-coral',
              },
              {
                title: 'Less Marketing Stress',
                desc: 'Your programs appear in the platform catalog where members can find you. No more cold outreach or social media hustle.',
                accent: 'border-t-brand-purple',
                glow: 'hover:shadow-glow-purple',
              },
              {
                title: 'Community of Practice',
                desc: 'Connect with other coaches on the platform. Share experiences and grow together.',
                accent: 'border-t-brand-teal',
                glow: 'hover:shadow-glow-teal',
              },
              {
                title: 'Full Platform Support',
                desc: 'Video hosting, member management, payments, and group chat—all handled for you.',
                accent: 'border-t-brand-coral',
                glow: 'hover:shadow-glow-coral',
              },
              {
                title: 'You Control Your Practice',
                desc: 'Set your own pricing, schedule, and program structure. Build the practice you want.',
                accent: 'border-t-brand-purple',
                glow: 'hover:shadow-glow-purple',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className={`relative bg-white/80 backdrop-blur-sm border border-white/30 border-t-4 ${item.accent} rounded-2xl p-8 shadow-soft ${item.glow} transition-all duration-300 card-hover h-full`}>
                  <span className="absolute top-4 right-5 text-5xl font-sans font-light text-brand-navy/[0.04] select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-teal mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-brand-navy">{item.title}</h3>
                  <p className="text-brand-navy/60 leading-relaxed">{item.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="relative py-24 md:py-32 px-6 mesh-gradient-purple overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[8%] w-72 h-72 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] left-[50%] w-48 h-48 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[22%] left-[15%] w-2 h-2 rounded-full bg-brand-purple/40 animate-pulse-soft" />
        <div className="absolute bottom-[28%] right-[20%] w-3 h-3 rounded-full bg-brand-teal/30 animate-pulse-soft" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                Common <em className="text-brand-purple italic">questions</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-white/80 backdrop-blur-sm border border-white/30 rounded-2xl overflow-hidden shadow-soft hover:shadow-glow-purple transition-all duration-500 px-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── CTA ─── */}
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
              Ready to Build Your
              <br />
              Group Coaching Business?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-white/80 mb-4">
              Join our growing network of certified coaches offering group programs.
            </p>
            <p className="text-lg text-white/60 mb-12">
              Register today. Start creating your programs quickly.
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
