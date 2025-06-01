
import { Button } from "@/components/ui/button";
import { GamepadIcon, Menu } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800/50 animate-fade-in" style={{"--delay-100": true} as any}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <GamepadIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-black text-white">LYLERN</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#game-hosting" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium">Game Hosting</a>
            <a href="#bot-hosting" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium">Bot Hosting</a>
            <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium">Contact</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">Login</Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold">Get Started</Button>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#game-hosting" className="text-gray-300 hover:text-blue-400 transition-colors">Game Hosting</a>
              <a href="#bot-hosting" className="text-gray-300 hover:text-blue-400 transition-colors">Bot Hosting</a>
              <a href="#pricing" className="text-gray-300 hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 mt-4">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
