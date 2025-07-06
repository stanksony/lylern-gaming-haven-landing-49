
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, Headphones, Server, GamepadIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Deploy your server in under 60 seconds with our automated setup process.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection keeps your server online and secure 24/7.",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: Server,
    title: "99.9% Uptime",
    description: "Reliable infrastructure with guaranteed uptime and automatic failover.",
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 support from real gaming professionals who know your games.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: GamepadIcon,
    title: "Multi-Game Support",
    description: "Optimized configurations for Minecraft, CS2, Rust, and many more games.",
    color: "from-indigo-400 to-purple-500",
  },
  {
    icon: Clock,
    title: "72hr Refund",
    description: "Not satisfied? Get a full refund within 72 hours, no questions asked.",
    color: "from-red-400 to-pink-500",
  }
];

export const Features = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Lylern</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built by gamers, for gamers. Experience the difference with professional hosting.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl text-white font-semibold mb-3">
                  {feature.title}
                </CardTitle>
                <p className="text-gray-400 leading-relaxed">
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
