import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Interest } from '../types';

export const Interests: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const interests: Interest[] = [
    {
      id: '1',
      name: 'Traveling',
      imageUrl: '/traveling.jpg',
      description: 'Exploring the world that we live in.'
    },
    {
      id: '2',
      name: 'Self-learning',
      imageUrl: '/selflearning.jpg',
      description: 'Learning new skills on my own.'
    },
    {
      id: '3',
      name: 'Leetcode',
      imageUrl: '/leetcode.png',
      description: 'Practicing everyday.'
    },
    {
      id: '4',
      name: 'Reading',
      imageUrl: '/reading.jpg',
      description: 'Concentrating on improving myself.'
    },
    {
      id: '5',
      name: 'Photography',
      imageUrl: '/photo.jpg',
      description: 'Capturing moments and sceneries.'
    },
    {
      id: '6',
      name: 'Music',
      imageUrl: '/thenight.jpg',
      description: 'Changing moods with different genres.'
    }
  ];

  const visibleInterests = showAll ? interests : interests.slice(0, 3);

  return (
    <div className="space-y-12">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-primary font-mono text-xl">04.</span> Personal Interest
        </h2>
        <div className="h-px bg-slate-300 flex-1 max-w-xs"></div>
      </div>

      <p className="text-slate-600 mb-8 max-w-2xl text-lg">
        When I'm not coding, I like to engage in activities that fuel my creativity and keep me balanced.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleInterests.map((interest) => (
          <div 
            key={interest.id} 
            className="group relative h-64 overflow-hidden rounded-xl shadow-md cursor-pointer"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={interest.imageUrl} 
                alt={interest.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Gradient Overlay - Darker at top and bottom for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              <h3 className="text-2xl font-bold self-start transform transition-transform duration-300 group-hover:scale-110 origin-top-left">
                {interest.name}
              </h3>
              <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                {interest.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {interests.length > 3 && (
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
