
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, Headphones, Server, GamepadIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Get your server running in seconds with our one-click deployment system. No technical knowledge required.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade DDoS protection keeps your server online and your players happy, 24/7.",
    color: "from-red-400 to-pink-500",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "Reliable infrastructure with guaranteed uptime. Your server stays online when your players need it most.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Headphones,
    title: "24/7 Expert Support",
    description: "Real gaming experts available around the clock. Get help from people who actually understand your games.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: GamepadIcon,
    title: "6+ Game Support",
    description: "Minecraft, CS2, Rust, Valheim, Garry's Mod, and ARK. Host any game you love with optimized configurations.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Clock,
    title: "72hr Refund Policy",
    description: "Not satisfied? Get a full refund within 72 hours, no questions asked. We're confident you'll love our service.",
    color: "from-indigo-400 to-blue-500",
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Why Choose 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Lylern</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Built by gamers, for gamers. We understand what you need from a hosting provider.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-slate-700 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-white font-bold mb-3">
                  {feature.title}
                </CardTitle>
                <p className="text-gray-300 leading-relaxed">
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
