import React from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl mx-auto py-20">
       <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold text-slate-900 flex items-center gap-2">
          <span className="text-primary font-mono text-xl">05.</span> Contact
        </h2>
        <div className="h-px bg-slate-300 flex-1 max-w-xs"></div>
      </div>

      <div className="text-center mb-12">
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
          I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Gmail Box */}
        <a 
          href="mailto:huyvq2146@gmail.com"
          className="group flex flex-col items-center p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 mb-4">
            <Mail size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
          <p className="text-slate-500 text-sm mb-4">huyvq2146@gmail.com</p>
          <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Send Message <ArrowRight size={14} />
          </span>
        </a>

        {/* LinkedIn Box */}
        <a 
          href="https://www.linkedin.com/in/vu-quang-huy-8284b4329/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 mb-4">
            <Linkedin size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">LinkedIn</h3>
          <p className="text-slate-500 text-sm mb-4">Connect professionally</p>
          <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            View Profile <ArrowRight size={14} />
          </span>
        </a>

        {/* GitHub Box */}
        <a 
          href="https://github.com/HuyVQ2146"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center p-8 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
        >
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors duration-300 mb-4">
            <Github size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">GitHub</h3>
          <p className="text-slate-500 text-sm mb-4">Check out my code</p>
          <span className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Follow Me <ArrowRight size={14} />
          </span>
        </a>
      </div>
    </div>
  );
};
