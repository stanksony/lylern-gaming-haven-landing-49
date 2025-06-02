
import { GamepadIcon, Zap, Server } from "lucide-react";

export const GameHosting = () => {
  return (
    <section id="game-hosting" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in" style={{"--delay-200": true} as any}>
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              Game Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Hosting</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Host your favorite games with enterprise-grade infrastructure and unbeatable performance. 
              From Minecraft to CS2, we've got you covered.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GamepadIcon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">6+ Game Templates</h3>
                  <p className="text-gray-300 text-lg">Minecraft, CS2, Rust, Valheim, Garry's Mod, and ARK</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Instant Deployment</h3>
                  <p className="text-gray-300 text-lg">Get your server running in under 60 seconds</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Global Infrastructure</h3>
                  <p className="text-gray-300 text-lg">2+ locations worldwide for optimal latency</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right" style={{"--delay-400": true} as any}>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 backdrop-blur-sm border border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
                  <div className="text-gray-300">Game Types</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">2+</div>
                  <div className="text-gray-300">Locations</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
