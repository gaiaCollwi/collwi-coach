'use client'

import { useState } from 'react'
import {
  ArrowRight, Users, BarChart3, Clock, Shield, MessageCircle,
  Sparkles, CheckCircle, ChevronDown, Zap, TrendingUp,
} from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const faqs = [
  {
    q: 'How much do I earn per session?',
    a: 'You keep 70% of group coaching revenue after payment processing fees. Groups typically range from 8-12 participants at $49-149/month depending on your coaching focus. That means one full group can generate $3,000-12,000+ monthly in recurring revenue.',
  },
  {
    q: 'Do I need to handle marketing and enrollment?',
    a: 'No. CollWi handles everything: marketing, participant recruitment, enrollment, and payment processing. You focus on what you do best—coaching. We promote your groups through our platform and community channels.',
  },
  {
    q: 'What if I already have 1:1 clients?',
    a: 'Many coaches run both. Group coaching complements 1:1 work beautifully. You can offer group programs to different cohorts, expand your reach, and create passive income without trading more hours. Some coaches transition entirely to group work once they see the results.',
  },
  {
    q: 'How much time does this take?',
    a: 'A group coaching program typically requires 1-2 hours per week for the live session plus prep time. You set the schedule that works for you. No more managing endless 1:1 calendars. One group replaces 10-15 individual clients.',
  },
  {
    q: 'What qualifications do I need?',
    a: 'You need an active coaching certification (ICF, BCC, or equivalent) and a proven track record of client transformations. We vet every coach to ensure CollWi members get exceptional guidance.',
  },
  {
    q: 'Can I run multiple groups?',
    a: 'Absolutely. Many coaches start with one group and scale to 3-5 groups with different niches or focuses. Each group is independent, so you can specialize and reach different audiences without overextending yourself.',
  },
  {
    q: 'What support does CollWi provide?',
    a: 'Complete support: platform hosting, marketing, enrollment, payment processing, member management, session recordings, and ongoing coaching resources. You get a dedicated coach support portal with best practices, templates, and training.',
  },
  {
    q: 'How do I get started?',
    a: 'Apply as a coach, tell us about your background and coaching niche. We\'ll review your application and schedule a call to discuss your goals. Once approved, we\'ll help you launch your first group within 2-4 weeks.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 last:border-0">
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
      <section className="relative pt-36 pb-20 px-6 overflow-hidden mesh-gradient">
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-brand-purple/8 rounded-full blur-3xl animate-float" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeIn>
            <span className="inline-block px-5 py-2 bg-brand-purple/10 text-brand-purple text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              How It Works
            </span>
            <h1 className="text-4xl md:text-6xl font-sans font-light leading-tight mb-6">
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
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                A platform built for <em className="text-brand-teal italic">your success</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto leading-relaxed">
                CollWi removes the barriers to building a thriving group coaching business. We handle marketing, enrollment, and payments. You deliver exceptional coaching.
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              {
                icon: <Users size={26} />,
                title: 'Pre-Qualified Members',
                desc: 'We handle recruitment and enrollment. Your groups fill with engaged, ready-to-transform participants.',
                color: 'teal',
              },
              {
                icon: <BarChart3 size={26} />,
                title: 'Recurring Revenue',
                desc: 'Monthly subscriptions create predictable income. One group generates consistent revenue month after month.',
                color: 'purple',
              },
              {
                icon: <Zap size={26} />,
                title: 'Less Admin Work',
                desc: 'No more managing calendars, invoices, or follow-ups. We handle it all through our platform.',
                color: 'coral',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-surface-warm rounded-2xl p-8 card-hover h-full">
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
      <section className="py-24 md:py-32 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                Your path from <em className="text-brand-teal italic">application to impact</em>
              </h2>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {[
              {
                step: 1,
                title: 'Apply as a Coach',
                desc: 'Tell us about your background, certifications, coaching niche, and why you want to build group programs. We review applications within 5 business days.',
                icon: <CheckCircle size={28} />,
              },
              {
                step: 2,
                title: 'Get Approved & Onboarded',
                desc: 'Once approved, we schedule a call to discuss your coaching focus, target audience, and program structure. We provide templates and best practices to help you launch.',
                icon: <Sparkles size={28} />,
              },
              {
                step: 3,
                title: 'Create Your Group Profile',
                desc: 'Set your group name, description, focus area, session schedule, and pricing. We\'ll help you craft messaging that resonates with your ideal participants.',
                icon: <TrendingUp size={28} />,
              },
              {
                step: 4,
                title: 'We Market & Recruit',
                desc: 'Our marketing team promotes your group through CollWi\'s platform, community channels, and targeted outreach. Participants apply and get approved.',
                icon: <Users size={28} />,
              },
              {
                step: 5,
                title: 'Host Your First Session',
                desc: 'Deliver your first live group session. We handle all technology, recordings, and follow-up logistics. You focus on coaching and connection.',
                icon: <MessageCircle size={28} />,
              },
              {
                step: 6,
                title: 'Build Recurring Revenue',
                desc: 'Participants renew monthly. Your group becomes a stable, predictable income stream. Scale by launching additional groups as you grow.',
                icon: <BarChart3 size={28} />,
              },
            ].map((item) => (
              <StaggerItem key={item.step}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center gap-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal">
                      {item.icon}
                    </div>
                    {item.step < 6 && <div className="w-1 h-16 bg-gradient-to-b from-brand-teal to-gray-200" />}
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

      {/* ─── What This Looks Like in Practice ─── */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                What this looks like <em className="text-brand-purple italic">in practice</em>
              </h2>
              <p className="text-lg text-brand-navy/50 max-w-2xl mx-auto">
                Real numbers from coaches running groups on CollWi
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                group: 'Leadership for Female Executives',
                members: 10,
                price: '$99/month',
                monthly: '$990',
                yourShare: '$693',
                note: 'Fully booked within 3 weeks',
              },
              {
                group: 'Career Transition Coaching',
                members: 12,
                price: '$79/month',
                monthly: '$948',
                yourShare: '$663',
                note: 'Waitlist of 8 people',
              },
              {
                group: 'Relationship & Boundaries',
                members: 9,
                price: '$69/month',
                monthly: '$621',
                yourShare: '$435',
                note: 'Expanding to second cohort',
              },
              {
                group: 'Confidence & Self-Worth',
                members: 11,
                price: '$89/month',
                monthly: '$979',
                yourShare: '$685',
                note: 'Highest retention rate',
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="rounded-2xl p-8 border border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                  <h3 className="text-xl font-semibold text-brand-navy mb-4">{item.group}</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-brand-navy/60">Members</span>
                      <span className="font-semibold text-brand-navy">{item.members}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-brand-navy/60">Price per member</span>
                      <span className="font-semibold text-brand-navy">{item.price}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="text-brand-navy/60">Monthly group revenue</span>
                      <span className="font-semibold text-brand-navy">{item.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-brand-teal font-semibold">Your monthly earnings</span>
                      <span className="text-2xl font-bold text-brand-teal">{item.yourShare}</span>
                    </div>
                  </div>
                  <p className="text-sm text-brand-navy/50 italic">{item.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-center mt-12 text-lg text-brand-navy/60">
              That's $2,476 monthly from just 4 groups, with one hour of weekly coaching per group.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Key Benefits ─── */}
      <section className="py-24 md:py-32 px-6 mesh-gradient-intense">
        <div className="max-w-4xl mx-auto">
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
                title: 'Predictable Income',
                desc: 'Monthly subscriptions beat the inconsistency of 1:1 coaching. Know what you\'ll earn and plan accordingly.',
              },
              {
                title: 'Scale Without Burnout',
                desc: 'One group session replaces 10-15 individual clients. Help more people in less time.',
              },
              {
                title: 'Deeper Transformations',
                desc: 'Group dynamics create peer support and accountability that enhance individual results.',
              },
              {
                title: 'Less Marketing Stress',
                desc: 'No more cold outreach, social media hustle, or networking pressure. We bring qualified participants.',
              },
              {
                title: 'Community of Practice',
                desc: 'Connect with other coaches in the CollWi network. Share best practices, templates, and learning.',
              },
              {
                title: 'Full Platform Support',
                desc: 'Video hosting, recordings, member management, payments, and support—all handled for you.',
              },
            ].map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-8 shadow-soft card-hover h-full">
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
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-sans font-light leading-tight mb-6">
                Common <em className="text-brand-purple italic">questions</em>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
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
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-brand-gold rounded-full blur-3xl" />
        </div>

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
              Join coaches earning $2,000-5,000+ monthly with CollWi.
            </p>
            <p className="text-lg text-white/60 mb-12">
              Apply today. Launch within 4 weeks.
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
