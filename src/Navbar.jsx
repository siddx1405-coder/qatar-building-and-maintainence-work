import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from './data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight block leading-tight text-slate-100">
                {BUSINESS_INFO.name}
              </span>
              <span className="text-xs text-amber-400 font-medium">
                {BUSINESS_INFO.location}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#gallery" className="hover:text-amber-400 transition-colors">Our Work</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800"
          >
            Services
          </a>
          <a
            href="#gallery"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800"
          >
            Our Work
          </a>
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-amber-400 hover:bg-slate-800"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-emerald-600 text-white font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}