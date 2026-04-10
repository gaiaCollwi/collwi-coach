'use client'

import { ArrowRight, Calendar, User } from 'lucide-react'
import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem } from '../components/AnimatedSection'

const blogPosts = [
  {
    slug: 'how-to-get-first-5-coaching-clients',
    title: 'How to Get Your First 5 Coaching Clients Without Paid Ads',
    excerpt: 'Most new coaches wait for clients to appear. They won\'t. Here\'s the relationship-first strategy that actually fills your first program — no ad spend required.',
    date: '2026-04-10',
    author: 'CollWi Team',
    readTime: '8 min read',
    category: 'Business',
  },
  {
    slug: 'benefits-of-group-coaching-for-coaches',
    title: 'Why Group Coaching Transforms Your Business (And Your Impact)',
    excerpt: 'Stop struggling with 1:1 scheduling and inconsistent income. Discover why the most successful coaches are moving to group models and how it changes everything.',
    date: '2026-02-18',
    author: 'CollWi Team',
    readTime: '8 min read',
    category: 'Business',
  },
  {
    slug: 'how-to-run-group-coaching-program',
    title: 'How to Run a Group Coaching Program That Clients Love (Step-by-Step)',
    excerpt: 'The mechanics of effective group coaching. Learn how to structure sessions, facilitate group dynamics, and create transformations at scale.',
    date: '2026-01-22',
    author: 'CollWi Team',
    readTime: '10 min read',
    category: 'Coaching',
  },
  {
    slug: 'group-coaching-tips-tricks',
    title: 'Group Coaching Tips & Tricks: What the Best Coaches Do Differently',
    excerpt: 'Practical techniques for deeper engagement, better accountability, and faster results. Real tactics from coaches running successful programs.',
    date: '2025-12-09',
    author: 'CollWi Team',
    readTime: '7 min read',
    category: 'Coaching',
  },
  {
    slug: 'best-practices-impactful-coaching',
    title: 'Best Practices for Leading Impactful Coaching Sessions Every Single Time',
    excerpt: 'Consistency is everything. Learn the frameworks, templates, and mindsets that separate good coaches from transformational leaders.',
    date: '2026-01-05',
    author: 'CollWi Team',
    readTime: '9 min read',
    category: 'Leadership',
  },
]

export default function BlogPage() {
  const accentColors = ['border-l-brand-teal', 'border-l-brand-coral', 'border-l-brand-purple', 'border-l-brand-teal']
  const glowColors = ['hover:shadow-glow-teal', 'hover:shadow-glow-coral', 'hover:shadow-glow-purple', 'hover:shadow-glow-teal']

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient-intense" />
        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-brand-purple/8 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-[8%] w-64 h-64 bg-brand-teal/8 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[40%] left-[50%] w-56 h-56 bg-brand-coral/6 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[25%] right-[20%] w-2 h-2 rounded-full bg-brand-teal/40 animate-pulse-soft" />
        <div className="absolute bottom-[30%] left-[15%] w-3 h-3 rounded-full bg-brand-purple/30 animate-pulse-soft" />
        <div className="absolute top-[55%] right-[35%] w-2 h-2 rounded-full bg-brand-coral/40 animate-pulse-soft" />
        <div className="absolute top-[40%] left-[25%] w-1.5 h-1.5 rounded-full bg-brand-gold/50 animate-pulse-soft" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn delay={0.1}>
            <span className="inline-block px-5 py-2 bg-brand-teal/10 text-brand-teal text-xs font-semibold tracking-[0.2em] uppercase rounded-full mb-8">
              Coaching Insights
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-light leading-tight mb-6">
              The CollWi Coach <em className="text-brand-teal italic">Blog</em>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-xl md:text-2xl text-brand-navy/60 max-w-2xl mx-auto">
              Strategies, tactics, and real conversations about building a thriving group coaching business—from coaches who've done it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-16 md:py-24 px-6 mesh-gradient-warm overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-10 left-[5%] w-64 h-64 bg-brand-teal/6 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[8%] w-72 h-72 bg-brand-purple/6 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-[50%] right-[30%] w-48 h-48 bg-brand-coral/5 rounded-full blur-3xl animate-float-slow" />
        {/* Pulsing dots */}
        <div className="absolute top-[15%] right-[18%] w-2 h-2 rounded-full bg-brand-coral/30 animate-pulse-soft" />
        <div className="absolute bottom-[20%] left-[22%] w-3 h-3 rounded-full bg-brand-teal/25 animate-pulse-soft" />

        {/* Large watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[14rem] font-sans font-bold text-brand-teal/[0.02] tracking-widest uppercase">BLOG</span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <StaggerContainer className="space-y-8" staggerDelay={0.1}>
            {blogPosts.map((post, i) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blog/${post.slug}`}>
                  <article className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/30 border-l-4 ${accentColors[i]} ${glowColors[i]} hover:border-brand-teal/30 hover:shadow-soft transition-all duration-300 card-hover`}>
                    <span className="absolute top-4 right-6 text-7xl font-sans font-light text-brand-navy/[0.04] select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-brand-navy/40 mb-4">
                      <span className="px-3 py-1 bg-brand-teal/10 text-brand-teal rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-sans font-light mb-4 group-hover:text-brand-teal transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-lg text-brand-navy/60 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-brand-navy/50">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>

                      <div className="flex items-center gap-2 text-brand-teal font-medium group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight size={18} />
                      </div>
                    </div>
                  </article>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}
