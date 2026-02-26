'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TrendingUp, Users, Calendar, Sparkles, CheckCircle, Trophy, Handshake, TrendingUpIcon, Eye, EyeOff } from 'lucide-react';

export default function CoachRegister() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('Coach registration:', { email, password });
    setTimeout(() => setIsLoading(false), 1500);
  };

  const handleGoogleAuth = async () => {
    setIsLoadingGoogle(true);
    setTimeout(() => setIsLoadingGoogle(false), 1500);
  };

  const benefits = [
    {
      icon: <TrendingUp className="text-purple-600" size={40} />,
      title: '82% Revenue Share',
      description: 'Keep what you earn. We only take 18% to maintain the platform.'
    },
    {
      icon: <Users className="text-teal-500" size={40} />,
      title: 'Built-In Client Pipeline',
      description: 'Stop chasing leads. Clients come to you through our marketplace.'
    },
    {
      icon: <Calendar className="text-orange-500" size={40} />,
      title: 'Total Autonomy',
      description: 'Set your own rates, schedule, and coaching approach. Your practice, your rules.'
    },
    {
      icon: <Sparkles className="text-purple-600" size={40} />,
      title: 'Simple Setup',
      description: 'No applications or vetting. Create profile, set availability, start coaching.'
    }
  ];

  const stats = [
    { icon: <Trophy className="text-orange-500" />, label: 'Top coaches earn $10k+/mo' },
    { icon: <Handshake className="text-teal-500" />, label: 'Average 15 clients/month' },
    { icon: <TrendingUpIcon className="text-purple-600" />, label: '82% revenue share' }
  ];

  return (
    <div 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #EDE7F8 0%, #FFFFFF 50%, #FFE4D2 100%)'
      }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crete+Round&family=Nunito:wght@400;600;700&display=swap');
        
        .font-crete { font-family: 'Crete Round', serif; }
        .font-nunito { font-family: 'Nunito', sans-serif; }
      `}</style>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16">
        <div className="text-center mb-12 sm:mb-16">
          <Link href="/" className="inline-block mb-8">
            <div 
              className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #6DCFD0 50%, #F87823 100%)'
              }}
            >
              <span className="text-white text-2xl font-bold">C</span>
            </div>
          </Link>
          <h1 className="font-crete text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            You're an Exceptional Coach.
            <br />
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(to right, #97C9CA, #AE6EDE, #FA9F56)'
              }}
            >
              Why Struggle to Find Clients?
            </span>
          </h1>
          <p className="font-nunito text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-4">
            You've tried everything—free discovery sessions, networking, posting on social media. 
            Your website is beautiful. Yet you still struggle to get clients consistently.
          </p>
          <p className="font-nunito text-lg sm:text-xl font-semibold text-gray-800">
            You love coaching. You hate the business side. We've solved that for you.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.08)',
                border: '1px solid rgba(124, 58, 237, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 58, 237, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(124, 58, 237, 0.08)';
              }}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="font-nunito text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="font-nunito text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <div 
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: 'linear-gradient(to right, rgba(124,58,237,0.08), rgba(109,207,208,0.08), rgba(248,120,35,0.08))',
              border: '1px solid rgba(124, 58, 237, 0.1)'
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="flex-shrink-0">{stat.icon}</div>
                  <span className="font-nunito text-sm font-semibold text-gray-700">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <div 
          className="max-w-lg mx-auto bg-white rounded-3xl p-6 sm:p-10 transition-all duration-300"
          style={{
            boxShadow: '0 8px 32px rgba(124, 58, 237, 0.08)',
            border: '1px solid rgba(124, 58, 237, 0.08)'
          }}
        >
          <div className="text-center mb-8">
            <h2 className="font-crete text-2xl sm:text-3xl font-bold mb-3">
              Join CollWi as a Coach
            </h2>
            <p className="font-nunito text-gray-600">
              Start building your coaching practice today. No approval needed.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="font-nunito block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="font-nunito w-full px-4 py-3.5 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-gray-900 bg-gray-50 hover:bg-white"
                placeholder="you@example.com"
                disabled={isLoading || isLoadingGoogle}
              />
            </div>

            <div>
              <label htmlFor="password" className="font-nunito block text-sm font-semibold text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="font-nunito w-full px-4 py-3.5 pr-12 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-500 transition-all duration-300 text-gray-900 bg-gray-50 hover:bg-white"
                  placeholder="••••••••"
                  disabled={isLoading || isLoadingGoogle}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || isLoadingGoogle}
              className="font-nunito w-full text-white font-bold py-4 px-8 rounded-full hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
              style={{
                background: 'linear-gradient(135deg, #7C3AED 0%, #6DCFD0 100%)',
                boxShadow: '0 4px 16px rgba(124, 58, 237, 0.25)'
              }}
              onMouseEnter={(e) => {
                if (!isLoading && !isLoadingGoogle) {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(124, 58, 237, 0.35)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(124, 58, 237, 0.25)';
              }}
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Creating your account...</span>
                </div>
              ) : (
                'Create Coach Account'
              )}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="font-nunito px-4 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleGoogleAuth}
              disabled={isLoading || isLoadingGoogle}
              className="font-nunito w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold py-4 px-8 rounded-full hover:border-teal-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoadingGoogle ? (
                <>
                  <div className="w-5 h-5 border-2 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
                  <span>Connecting to Google...</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span>Sign up with Google</span>
                </>
              )}
            </button>

            <p className="font-nunito text-xs text-gray-500 text-center mt-6 leading-relaxed">
              By creating an account you agree to CollWi's{' '}
              <Link href="https://collwi.com/terms" target="_blank" className="font-semibold hover:underline" style={{ color: '#7C3AED' }}>
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="https://collwi.com/privacy" target="_blank" className="font-semibold hover:underline" style={{ color: '#7C3AED' }}>
                Privacy Policy
              </Link>
            </p>

            <div className="font-nunito text-center mt-6">
              Already have an account?{' '}
              <Link href="https://collwi.com/login" className="font-bold hover:underline" style={{ color: '#7C3AED' }}>
                Log in
              </Link>
            </div>
          </form>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 sm:mt-16 text-center px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm sm:text-base text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} style={{ color: '#6DCFD0' }} />
              <span className="font-nunito">Free to join</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} style={{ color: '#6DCFD0' }} />
              <span className="font-nunito">No approval process</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} style={{ color: '#6DCFD0' }} />
              <span className="font-nunito">Start earning immediately</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
