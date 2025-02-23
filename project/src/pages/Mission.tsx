import React from 'react';
import { Target, Heart, Globe, ArrowRight, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function Mission() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
            alt="Mission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">Our Mission</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            To transform India's sporting landscape by identifying, supporting, and nurturing underprivileged athletes 
            who have the potential to excel on the international stage.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Vision</h2>
              <div className="space-y-6 text-white/80">
                <p className="text-lg">
                  We envision an India where every talented athlete, regardless of their background, 
                  has the opportunity to pursue their sporting dreams and compete at the highest level.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="glass-card p-6 rounded-xl text-center">
                    <Star className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                    <h4 className="font-bold text-2xl mb-2">2025</h4>
                    <p className="text-white/60">Vision Target</p>
                  </div>
                  <div className="glass-card p-6 rounded-xl text-center">
                    <Award className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                    <h4 className="font-bold text-2xl mb-2">1000+</h4>
                    <p className="text-white/60">Athletes by 2025</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526676338763-d50a2c64ef88?auto=format&fit=crop&q=80"
                alt="Vision"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80"
            alt="Values"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Target,
                title: "Excellence",
                description: "We pursue excellence in every aspect of our work, from athlete selection to training programs."
              },
              {
                icon: Heart,
                title: "Empathy",
                description: "Understanding and supporting our athletes' unique challenges and aspirations."
              },
              {
                icon: Users,
                title: "Inclusivity",
                description: "Creating opportunities for talented athletes regardless of their background."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl text-center" style={{ animationDelay: `${index * 200}ms` }}>
                <value.icon className="w-12 h-12 text-purple-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-32 glass-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Impact Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Athlete Development",
                goals: [
                  "Support 1000+ athletes by 2025",
                  "Establish training centers in 20 states",
                  "Create partnerships with 50+ sports academies",
                  "Develop comprehensive nutrition programs"
                ]
              },
              {
                title: "Competition Success",
                goals: [
                  "100+ international medals",
                  "Representation in major global events",
                  "National records in multiple disciplines",
                  "Regular performance assessments"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.goals.map((goal, gIndex) => (
                    <li key={gIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-white/80">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
            alt="Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 animate-fadeInUp">Join Our Mission</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fadeInUp animate-delay-1">
            Together, we can build a stronger sporting future for India. Support an athlete today and be part of their journey to success.
          </p>
          <Link 
            to="/support" 
            className="inline-flex items-center gap-2 bg-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 transition-colors animate-fadeInUp animate-delay-2"
          >
            Become a Sponsor <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Mission;