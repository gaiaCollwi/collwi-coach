import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-teal-50/20">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            CollWi
          </div>
          <a
            href="#apply"
            className="bg-gradient-to-r from-purple-600 to-teal-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Apply to Coach
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          You're an Exceptional Coach.
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            So Why Can't You Find Paying Clients?
          </span>
        </h1>
        
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          You've tried everything—free discovery sessions, networking, posting on social media. 
          Your website is beautiful. It's brought you zero clients.{' '}
          <span className="font-semibold text-gray-900">You love coaching. You hate the business side.</span>
          <br />
          <span className="text-2xl font-bold text-purple-600 mt-4 block">We've solved that for you.</span>
        </p>

        <a
          href="#apply"
          className="inline-block bg-gradient-to-r from-purple-600 to-teal-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all"
        >
          Join CollWi — Stop Chasing Clients
        </a>
      </section>

      {/* This is for you if... */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            This is for you if you're a certified coach who...
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              'Has delivered countless free sessions and still can\'t find paying clients',
              'Is stuck in the 1:1 trap—trading time for money with no path to scale',
              'Spent thousands on websites and branding that brought zero business',
              'Feels like you\'re failing despite being an excellent coach',
              'Is exhausted from "hopeful" social media posts and networking events',
              'Knows coaching is powerful but can\'t get people to understand its value'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-purple-50/50">
                <div className="text-2xl">✓</div>
                <p className="text-lg text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-gray-700 font-semibold max-w-3xl mx-auto border-l-4 border-purple-600 pl-6 py-4 bg-purple-50/30">
            You're one of the <span className="text-purple-600 font-bold">82% of coaches who struggle</span>—not because your coaching isn't good enough, 
            but because client acquisition is a different skill set. CollWi solves that.
          </p>
        </div>
      </section>

      {/* Why CollWi Is Different */}
      <section className="py-16 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">
            Why CollWi Works When Everything Else Hasn't
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            You've tried free sessions, networking, social media. You've spent money on websites and courses. 
            Nothing worked. Here's why CollWi is different:
          </p>

          <div className="space-y-8">
            {[
              {
                emoji: '🎯',
                title: 'We Bring Clients To You',
                description: 'Stop chasing clients. CollWi matches you with people actively looking for group coaching. No more cold outreach. No more free discovery sessions that go nowhere.'
              },
              {
                emoji: '💰',
                title: 'Scale Without Burning Out',
                description: "You're stuck trading time for money in 1:1 sessions. Group coaching lets you serve 8-12 people at once—multiply your income without multiplying your hours."
              },
              {
                emoji: '🛠️',
                title: 'We Handle What You Hate',
                description: "Marketing. Tech. Logistics. Client acquisition. The stuff that keeps you up at night? We've solved it. You focus on coaching. We handle the rest."
              },
              {
                emoji: '👥',
                title: "You're Not Alone Anymore",
                description: "Join a community of coaches who get it. Who've struggled like you have. Who are building financially viable coaching businesses—finally."
              },
              {
                emoji: '💜',
                title: 'Mission-Driven (Not Another Guru)',
                description: 'No get-rich-quick promises. No $30k "proven systems." Just honest, sustainable group coaching that solves real problems—for you AND your clients.'
              }
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-6 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow border border-purple-100">
                <div className="text-5xl">{benefit.emoji}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-lg text-gray-700">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">How CollWi Works</h2>
          <p className="text-xl text-center text-gray-600 mb-12">Simple. Sustainable. No Marketing Required.</p>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                num: '1',
                title: 'Design Your Group Coaching Program',
                desc: 'We help you package your expertise into a transformative group experience'
              },
              {
                num: '2',
                title: 'We Match You With Participants',
                desc: 'No cold outreach. No free sessions. We bring clients actively seeking group coaching to you.'
              },
              {
                num: '3',
                title: 'Lead Small Groups (8-12 People)',
                desc: "Guide live sessions. Build community. Make the impact you've always wanted."
              },
              {
                num: '4',
                title: 'Earn Sustainably',
                desc: 'Scale your income without scaling your hours. Build the financially viable practice you deserve.'
              },
              {
                num: '5',
                title: 'Grow Alongside Other Coaches',
                desc: "You're part of a community now. No more struggling alone."
              }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Truth About Building a Coaching Business */}
      <section className="py-16 bg-gradient-to-b from-purple-900 to-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">The Truth About Building a Coaching Business</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-6xl font-bold mb-2">82%</div>
              <p className="text-xl">of coaches fail within 2 years</p>
            </div>
            <div className="p-6 rounded-xl bg-white/10 backdrop-blur-sm">
              <div className="text-6xl font-bold mb-2">50%</div>
              <p className="text-xl">Coaching skills are only half of what you need</p>
            </div>
          </div>

          <p className="text-2xl font-semibold mb-6">
            The other 50%? Client acquisition, marketing, sales.
          </p>
          <p className="text-3xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
            CollWi solves the part you're missing.
          </p>

          <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/30">
            <p className="text-2xl font-bold mb-2">You only need 100 clients/year at £1000 each to make £100k.</p>
            <p className="text-xl">CollWi helps you find them.</p>
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Who We're Looking For</h2>
          <p className="text-xl text-center text-gray-700 mb-12 font-semibold">
            We're selective. We only work with qualified, ethical coaches who are committed to transformation—for their clients AND themselves.
          </p>

          <div className="space-y-4">
            {[
              'Certified coaches (ICF, BCC, or equivalent credential)',
              'Experience with group facilitation (or willingness to learn)',
              'Commitment to emotional safety and inclusive practices',
              'Belief in the power of collective wisdom and peer support',
              'Ready to stop chasing clients and start building a real business'
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-purple-50/50 border border-purple-200">
                <div className="text-2xl text-purple-600">✓</div>
                <p className="text-lg text-gray-800">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About CollWi */}
      <section className="py-16 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">About CollWi</h2>
          
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            CollWi solves two problems at once:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8 text-left">
            <div className="p-6 rounded-xl bg-teal-50 border border-teal-200">
              <h3 className="text-2xl font-bold mb-3 text-teal-900">For CollWiers (participants)</h3>
              <p className="text-gray-700">We turn personal growth from a lonely journey into a shared, guided experience.</p>
            </div>
            <div className="p-6 rounded-xl bg-purple-50 border border-purple-200">
              <h3 className="text-2xl font-bold mb-3 text-purple-900">For Coaches</h3>
              <p className="text-gray-700">We solve the client acquisition problem that causes 82% of coaches to fail.</p>
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-8">
            Certified coaches get matched with people actively seeking transformation. Small groups. Real community. Sustainable income.
          </p>

          <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
            Our mission: Make growth social, accessible, and transformative—for everyone.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section id="apply" className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Stop Struggling?</h2>
          
          <p className="text-xl mb-8 leading-relaxed">
            Join CollWi and finally build the financially viable coaching practice you deserve. 
            No more free discovery sessions. No more "hopeful" social media posts. 
            No more wondering what you're doing wrong.
          </p>

          <p className="text-2xl font-semibold mb-8">
            You're an exceptional coach. You just needed the other half of the equation.
            <br />
            <span className="text-3xl font-bold">We've got it.</span>
          </p>

          <a
            href="https://collwi.com/apply-coach"
            className="inline-block bg-white text-purple-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
          >
            Apply to Coach With CollWi
          </a>

          <p className="mt-6 text-sm opacity-90">
            Selective application process. We work with qualified, committed coaches ready to scale their impact.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
            CollWi
          </div>
          <p className="text-gray-400 mb-6">Making growth social, accessible, and transformative.</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <a href="https://collwi.com" className="hover:text-white transition-colors">Main Site</a>
            <span>•</span>
            <a href="https://collwi.com/privacy" className="hover:text-white transition-colors">Privacy</a>
            <span>•</span>
            <a href="https://collwi.com/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">© 2026 CollWi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
