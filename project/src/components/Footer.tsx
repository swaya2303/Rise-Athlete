import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Instagram, Twitter, Facebook } from 'lucide-react';

function Footer() {
  return (
    <footer className="py-20 glass-card mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="animate-fadeInUp">
            <Link to="/" className="flex items-center space-x-2 mb-8">
              <Trophy className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold tracking-tight">RiseAthlete</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Empowering underprivileged athletes across India to achieve their dreams.
            </p>
          </div>
          <div className="animate-fadeInUp animate-delay-1">
            <h4 className="text-lg font-bold mb-6 tracking-tight">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><Link to="/about" className="hover:text-purple-500 transition-colors duration-300">About Us</Link></li>
              <li><Link to="/athletes" className="hover:text-purple-500 transition-colors duration-300">Our Athletes</Link></li>
              <li><Link to="/support" className="hover:text-purple-500 transition-colors duration-300">Support</Link></li>
              <li><Link to="/contact" className="hover:text-purple-500 transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div className="animate-fadeInUp animate-delay-2">
            <h4 className="text-lg font-bold mb-6 tracking-tight">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>contact@riseathlete.org</li>
              <li>+91 98765 43210</li>
              <li>Mumbai, Maharashtra</li>
            </ul>
          </div>
          <div className="animate-fadeInUp animate-delay-3">
            <h4 className="text-lg font-bold mb-6 tracking-tight">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-white/60 hover:text-purple-500 transition-colors duration-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-500 transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-500 transition-colors duration-300">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40">
          <p>&copy; 2025 RiseAthlete. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;