import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Trophy, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed w-full z-50 px-4 py-4">
      <nav className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0D0B1F]/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(124,58,237,0.1)]' 
          : 'bg-[#0D0B1F]/80 backdrop-blur-md'
      }`}>
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              <Trophy className="w-8 h-8 text-purple-500 transition-transform duration-300 group-hover:scale-110" />
              <span className="text-2xl font-bold text-white tracking-tight group-hover:text-gradient-purple">
                RiseAthlete
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {[
                { path: '/about', label: 'About' },
                { path: '/mission', label: 'Our Mission' },
                { path: '/athletes', label: 'Athletes' },
                { path: '/support', label: 'Support' },
                { path: '/contact', label: 'Contact' },
                { path: '/donate', label: 'Donate' },
                { path: '/auth', label: 'Sign In' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link-premium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 animate-scaleIn" />
              ) : (
                <Menu className="w-6 h-6 animate-scaleIn" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden w-full border-t border-purple-500/10 mt-2
                       transition-all duration-300 transform ${
                         isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 pointer-events-none overflow-hidden'
                       }`}
          >
            <div className="flex flex-col space-y-2 py-4">
              {[
                { path: '/about', label: 'About' },
                { path: '/mission', label: 'Our Mission' },
                { path: '/athletes', label: 'Athletes' },
                { path: '/support', label: 'Support' },
                { path: '/contact', label: 'Contact' },
                { path: '/donate', label: 'Donate' },
                { path: '/auth', label: 'Sign In' }
              ].map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link-premium px-4 py-3 rounded-lg transition-all duration-300
                             ${isActive(item.path) ? 'text-purple-400 bg-purple-500/10' : 'text-gray-300'}
                             animate-fadeInUp`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;