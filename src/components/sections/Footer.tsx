
import { GamepadIcon, Mail, MessageCircle, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <GamepadIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Lylern</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Professional game server and Discord bot hosting with enterprise-grade infrastructure. 
              Built for gamers, by gamers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Discord</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#game-hosting" className="text-gray-400 hover:text-blue-400 transition-colors">Game Hosting</a></li>
              <li><a href="#bot-hosting" className="text-gray-400 hover:text-blue-400 transition-colors">Bot Hosting</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Server Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact Us</span>
              </a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; 2024 Lylern. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
