import React from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from './data';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Comprehensive Maintenance & Decor Services
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            From heavy-duty gypsum wall partitioning to fine interior light profiles and custom tile installations across Qatar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Quality Finish
                </span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Book Service <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}