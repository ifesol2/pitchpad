'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 text-gray-800 flex flex-col">
  <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-30">
    <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#hero" className="text-3xl font-extrabold text-indigo-600 tracking-tight hover:text-indigo-700 transition-colors duration-300">
        PitchPad
      </a>
      <div className="hidden md:flex space-x-8 font-medium text-indigo-600">
        <a href="#features" className="hover:text-indigo-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Features</a>
        <a href="#testimonials" className="hover:text-indigo-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Testimonials</a>
        <a href="#beta" className="hover:text-indigo-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Beta</a>
        <a href="#contact" className="hover:text-indigo-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded">Contact</a>
      </div>
      <a href="#beta" className="inline-block md:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-300">
        Join Beta
      </a>
    </nav>
  </header>

  <main className="flex-grow">
    <section id="hero" className="relative bg-gradient-to-r from-indigo-600 to-indigo-400 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center md:items-start md:justify-between">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-lg animate-fadeInUp" tabIndex={-1}>
            Create Investor-Ready Pitch Decks in Minutes
          </h1>
          <p className="text-lg sm:text-xl max-w-lg drop-shadow-md animate-fadeInUp delay-150">
            PitchPad helps startup founders build beautiful, compelling pitch decks using AI. Just answer a few questions, and get a professionally designed presentation tailored to your business and audience.
          </p>
          <a href="#beta" className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-300 animate-fadeInUp delay-300" aria-label="Join PitchPad beta">
            Join the Beta
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-end animate-fadeInRight">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80"
            alt="Startup team collaborating on pitch deck"
            className="rounded-3xl shadow-2xl max-w-full max-h-96 object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-indigo-100 text-sm font-medium tracking-wide animate-pulse select-none">
        Launching soon — pitch with confidence
      </div>
    </section>

    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-12 text-center tracking-tight">
        Why PitchPad?
      </h2>
      <ul className="grid gap-12 md:grid-cols-3 text-center" role="list">
        <li className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-[1.03] transform transition duration-300 focus-within:ring-4 focus-within:ring-indigo-300" tabIndex={0}>
          <span className="text-4xl mb-4" aria-hidden="true">🎯</span>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Designed for Early-Stage Fundraising</h3>
          <p className="text-gray-600 max-w-xs">Tailored pitch decks focused specifically on what early investors want to see.</p>
        </li>
        <li className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-[1.03] transform transition duration-300 focus-within:ring-4 focus-within:ring-indigo-300" tabIndex={0}>
          <span className="text-4xl mb-4" aria-hidden="true">🧠</span>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Smart Slide Suggestions</h3>
          <p className="text-gray-600 max-w-xs">AI-powered content tailored to your startup type to highlight your unique strengths.</p>
        </li>
        <li className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-[1.03] transform transition duration-300 focus-within:ring-4 focus-within:ring-indigo-300" tabIndex={0}>
          <span className="text-4xl mb-4" aria-hidden="true">🎨</span>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">Customizable Templates</h3>
          <p className="text-gray-600 max-w-xs">Professional designs you can easily customize — no design skills required.</p>
        </li>
      </ul>
    </section>

    <section id="testimonials" className="bg-indigo-50 py-20 px-6">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-12 text-center tracking-tight">What Founders Say</h2>
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
        <blockquote className="bg-white rounded-xl shadow-lg p-8 border border-indigo-200 hover:shadow-xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-indigo-300" tabIndex={0}>
          <p className="text-gray-700 italic mb-4">
            “PitchPad made building our pitch deck effortless. The AI suggestions were spot on and saved us weeks of work.”
          </p>
          <footer className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=64&q=80"
              alt="Photo of Amanda Lee"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-indigo-700">Amanda Lee</p>
              <p className="text-sm text-gray-500">Founder, TechNova</p>
            </div>
          </footer>
        </blockquote>
        <blockquote className="bg-white rounded-xl shadow-lg p-8 border border-indigo-200 hover:shadow-xl transition-shadow duration-300 focus-within:ring-4 focus-within:ring-indigo-300" tabIndex={0}>
          <p className="text-gray-700 italic mb-4">
            “The customizable templates are beautiful and easy to use. PitchPad helped us pitch confidently and close our seed round.”
          </p>
          <footer className="flex items-center space-x-4">
            <img
              className="w-12 h-12 rounded-full object-cover shadow-md"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=64&q=80"
              alt="Photo of Marcus Chen"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-indigo-700">Marcus Chen</p>
              <p className="text-sm text-gray-500">CEO, GreenLeaf</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </section>

    <section id="beta" className="max-w-3xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 tracking-tight">Launching Soon — Join Our Beta</h2>
      <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
        Be the first to experience PitchPad and pitch with confidence. Sign up now to secure your spot in our exclusive beta program.
      </p>
      <BetaSignupForm />
    </section>
  </main>

  <footer id="contact" className="bg-indigo-900 text-indigo-200 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
      <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} PitchPad. All rights reserved.</p>
      <nav className="space-x-6 text-sm md:text-base">
        <a href="mailto:support@pitchpad.com" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded transition-colors duration-300">
          support@pitchpad.com
        </a>
        <a href="https://twitter.com/pitchpad" target="_blank" rel="noopener noreferrer" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded transition-colors duration-300" aria-label="PitchPad Twitter">
          Twitter
        </a>
        <a href="https://linkedin.com/company/pitchpad" target="_blank" rel="noopener noreferrer" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded transition-colors duration-300" aria-label="PitchPad LinkedIn">
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>

  <style jsx>{\`
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    .animate-fadeInUp.delay-150 {
      animation-delay: 0.15s;
    }
    .animate-fadeInUp.delay-300 {
      animation-delay: 0.3s;
    }
    .animate-fadeInRight {
      animation: fadeInRight 0.8s ease forwards;
      opacity: 0;
      transform: translateX(20px);
    }
    .animate-pulse {
      animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeInRight {
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.6;
      }
    }
  \`}</style>
</div>

function BetaSignupForm() {
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    // Simulate API call
    try {
      await new Promise((res) => setTimeout(res, 1500));
      // Simple email validation
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+\$/)) {
        throw new Error('Please enter a valid email address.');
      }
      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4" aria-label="Beta sign up form">
      <label htmlFor="email" className="sr-only">Email address</label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === 'loading' || status === 'success'}
        className="flex-grow px-4 py-3 rounded-lg border border-indigo-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-400 text-indigo-900 placeholder-indigo-400 transition disabled:opacity-50"
        aria-invalid={status === 'error'}
        aria-describedby={status === 'error' ? 'email-error' : undefined}
      />
      <button
        type="submit"
        disabled={status === 'loading' || status === 'success'}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-400 font-semibold transition disabled:opacity-50"
        aria-live="polite"
      >
        {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Beta'}
      </button>
      {status === 'error' && (
        <p id="email-error" className="mt-2 text-red-600 text-sm" role="alert">
          {errorMsg}
        </p>
      )}
      {status === 'success' && (
        <p className="mt-2 text-green-600 text-sm" role="alert">
          Thank you for joining the beta!
        </p>
      )}
    </form>
  );
}
  )
}