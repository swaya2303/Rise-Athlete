import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Apple, Facebook, Trophy } from 'lucide-react';
import { supabase } from '../lib/supabase';

function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center space-x-2 mb-12 group">
            <Trophy className="w-10 h-10 text-purple-500 transition-transform duration-300 group-hover:scale-110" />
            <span className="text-3xl font-bold text-white tracking-tight group-hover:text-gradient-purple">
              RiseAthlete
            </span>
          </Link>

          {/* Auth Card */}
          <div className="glass-card p-8 rounded-2xl animate-scaleIn">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isSignUp ? 'Create an Account' : 'Welcome Back'}
            </h2>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleAuth} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field pl-12"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field pl-12"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="button-primary w-full justify-center group"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#0D0B1F] text-white/40">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex items-center justify-center px-4 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                <img 
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png"
                  alt="Google"
                  className="h-5 object-contain"
                />
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                <Facebook className="w-5 h-5 text-[#1877F2]" />
              </button>
              <button className="flex items-center justify-center px-4 py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                <Apple className="w-5 h-5 text-white" />
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-white/60">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              {' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;