import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'certificates', 'interests', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-slate-200 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">PORTFOLIO</h1>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-slate-900 p-1 hover:bg-slate-100 rounded-md transition"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <Sidebar 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1 md:ml-72 p-6 md:p-12 lg:p-20 overflow-x-hidden pt-20 md:pt-12">
        <div className="max-w-4xl mx-auto space-y-24 md:space-y-32">
          
          <section id="about" className="scroll-mt-24">
            <Hero />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>

          <section id="certificates" className="scroll-mt-24">
            <Certificates />
          </section>

          <section id="interests" className="scroll-mt-24">
            <Interests />
          </section>

          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>

          {/* Footer */}
          <footer className="text-center text-sm text-secondary pt-12 pb-6 border-t border-slate-200">
            <p>&copy; {new Date().getFullYear()} Vu Quang Huy. All rights reserved.</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default App;