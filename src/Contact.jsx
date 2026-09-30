import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from './data';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* About Us Column */}
          <div id="about" className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Our Company</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
              Reliable Maintenance & Finishing Experts in Doha
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              <strong>{BUSINESS_INFO.name}</strong> delivers high-standard interior modification, partition work, ceiling craftsmanship, and lighting solutions across Qatar. Based in Najma Souq, our team serves villas, apartments, retail stores, and corporate offices with speed and precision.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "On-Time Project Completion",
                "Clean & Dust-Controlled Worksite Handling",
                "High-Grade Gypsum & Metal Frame Materials",
                "Transparent Pricing with No Hidden Fees"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Location Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Head Office Location</h4>
                  <p className="text-sm text-slate-400">{BUSINESS_INFO.location}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-200">Working Hours</h4>
                  <p className="text-sm text-slate-400">{BUSINESS_INFO.hours} (All Days)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact Card Column */}
          <div className="lg:col-span-7 bg-slate-950 border border-amber-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-slate-100">Get a Free Site Inspection & Quote</h3>
            <p className="text-slate-400 text-sm mt-2">
              Reach out directly via Call or WhatsApp to discuss your project requirements or arrange an on-site visit in Qatar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex flex-col p-6 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all shadow-lg shadow-amber-500/20 group"
              >
                <Phone className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold uppercase tracking-wider opacity-80">Direct Call</span>
                <span className="text-xl font-extrabold mt-1">{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col p-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg shadow-emerald-600/20 group"
              >
                <MessageCircle className="w-6 h-6 mb-3 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200">WhatsApp Chat</span>
                <span className="text-xl font-extrabold mt-1">Start Chat</span>
              </a>
            </div>

            <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
              <span className="text-slate-500">Fast Response Guaranteed</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}