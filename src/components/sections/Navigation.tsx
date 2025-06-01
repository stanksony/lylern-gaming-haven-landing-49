
import { Button } from "@/components/ui/button";
import { GamepadIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50 animate-fade-in" style={{"--delay-100": true} as any}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <GamepadIcon className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-black text-white tracking-tight">LYLERN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <a href="#game-hosting" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105">Game Hosting</a>
            <a href="#bot-hosting" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105">Bot Hosting</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium text-lg hover:scale-105">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800/50 text-lg font-medium">Login</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold text-lg px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-800/50 bg-black/95 backdrop-blur-xl">
            <div className="flex flex-col space-y-6">
              <a href="#game-hosting" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Game Hosting</a>
              <a href="#bot-hosting" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Bot Hosting</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-lg font-medium">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-4 rounded-xl font-semibold">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
