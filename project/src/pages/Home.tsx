import React from 'react';
import { ArrowRight, Trophy, Target, Users, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[#0D0B1F]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.15) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(124, 58, 237, 0.15) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Purple Blurs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-[128px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/40 rounded-full filter blur-[128px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 animate-fadeInUp max-w-4xl leading-tight">
            Empowering India's Future
            <span className="text-gradient-purple block"> Champions</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 animate-fadeInUp animate-delay-1 leading-relaxed">
            Supporting underprivileged athletes across India to achieve their dreams and represent our nation on the global stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 animate-fadeInUp animate-delay-2">
            <Link to="/athletes" className="button-primary group">
              Meet Our Athletes
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/support" className="button-secondary">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Making a Difference</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Our impact in numbers and achievements across India</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Trophy,
                title: "500+ Athletes Supported",
                description: "We've helped hundreds of talented athletes pursue their dreams across various sports.",
                image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80"
              },
              {
                icon: Target,
                title: "15+ Sports Disciplines",
                description: "From athletics to wrestling, we support talent across multiple sporting disciplines.",
                image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
              },
              {
                icon: Users,
                title: "Nationwide Network",
                description: "Our network spans across India, identifying and nurturing talent from every corner.",
                image: "https://images.unsplash.com/photo-1526676338763-d50a2c64ef88?auto=format&fit=crop&q=80"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="glass-card rounded-2xl overflow-hidden group animate-scaleIn hover:shadow-[0_8px_32px_rgba(124,58,237,0.15)]" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1F]/80 to-transparent"></div>
                </div>
                <div className="p-8">
                  <feature.icon className="w-12 h-12 text-purple-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 glass-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">Meet some of our champions who are making India proud</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                sport: "Athletics",
                achievement: "National Gold Medalist",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80"
              },
              {
                name: "Rajesh Kumar",
                sport: "Wrestling",
                achievement: "Asian Games Silver",
                image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80"
              },
              {
                name: "Anita Patel",
                sport: "Boxing",
                achievement: "Commonwealth Bronze",
                image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80"
              }
            ].map((story, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-2xl animate-scaleIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative h-96">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B1F] via-[#0D0B1F]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                    <p className="text-purple-400 font-semibold mb-2">{story.sport}</p>
                    <div className="flex items-center gap-2 text-white/80">
                      <Award className="w-5 h-5" />
                      <span>{story.achievement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
            alt="Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0D0B1F]/90 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <Star className="w-16 h-16 text-purple-500 mx-auto mb-8 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fadeInUp">Be Part of Their Journey</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-fadeInUp animate-delay-1">
            Your support can help transform the lives of talented athletes and shape the future of Indian sports.
          </p>
          <Link 
            to="/support" 
            className="button-primary inline-flex group animate-fadeInUp animate-delay-2"
          >
            Support an Athlete
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;