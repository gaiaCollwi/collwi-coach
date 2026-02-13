import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Scale Your Impact.<br/>Build Your Coaching Practice.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 leading-relaxed">
              CollWi helps certified coaches deliver group coaching programs that change lives—without burning out on 1:1 sessions.
            </p>
            <a 
              href="https://collwi.com/register" 
              className="inline-block bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl"
            >
              Join as a Coach
            </a>
          </div>
        </div>
      </section>

      {/* This is for you section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            This is for you if you're a certified coach who...
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Wants to scale beyond 1:1 sessions without losing the personal touch",
              "Believes in the power of community and peer support",
              "Is ready to help people who are overwhelmed, isolated, and ready for real change",
              "Values connection, emotional safety, and transformation over quick fixes"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Coach on CollWi */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            Why Coach on CollWi?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📈",
                title: "Reach More People",
                description: "Deliver group programs that serve multiple clients at once—without sacrificing quality or impact."
              },
              {
                icon: "👥",
                title: "Built-In Community",
                description: "Your participants get peer support between sessions, creating momentum and accountability."
              },
              {
                icon: "🛠️",
                title: "Platform & Support",
                description: "We handle the tech, marketing, and logistics. You focus on coaching."
              },
              {
                icon: "💜",
                title: "Mission-Driven",
                description: "You're not just building a business—you're helping solve the loneliness crisis affecting millions."
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            How It Works
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: "1",
                title: "Design Your Program",
                description: "Create group coaching experiences aligned with your expertise"
              },
              {
                step: "2",
                title: "Launch Your Cohort",
                description: "We help you attract the right participants"
              },
              {
                step: "3",
                title: "Lead & Facilitate",
                description: "Guide live sessions with small groups (typically 8-12 people)"
              },
              {
                step: "4",
                title: "Build Community",
                description: "Foster peer connections that extend beyond sessions"
              },
              {
                step: "5",
                title: "Grow Your Practice",
                description: "Scale your impact while maintaining quality"
              }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-white text-purple-900 rounded-full flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-purple-100 text-lg">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Who We're Looking For
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              "Certified coaches (ICF, BCC, or equivalent credential)",
              "Experience with group facilitation (or willingness to learn)",
              "Commitment to emotional safety and inclusive practices",
              "Belief in the power of collective wisdom and peer support"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-md">
                <div className="flex-shrink-0 w-3 h-3 bg-purple-600 rounded-full"></div>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Bigger Impact?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-purple-100">
            Join CollWi's community of coaches who are transforming lives through group coaching.
          </p>
          <a 
            href="https://collwi.com/register" 
            className="inline-block bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-purple-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Apply to Coach
          </a>
        </div>
      </section>

      {/* About CollWi */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-10 rounded-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About CollWi</h3>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                CollWi is a social platform that turns personal growth from a lonely journey into a shared, 
                guided experience through live group coaching and community. We're addressing the loneliness 
                crisis by bringing people together with certified coaches in small, supportive groups.
              </p>
              <p className="font-semibold text-purple-900">
                Our mission: make growth social, accessible, and transformative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">© 2026 CollWi. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
