
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, Users, Server, GamepadIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Launch your server in under 60 seconds with our revolutionary one-click deployment system.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Military-grade DDoS protection and advanced security measures keep your server fortress-strong.",
    color: "from-emerald-400 to-green-500"
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Guaranteed uptime with automatic failover and redundant infrastructure across the globe.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: Users,
    title: "24/7 Expert Support",
    description: "Elite gaming support specialists available around the clock to optimize your experience.",
    color: "from-purple-400 to-pink-500"
  },
  {
    icon: Server,
    title: "Global Edge Network",
    description: "Ultra-low latency servers in 15+ strategic locations worldwide for optimal performance.",
    color: "from-indigo-400 to-blue-500"
  },
  {
    icon: GamepadIcon,
    title: "50+ Game Templates",
    description: "Pre-optimized configurations for Minecraft, CS2, Rust, Valheim, and dozens more games.",
    color: "from-red-400 to-rose-500"
  }
];

export const Features = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 animate-fade-in" style={{"--delay-200": true} as any}>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Why Choose 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Lylern</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            Built by elite gamers, engineered for champions. Our platform delivers unmatched performance 
            and cutting-edge features that set you apart from the competition.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group bg-gray-900/50 border border-gray-800/50 hover:border-gray-600/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm animate-scale-in" 
              style={{"--delay": `${800 + index * 100}ms`} as any}
            >
              <CardHeader className="pb-6">
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-blue-100 transition-colors duration-500 font-bold">
                  {feature.title}
                </CardTitle>
                <p className="text-gray-400 leading-relaxed text-lg font-light">
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
