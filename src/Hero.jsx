import React from 'react';
import { Phone, MessageCircle, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from './data';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden py-20 lg:py-28 border-b border-slate-800">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Premium Finishing & Maintenance in Qatar</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-100">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Gypsum, Ceilings</span> & Interior Maintenance
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Transforming residential and commercial interiors across Doha with high-precision partitions, two-step false ceilings, custom light profiles, tile work, and decorative corniche installations.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base transition-all shadow-lg shadow-amber-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-lg shadow-emerald-600/25"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Instant Quote</span>
              </a>
            </div>

            {/* Quick Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 text-slate-400 text-sm">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Guaranteed Quality</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BUSINESS_INFO.coverage}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available Now</span>
              </div>
            </div>
          </div>

          {/* Right Featured Card / Hero Image Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              <img
                src="/images/img2.jpg"
                alt="Featured Modern Ceiling Work"
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-semibold border border-amber-500/30">
                  Featured Project
                </span>
                <h3 className="text-xl font-bold text-white mt-2">
                  Modern Tray Ceiling & Ambient Lighting
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Custom cove LED profile & decorative chandelier setup in Doha.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}