import React, { useState } from 'react';
import { Image as ImageIcon, ExternalLink, X } from 'lucide-react';
import { GALLERY_IMAGES, BUSINESS_INFO } from './data';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Our Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Recent On-Site Projects in Qatar
          </h2>
          <p className="mt-4 text-slate-400 text-base">
            Explore our real site photos showing structural metal stud framing, high-ceiling gypsum boards, recessed lighting preparation, and high-end finished ceilings.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedImg(item)}
              className="group relative h-72 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-lg hover:border-amber-500/50 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                    Project 0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-100 leading-snug mt-1">
                    {item.title}
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6 bg-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100">{selectedImg.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{selectedImg.alt}</p>
              </div>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi,%20I'm%20inquiring%20about%20a%20project%20similar%20to%20${encodeURIComponent(selectedImg.title)}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shrink-0"
              >
                Inquire About This Work
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}