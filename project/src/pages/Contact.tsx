import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            Have questions about sponsorship? Want to learn more about our programs? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-12 animate-fadeInUp animate-delay-1">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-purple-500" />
                    <span className="text-white/80">contact@riseathlete.org</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-purple-500" />
                    <span className="text-white/80">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-purple-500" />
                    <span className="text-white/80">Mumbai, Maharashtra, India</span>
                  </div>
                </div>
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <p className="text-white/80">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-white/80">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-white/80">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;