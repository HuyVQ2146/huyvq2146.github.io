import React, { useState } from 'react';
import { Award, Calendar, BadgeCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Certificate } from '../types';

export const Certificates: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const certificates: Certificate[] = [
    {
      id: '1',
      title: 'Google Data Analytics Professional Certificate (On-going)',
      issuer: 'Google',
      date: 'Non 2026',
    },
    {
      id: '2',
      title: 'Machine Learning Specialization',
      issuer: 'Stanford Online, Deeplearning.AI',
      date: 'Jul 2025',
    },
    {
      id: '3',
      title: 'Understanding Research Methods',
      issuer: 'University of London',
      date: 'Jun 2025',
    },
    {
      id: '4',
      title: 'AI For Everyone',
      issuer: 'Deeplearning.AI',
      date: 'Apr 2025',
    },
    {
      id: '5',
      title: 'Google AI Essentials',
      issuer: 'Google',
      date: 'Apr 2025',
    }
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 4);

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-primary font-mono text-xl">03.</span> Certificates
        </h2>
        <div className="h-px bg-slate-300 flex-1 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleCertificates.map((cert) => (
          <div key={cert.id} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 transition duration-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-surface rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <BadgeCheck size={24} />
              </div>
              <div className="text-slate-500 font-mono text-xs flex items-center gap-1">
                <Calendar size={12} />
                {cert.date}
              </div>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
            <p className="text-sm text-secondary font-medium">{cert.issuer}</p>
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
    </div>
  );
};
