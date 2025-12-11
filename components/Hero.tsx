import React from 'react';
import { ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const techSkills = ['Machine Learning','Python', 'C++', 'MySQL', 'Excel', 'Word', 'Powerpoint'];

  return (
    <div className="flex flex-col justify-center min-h-[60vh]">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-primary font-mono text-xl">01.</span> About me
        </h2>
        <div className="h-px bg-slate-300 flex-1 max-w-xs"></div>
      </div>

      <div className="space-y-2 mb-8">
        <p className="text-primary font-mono text-lg ml-1">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-tight">
          Vu Quang Huy.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight">
          I give insights from data.
        </h2>
      </div>
      
      <p className="max-w-3xl text-slate-600 text-lg leading-relaxed mb-10">
        I'm an aspiring data scientist with a strong foundation in Python, machine learning, and statistical thinking. 
        Currently, I'm strengthening my skills through real-world projects, advanced coursework, and consistent problem-solving to prepare for a career in <span className="text-primary font-semibold">AI</span> and <span className="text-primary font-semibold">Data Science</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl">
        {/* Left Column: Education & Languages */}
        <div className="space-y-8">
          {/* Education Subsection */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              Education
            </h3>
            <div className="bg-white/50 py-2 space-y-2 text-slate-700">
              <p className="font-bold text-slate-900 text-lg">Hanoi University of Science and Technology</p>
              <div>
                <p className="font-medium">Bachelor of Computer Science (Troy Programme)</p>
                <p className="text-sm text-slate-500 italic">(2024-2028)</p>
              </div>
              <p className="font-medium"><span className="font-bold text-slate-900">CPA:</span> 3.41</p>
            </div>
          </div>

          {/* Languages Subsection */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              Languages
            </h3>
            <div className="bg-white/50 py-2 space-y-2 text-slate-700">
              <p className="font-medium">Vietnamese</p>
              <p className="font-medium">English (IELTS 5.5)</p>
              <p className="font-medium">Chinese (Starter)</p>
            </div>
          </div>
        </div>

        {/* Right Column: Tech Skills */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            Tech Skills
          </h3>
          <div className="flex flex-wrap gap-3">
            {techSkills.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-2 border border-slate-300 rounded text-sm font-medium text-slate-700 bg-white hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-200 cursor-default shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-20 right-10 -z-10 opacity-40 hidden lg:block">
        <div className="w-64 h-64 border-4 border-primary/20 rounded-full blur-3xl animate-pulse"></div>
      </div>
    </div>
  );
};
