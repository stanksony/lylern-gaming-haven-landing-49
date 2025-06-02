
import { Button } from "@/components/ui/button";
import { GamepadIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = "https://client.lylern.cloud/";
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-gray-700/50 animate-slide-in-left shadow-2xl" style={{"--delay-100": true} as any}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 animate-bounce-in">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl hover-scale hover-rotate hover-glow transition-all duration-300 animate-rotate-in">
              <GamepadIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight hover:text-blue-300 transition-all duration-300 hover-scale animate-shimmer">LYLERN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#game-hosting" className="text-gray-200 hover:text-blue-300 transition-all duration-300 font-semibold text-sm hover-scale animate-fade-in stagger-1">Game Hosting</a>
            <a href="#bot-hosting" className="text-gray-200 hover:text-purple-300 transition-all duration-300 font-semibold text-sm hover-scale animate-fade-in stagger-2">Bot Hosting</a>
            <button onClick={scrollToPricing} className="text-gray-200 hover:text-green-300 transition-all duration-300 font-semibold text-sm hover-scale animate-fade-in stagger-3">Pricing</button>
            <a href="#contact" className="text-gray-200 hover:text-cyan-300 transition-all duration-300 font-semibold text-sm hover-scale animate-fade-in stagger-4">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-200 hover:text-white hover:bg-gray-700/50 text-sm font-semibold px-4 py-2 hover-scale animate-slide-in-right"
              onClick={handleRedirect}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl font-bold text-sm px-6 py-2 transition-all duration-300 hover-lift hover-glow shadow-2xl border-0 animate-bounce-in"
              onClick={handleRedirect}
            >
              GET STARTED
            </Button>
          </div>

          <button 
            className="md:hidden text-gray-200 hover:text-white transition-all duration-300 hover-rotate animate-fade-in"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700/50 bg-black/98 backdrop-blur-xl animate-slide-in-left">
            <div className="flex flex-col space-y-4">
              <a href="#game-hosting" className="text-gray-200 hover:text-blue-300 transition-colors text-sm font-semibold hover-scale animate-fade-in stagger-1">Game Hosting</a>
              <a href="#bot-hosting" className="text-gray-200 hover:text-purple-300 transition-colors text-sm font-semibold hover-scale animate-fade-in stagger-2">Bot Hosting</a>
              <button onClick={scrollToPricing} className="text-gray-200 hover:text-green-300 transition-colors text-sm font-semibold text-left hover-scale animate-fade-in stagger-3">Pricing</button>
              <a href="#contact" className="text-gray-200 hover:text-cyan-300 transition-colors text-sm font-semibold hover-scale animate-fade-in stagger-4">Contact</a>
              <Button 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mt-4 rounded-xl font-bold text-sm py-2 hover-lift hover-glow animate-bounce-in"
                onClick={handleRedirect}
              >
                GET STARTED
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
