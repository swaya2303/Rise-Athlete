import React from 'react';
import { Medal, ArrowRight, Award, MapPin, Target, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function Athletes() {
  const athletes = [
    {
      name: "Priya Sharma",
      sport: "Athletics",
      location: "Bihar",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80",
      story: "A promising sprinter from rural Bihar, Priya has already broken several state records and aims to represent India at the Asian Games.",
      achievements: ["State Gold Medalist", "National Junior Championship Finalist", "New State Record Holder"],
      fundingGoal: 200000,
      raised: 150000,
      supporters: 45
    },
    {
      name: "Rajesh Kumar",
      sport: "Wrestling",
      location: "Haryana",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80",
      story: "Coming from a farming family, Rajesh has shown exceptional talent in freestyle wrestling. His dream is to win an Olympic medal for India.",
      achievements: ["District Champion", "State Silver Medalist", "National Camp Selection"],
      fundingGoal: 150000,
      raised: 100000,
      supporters: 32
    },
    {
      name: "Anita Patel",
      sport: "Boxing",
      location: "Manipur",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80",
      story: "Following in Mary Kom's footsteps, Anita is determined to bring Olympic glory to India. She has already shown promise in youth championships.",
      achievements: ["Youth National Gold", "Asian Youth Championship Participant", "State Best Boxer Award"],
      fundingGoal: 300000,
      raised: 200000,
      supporters: 58
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
            alt="Athletes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">Our Athletes</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            Meet the extraordinary talents who are shaping the future of Indian sports. Your support can help them achieve their dreams.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Star, value: "500+", label: "Athletes Supported" },
              { icon: Medal, value: "150+", label: "Medals Won" },
              { icon: Target, value: "15+", label: "Sports Disciplines" },
              { icon: Award, value: "1000+", label: "Active Supporters" }
            ].map((stat, index) => (
              <div key={index} className="glass-card p-6 rounded-xl text-center animate-scaleIn" style={{ animationDelay: `${index * 100}ms` }}>
                <stat.icon className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Athletes Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {athletes.map((athlete, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden animate-scaleIn" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative h-64">
                  <img 
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-purple-500/90 px-4 py-2 rounded-full">
                    <p className="text-sm font-semibold">{athlete.sport}</p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-purple-500" />
                    <span className="text-white/60">{athlete.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{athlete.name}</h3>
                  <p className="text-white/80 mb-6">{athlete.story}</p>
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Medal className="w-5 h-5 text-purple-500" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {athlete.achievements.map((achievement, aIndex) => (
                        <li key={aIndex} className="flex items-center gap-2 text-white/60">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-white/60">Raised: ₹{athlete.raised.toLocaleString()}</span>
                        <span className="text-white/60">{Math.round((athlete.raised/athlete.fundingGoal) * 100)}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-500 rounded-full"
                          style={{ width: `${(athlete.raised/athlete.fundingGoal) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/60">Goal</p>
                        <p className="text-lg font-bold">₹{athlete.fundingGoal.toLocaleString()}</p>
                      </div>
                      <Link 
                        to="/donate" 
                        className="flex items-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                      >
                        Support <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                    <p className="text-sm text-white/60 text-center">
                      Supported by {athlete.supporters} people
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 glass-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Amit Kumar",
                achievement: "Asian Games Gold Medalist",
                sport: "Wrestling",
                year: "2022",
                image: "https://images.unsplash.com/photo-1526676338763-d50a2c64ef88?auto=format&fit=crop&q=80"
              },
              {
                name: "Meera Patel",
                achievement: "Commonwealth Games Silver",
                sport: "Boxing",
                year: "2023",
                image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
              },
              {
                name: "Rahul Singh",
                achievement: "World Championship Bronze",
                sport: "Athletics",
                year: "2023",
                image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80"
              }
            ].map((story, index) => (
              <div key={index} className="glass-card rounded-xl overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-purple-400">{story.sport}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Medal className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">{story.achievement}</span>
                  </div>
                  <p className="text-white/60">{story.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Athletes;