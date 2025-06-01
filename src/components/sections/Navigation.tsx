
import { Button } from "@/components/ui/button";
import { GamepadIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-xl border-b border-gray-700/50 animate-fade-in shadow-2xl" style={{"--delay-100": true} as any}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
              <GamepadIcon className="h-8 w-8 text-white" />
            </div>
            <span className="text-4xl font-black text-white tracking-tight hover:text-blue-300 transition-colors duration-300">LYLERN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-16">
            <a href="#game-hosting" className="text-gray-200 hover:text-blue-300 transition-all duration-300 font-semibold text-xl hover:scale-110">🎮 Game Hosting</a>
            <a href="#bot-hosting" className="text-gray-200 hover:text-purple-300 transition-all duration-300 font-semibold text-xl hover:scale-110">🤖 Bot Hosting</a>
            <a href="#pricing" className="text-gray-200 hover:text-green-300 transition-all duration-300 font-semibold text-xl hover:scale-110">💰 Pricing</a>
            <a href="#contact" className="text-gray-200 hover:text-cyan-300 transition-all duration-300 font-semibold text-xl hover:scale-110">📞 Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Button variant="ghost" className="text-gray-200 hover:text-white hover:bg-gray-700/50 text-xl font-semibold px-6 py-3">Login</Button>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-2xl font-bold text-xl px-10 py-4 transition-all duration-300 hover:scale-110 shadow-2xl border-0">
              🚀 GET STARTED
            </Button>
          </div>

          <button 
            className="md:hidden text-gray-200 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-8 border-t border-gray-700/50 bg-black/98 backdrop-blur-xl">
            <div className="flex flex-col space-y-8">
              <a href="#game-hosting" className="text-gray-200 hover:text-blue-300 transition-colors text-xl font-semibold">🎮 Game Hosting</a>
              <a href="#bot-hosting" className="text-gray-200 hover:text-purple-300 transition-colors text-xl font-semibold">🤖 Bot Hosting</a>
              <a href="#pricing" className="text-gray-200 hover:text-green-300 transition-colors text-xl font-semibold">💰 Pricing</a>
              <a href="#contact" className="text-gray-200 hover:text-cyan-300 transition-colors text-xl font-semibold">📞 Contact</a>
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 mt-6 rounded-2xl font-bold text-xl py-4">🚀 GET STARTED</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
