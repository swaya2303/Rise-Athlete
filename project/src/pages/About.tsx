import React from 'react';
import { Users, Award, Target, Medal, Star, Globe } from 'lucide-react';

function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
            alt="Sports stadium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">About Us</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            ChampionRise is dedicated to discovering and nurturing India's hidden sporting talents, 
            providing them with the resources and support they need to excel on the global stage.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Users,
                title: "Inclusive Support",
                description: "We believe talent knows no boundaries. Our program reaches athletes across all socioeconomic backgrounds, ensuring that financial constraints never hinder sporting excellence."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from athlete selection to training support. Our rigorous programs are designed to bring out the best in every athlete."
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description: "Every action we take is aligned with our athletes' goals and dreams of representing India. We provide structured pathways to success with measurable milestones."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card p-8 rounded-2xl animate-scaleIn" style={{ animationDelay: `${index * 200}ms` }}>
                <value.icon className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1526676338763-d50a2c64ef88?auto=format&fit=crop&q=80"
            alt="Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 animate-fadeInUp">Our Story</h2>
              <div className="space-y-6 text-white/80 animate-fadeInUp animate-delay-1">
                <p>
                  Founded in 2023, ChampionRise emerged from a simple observation: India's vast sporting 
                  potential remains largely untapped due to financial constraints and lack of support.
                </p>
                <p>
                  What began as a small initiative to support local athletes has grown into a nationwide 
                  movement, connecting talented sportspersons with sponsors who believe in their potential.
                </p>
                <p>
                  Today, we're proud to have supported over 500 athletes across 15 different sports, 
                  with many of our athletes representing India in international competitions.
                </p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl animate-scaleIn">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-lg text-center">
                    <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-bold">500+</h4>
                    <p className="text-sm text-white/60">Athletes Supported</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg text-center">
                    <Medal className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-bold">150+</h4>
                    <p className="text-sm text-white/60">Medals Won</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="glass-card p-4 rounded-lg text-center">
                    <Globe className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-bold">15+</h4>
                    <p className="text-sm text-white/60">Sports Disciplines</p>
                  </div>
                  <div className="glass-card p-4 rounded-lg text-center">
                    <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                    <h4 className="font-bold">1000+</h4>
                    <p className="text-sm text-white/60">Sponsors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 glass-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Swayam Anand",
                role: "Founder & CEO",
                image: "https://www.google.com/imgres?q=blank%20photo&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fvector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblank-user&docid=xfY1niZaC0vceM&tbnid=Bs0EMv6T2j0nUM&vet=12ahUKEwjhya6At9mLAxUy4jgGHcFSOjcQM3oECDYQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwjhya6At9mLAxUy4jgGHcFSOjcQM3oECDYQAA",
                bio: "First Year student at Guru Teg Bahadur Institue of Technology"
              },
              {
                name: "Shubham Chauhan",
                role: "Head of Athlete Development",
                image: "https://www.google.com/imgres?q=blank%20photo&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fvector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblank-user&docid=xfY1niZaC0vceM&tbnid=Bs0EMv6T2j0nUM&vet=12ahUKEwjhya6At9mLAxUy4jgGHcFSOjcQM3oECDYQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwjhya6At9mLAxUy4jgGHcFSOjcQM3oECDYQAA",
                bio: "Second Year student at Bhartiya Vidyapeeth Institute of Technology"
              },
              {
                name: "Dhruv Sabharwal",
                role: "Director of Operations",
                image: "https://www.google.com/imgres?q=blank%20photo&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fimage-vector%2Fvector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fblank-user&docid=xfY1niZaC0vceM&tbnid=Bs0EMv6T2j0nUM&vet=12ahUKEwjhya6At9mLAxUy4jgGHcFSOjcQM3oECDYQAA..i&w=600&h=600&hcb=2&ved=2ahUKEwjhya6At9mLAxUy4jgGHcFSOjcQM3oECDYQAA",
                bio: "Second year student at Guru Teg Bahadur Institue of Technology 4th Centuanary"
              }
            ].map((member, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center animate-scaleIn" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 rounded-full bg-purple-500/10"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-white/60">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
