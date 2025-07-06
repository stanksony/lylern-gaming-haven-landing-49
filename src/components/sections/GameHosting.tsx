
import { GamepadIcon, Zap, Server } from "lucide-react";

const games = [
  { name: "Minecraft", players: "Unlimited", icon: "🏗️" },
  { name: "CS2", players: "64", icon: "🔫" },
  { name: "Rust", players: "200", icon: "⚡" },
  { name: "Valheim", players: "10", icon: "⚔️" },
  { name: "Garry's Mod", players: "128", icon: "🎮" },
  { name: "ARK", players: "100", icon: "🦕" }
];

export const GameHosting = () => {
  return (
    <section id="game-hosting" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Game Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Hosting</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional game server hosting with enterprise-grade infrastructure. 
            Host your favorite games with unbeatable performance.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {games.map((game, index) => (
            <div 
              key={game.name}
              className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{game.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white">{game.name}</h3>
                  <p className="text-gray-400">Up to {game.players} players</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GamepadIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">6+ Game Templates</h3>
            <p className="text-gray-300">Pre-configured setups for all major games</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Instant Deployment</h3>
            <p className="text-gray-300">Get your server running in under 60 seconds</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Global Infrastructure</h3>
            <p className="text-gray-300">2+ locations worldwide for optimal performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};
