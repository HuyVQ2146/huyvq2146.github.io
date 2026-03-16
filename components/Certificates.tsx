import React, { useState, useEffect } from 'react';
import { Award, Calendar, BadgeCheck, ChevronDown, ChevronUp, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { Certificate } from '../types';
import { createPortal } from 'react-dom';

export const Certificates: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Google Data Analytics Professional Certificate (On-going)',
      issuer: 'Coursera, Google',
      date: 'Non 2026',
      imageUrl: 'https://picsum.photos/seed/gcp/800/600',
      credentialUrl: 'https://www.credential.net/example-gcp',
    },
    {
      id: '2',
      title: 'HarvardX PH125.8x: Data Science: Building Machine Learning Models',
      issuer: 'edX, HarvardX',
      date: 'Dec 2025',
      imageUrl: '/HarvardX PH125.8x Certificate _ edX.pdf',
      credentialUrl: 'https://courses.edx.org/certificates/6752fcea7619482886e438ed71214140',
    },
    {
      id: '3',
      title: 'Machine Learning Specialization',
      issuer: 'Coursera, Stanford Online, Deeplearning.AI',
      date: 'Jul 2025',
      imageUrl: '/Coursera Q9EO9FBGL1O4.pdf',
      credentialUrl: 'https://coursera.org/share/f5e2a2918c2b47f89d16c39327c11189',
    },
    {
      id: '4',
      title: 'Understanding Research Methods',
      issuer: 'Coursera, University of London',
      date: 'Jun 2025',
      imageUrl: '/Coursera TTQ7UXRLYI9P.pdf',
      credentialUrl: 'https://coursera.org/share/116d42d1177c914b97e3f471a5845b13',
    },
    {
      id: '5',
      title: 'AI For Everyone',
      issuer: 'Coursera, Deeplearning.AI',
      date: 'Apr 2025',
      imageUrl: '/Coursera 1S50G91B60D1.pdf',
      credentialUrl: 'https://coursera.org/share/3308ce383c000a58bd98c4962613202b',
    },
    {
      id: '6',
      title: 'Google AI Essentials',
      issuer: 'Coursera, Google',
      date: 'Apr 2025',
      imageUrl: '/Coursera 49UGT6KIHM6M.pdf',
      credentialUrl: 'https://coursera.org/share/70234989f97b666e3f8c9f0388959abe',
    }
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  const isPdf = (url?: string) => url?.toLowerCase().endsWith('.pdf');

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-primary font-mono text-xl">03.</span> Certificates
        </h2>
        <div className="h-px bg-slate-300 flex-1 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleCertificates.map((cert) => (
          <div key={cert.id} className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary/50 transition duration-300 group overflow-hidden flex flex-col">
            {/* Image/PDF Preview Area */}
            {cert.imageUrl ? (
              <div className="relative aspect-video overflow-hidden bg-[#282828]">
                {isPdf(cert.imageUrl) ? (
                  <div className="w-full h-full relative overflow-hidden">
                    <iframe 
                      src={`${cert.imageUrl}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                      className="absolute -top-4 -left-4 w-[calc(100%+32px)] h-[calc(100%+32px)] border-none pointer-events-none"
                      title={cert.title}
                      scrolling="no"
                    />
                    <div className="absolute inset-0 bg-transparent" /> {/* Overlay to prevent interaction with iframe in preview */}
                  </div>
                ) : (
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title}
                    className="w-full h-full object-contain transition duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button 
                    onClick={() => setSelectedImage(cert.imageUrl || null)}
                    className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition"
                    title={isPdf(cert.imageUrl) ? "View PDF" : "View Image"}
                  >
                    <ImageIcon size={20} />
                  </button>
                  {cert.credentialUrl && (
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition"
                      title="View Credential"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="aspect-video bg-slate-50 flex items-center justify-center text-slate-300">
                <BadgeCheck size={48} />
              </div>
            )}

            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Award size={20} />
                </div>
                <div className="text-slate-500 font-mono text-xs flex items-center gap-1">
                  <Calendar size={12} />
                  {cert.date}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors line-clamp-2">{cert.title}</h3>
              <p className="text-sm text-secondary font-medium mb-4">{cert.issuer}</p>
              
              <div className="mt-auto flex gap-3">
                {cert.credentialUrl && (
                  <a 
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary flex items-center gap-1 hover:underline"
                  >
                    Verify Credential <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {certificates.length > 4 && (
        <div className="text-center mt-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 py-3 px-8 rounded border-2 border-primary text-primary font-mono text-sm hover:bg-primary hover:text-white transition font-semibold"
          >
            {showAll ? 'Show Less' : 'Show More'}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      )}

      {/* Lightbox for Image/PDF */}
      {selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-primary transition z-[110]"
            onClick={() => setSelectedImage(null)}
          >
            <ChevronDown size={32} className="rotate-180" />
          </button>
          
          <div className="w-full h-full max-w-5xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {isPdf(selectedImage) ? (
              <iframe 
                src={`${selectedImage}#view=Fit`}
                className="w-full h-full border-none"
                title="Certificate PDF"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black/20">
                <img 
                  src={selectedImage} 
                  alt="Certificate Preview" 
                  className="max-w-full max-h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};
