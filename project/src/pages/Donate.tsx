import React, { useState } from 'react';
import { CreditCard, Gift, Heart, Shield } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const predefinedAmounts = [1000, 2000, 5000, 10000];

  const handleDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const amount = selectedAmount || Number(customAmount);
    if (!amount || !donorName || !email) return;

    // Here you would typically make an API call to your backend to create a Stripe session
    // For demo purposes, we'll just show a success message
    alert('Thank you for your donation! This is a demo - in production, you would be redirected to Stripe.');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547483238-2cbf881a559f?auto=format&fit=crop&q=80"
            alt="Donation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <h1 className="text-6xl font-bold mb-8 animate-fadeInUp">Make a Difference</h1>
          <p className="text-xl text-white/80 max-w-3xl animate-fadeInUp animate-delay-1">
            Your donation helps us support talented athletes across India, providing them with the resources they need to succeed.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="glass-card p-8 rounded-2xl animate-fadeInUp">
              <h2 className="text-3xl font-bold mb-8">Support Our Athletes</h2>
              <form onSubmit={handleDonation} className="space-y-6">
                {/* Predefined Amounts */}
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-4">Select Amount (₹)</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {predefinedAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => {
                          setSelectedAmount(amount);
                          setCustomAmount('');
                        }}
                        className={`p-4 rounded-lg text-center transition-all duration-300 ${
                          selectedAmount === amount
                            ? 'bg-yellow-500 text-black'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        ₹{amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="customAmount" className="block text-sm font-medium text-white/80 mb-2">
                    Custom Amount (₹)
                  </label>
                  <input
                    type="number"
                    id="customAmount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="input-field"
                    placeholder="Enter amount"
                    min="100"
                  />
                </div>

                {/* Donor Information */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="input-field"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-field"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message (Optional)</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="input-field"
                      rows={4}
                      placeholder="Your message of support"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full button-primary justify-center py-4"
                >
                  <CreditCard className="w-5 h-5" />
                  Proceed to Payment
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-12">
              <div className="glass-card p-8 rounded-2xl animate-fadeInUp animate-delay-1">
                <h3 className="text-2xl font-bold mb-6">Why Donate?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Gift className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Support Athletes</h4>
                      <p className="text-white/60">Your donation directly supports training, equipment, and competition expenses for talented athletes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Make Dreams Reality</h4>
                      <p className="text-white/60">Help underprivileged athletes achieve their dreams of representing India.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Secure Donation</h4>
                      <p className="text-white/60">All donations are processed securely through Stripe with end-to-end encryption.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-2xl animate-fadeInUp animate-delay-2">
                <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-white/80">₹1,000 provides training equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-white/80">₹2,000 covers monthly nutrition needs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-white/80">₹5,000 enables participation in state-level competitions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                    <span className="text-white/80">₹10,000 supports full training program for a month</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Donate;