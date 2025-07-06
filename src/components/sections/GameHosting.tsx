
import { GamepadIcon, Zap, Server, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const games = [
  { name: "Minecraft", players: "Unlimited", icon: "🎮", color: "from-green-400 to-blue-500" },
  { name: "Counter-Strike 2", players: "64", icon: "🔫", color: "from-orange-400 to-red-500" },
  { name: "Rust", players: "200", icon: "⚡", color: "from-yellow-400 to-orange-500" },
  { name: "Valheim", players: "10", icon: "⚔️", color: "from-blue-400 to-purple-500" },
  { name: "Garry's Mod", players: "128", icon: "🛠️", color: "from-purple-400 to-pink-500" },
  { name: "ARK: Survival", players: "100", icon: "🦕", color: "from-green-400 to-teal-500" }
];

export const GameHosting = () => {
  return (
    <section id="game-hosting" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Game Server <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Hosting</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional game hosting with enterprise infrastructure and global reach.
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {games.map((game, index) => (
            <Card 
              key={game.name}
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${game.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {game.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{game.name}</h3>
                    <p className="text-gray-400">Up to {game.players} players</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <GamepadIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">6+ Game Templates</h3>
            <p className="text-gray-400">Pre-configured setups for all major games with optimized settings.</p>
          </div>
          
          <div className="text-center bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Instant Deployment</h3>
            <p className="text-gray-400">Get your server running in under 60 seconds with one-click setup.</p>
          </div>
          
          <div className="text-center bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Global Network</h3>
            <p className="text-gray-400">Multiple locations worldwide for optimal performance and low latency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
