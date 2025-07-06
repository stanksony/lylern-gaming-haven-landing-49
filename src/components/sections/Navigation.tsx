
import { Button } from "@/components/ui/button";
import { GamepadIcon, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

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
    <nav className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700">
      {/* Top announcement bar */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm">
        <Badge className="bg-white text-blue-600 text-xs mr-2">NEW</Badge>
        🚀 We just launched our new control panel! Discover all the new features.
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GamepadIcon className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-black text-white">LYLERN</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#game-hosting" className="text-white hover:text-blue-300 transition-colors font-medium">
                Minecraft Server Hosting
              </a>
              <div className="relative group">
                <button className="text-white hover:text-blue-300 transition-colors font-medium flex items-center">
                  Games <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <a href="#pricing" onClick={scrollToPricing} className="text-white hover:text-blue-300 transition-colors font-medium">
                Control Panel
              </a>
              <div className="relative group">
                <button className="text-white hover:text-blue-300 transition-colors font-medium flex items-center">
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0">
                CONTROL PANEL 2.0 SALE!
              </Badge>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <span>🇺🇸 English (USD $)</span>
            </div>
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-300 hover:bg-slate-800 font-medium"
              onClick={handleRedirect}
            >
              Lylern Control Panel
            </Button>
            <Button 
              variant="ghost" 
              className="text-white hover:text-blue-300 hover:bg-slate-800 font-medium"
              onClick={handleRedirect}
            >
              Client Area
            </Button>
          </div>

          <button 
            className="md:hidden text-white hover:text-blue-300 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <a href="#game-hosting" className="text-white hover:text-blue-300 transition-colors font-medium">
                Minecraft Server Hosting
              </a>
              <a href="#games" className="text-white hover:text-blue-300 transition-colors font-medium">
                Games
              </a>
              <a href="#pricing" onClick={scrollToPricing} className="text-white hover:text-blue-300 transition-colors font-medium">
                Control Panel
              </a>
              <Button 
                className="bg-blue-600 hover:bg-blue-700 mt-4 font-medium"
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
