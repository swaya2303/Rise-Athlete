import React from 'react';
import { Shield, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

function Support() {
  const tiers = [
    {
      icon: Shield,
      name: "Basic",
      price: "₹10,000",
      description: "Perfect for individual supporters",
      features: [
        "Support one athlete",
        "Quarterly progress reports",
        "Recognition on our website",
        "Tax benefits"
      ]
    },
    {
      icon: Star,
      name: "Premium",
      price: "₹50,000",
      description: "Ideal for businesses and organizations",
      features: [
        "Support up to 5 athletes",
        "Monthly progress reports",
        "Featured sponsor listing",
        "Social media mentions",
        "Exclusive event invitations",
        "Tax benefits"
      ]
    },
    {
      icon: Crown,
      name: "Elite",
      price: "₹1,00,000+",
      description: "For maximum impact and engagement",
      features: [
        "Support 10+ athletes",
        "Weekly progress reports",
        "Premium sponsor listing",
        "Dedicated relationship manager",
        "Brand partnership opportunities",
        "VIP event access",
        "Custom benefits package",
        "Tax benefits"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526676338763-d50a2c64ef88?auto=format&fit=crop&q=80"
            alt="Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">Support Our Athletes</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            Choose a sponsorship tier that matches your goals and make a lasting impact on Indian sports.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {tiers.map((tier, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl animate-scaleIn relative overflow-hidden" style={{ animationDelay: `${index * 200}ms` }}>
                <tier.icon className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold mb-4">{tier.price}</p>
                <p className="text-white/60 mb-8">{tier.description}</p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="block text-center bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;