import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import { BUSINESS_INFO } from './data';
import { Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800/80 py-8 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} <span className="text-slate-200 font-semibold">{BUSINESS_INFO.name}</span>. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-slate-500">
            <p className="flex items-center gap-1.5">
              <span>Built with precision in Doha</span>
              <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            </p>
            <span className="hidden sm:inline text-slate-700">•</span>
           
          </div>
        </div>
      </footer>
    </div>
  );
}