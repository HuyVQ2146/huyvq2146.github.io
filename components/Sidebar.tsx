import React from 'react';
import { User, Briefcase, Award, Heart, Mail, Github, Linkedin } from 'lucide-react';
import { NavItem } from '../types';

interface SidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ mobileMenuOpen, setMobileMenuOpen, activeSection }) => {
  const navItems: (NavItem & { icon: React.ReactNode })[] = [
    { label: 'About Me', href: '#about', icon: <User size={18} /> },
    { label: 'Featured Project', href: '#projects', icon: <Briefcase size={18} /> },
    { label: 'Certificates', href: '#certificates', icon: <Award size={18} /> },
    { label: 'Personal Interest', href: '#interests', icon: <Heart size={18} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      // Update URL without page reload
      window.history.pushState({}, '', href);
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-72 bg-surface border-r border-slate-200
        transform transition-transform duration-300 ease-in-out
        md:translate-x-0 flex flex-col
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Profile Header */}
        <div className="p-8 flex flex-col items-center border-b border-slate-200 bg-white">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 relative group ring-2 ring-slate-100">
            <img 
              src="./img/me.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-wide text-center">Vu Quang Huy</h2>
          <p className="text-primary text-sm font-medium mt-1 uppercase tracking-wider text-center">Data Scientist | ML Engineer</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 bg-surface">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group
                    ${activeSection === item.href.substring(1) 
                      ? 'bg-primary/10 text-primary border-r-2 border-primary' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white shadow-sm hover:shadow'}
                  `}
                >
                  <span className={`${activeSection === item.href.substring(1) ? 'text-primary' : 'text-slate-400 group-hover:text-primary'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links Footer */}
        <div className="p-6 border-t border-slate-200 bg-white">
          <div className="flex justify-center gap-6">
            <a href="mailto:huyvq2146@gmail.com" className="text-slate-400 hover:text-primary transition transform hover:-translate-y-1" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vu-quang-huy-8284b4329/" target="_blank" className="text-slate-400 hover:text-primary transition transform hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/HuyVQ2146" target="_blank" className="text-slate-400 hover:text-primary transition transform hover:-translate-y-1" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
