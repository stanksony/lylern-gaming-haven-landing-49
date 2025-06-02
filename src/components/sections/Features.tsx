
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, Users, Server, GamepadIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Deploy in 30 Seconds",
    description: "Click, deploy, game. Our AI-powered deployment system gets you online faster than you can say 'lag-free'.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "Fort Knox Security",
    description: "DDoS attacks bounce off us like rubber balls. Military-grade protection keeps the hackers crying.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Clock,
    title: "99.9% Uptime Promise",
    description: "We're so confident, we'll give you your money back if we go down. Spoiler alert: we don't go down.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Users,
    title: "Human Support Heroes",
    description: "No bots, no scripts, no BS. Real gaming experts who actually play the games you're hosting.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Server,
    title: "Global Speed Network",
    description: "2+ locations worldwide with fiber connections that make the internet jealous. Your players will thank you.",
    color: "from-indigo-400 to-blue-500",
  },
  {
    icon: GamepadIcon,
    title: "Every Game Imaginable",
    description: "Minecraft, CS2, Rust, Valheim, Garry's Mod, and ARK. If it's a game, we host it. If we don't, just ask.",
    color: "from-red-400 to-rose-500",
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Enhanced background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black animate-gradient-x"></div>
      
      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float stagger-3"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-in-left" style={{"--delay-200": true} as any}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight hover-scale transition-transform duration-300">
            Why Gamers Choose 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 animate-shimmer"> Lylern</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in" style={{"--delay-400": true} as any}>
            We're not just another hosting company. We're gamers who got tired of crappy servers 
            and decided to build something that doesn't suck.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`group bg-gray-900/60 border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-700 hover-lift hover-glow backdrop-blur-sm p-6 animate-bounce-in stagger-${index + 1}`}
              style={{"--delay": `${800 + index * 100}ms`} as any}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-2xl animate-rotate-in hover-glow`}>
                  <feature.icon className="w-8 h-8 text-white animate-float" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-100 transition-colors duration-500 font-bold mb-3 hover-scale">
                  {feature.title}
                </CardTitle>
                <p className="text-gray-300 leading-relaxed text-sm font-light group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
