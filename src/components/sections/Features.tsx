
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Clock, Users, Server, GamepadIcon, Globe, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "Get your server running in under 60 seconds with our one-click deployment system.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade DDoS protection keeps your server online 24/7.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Guaranteed uptime with automatic failover and redundant infrastructure.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "24/7 Support",
    description: "Expert gaming support team available around the clock to help you.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Server,
    title: "Global Locations",
    description: "Servers in 15+ locations worldwide for optimal latency and performance.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    icon: GamepadIcon,
    title: "Game Templates",
    description: "Pre-configured templates for Minecraft, CS2, Rust, and 50+ other games.",
    color: "from-red-500 to-rose-500"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in" style={{"--delay-200": true} as any}>
          <h2 className="text-5xl font-black text-white mb-6">Why Choose Lylern?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Built by gamers, for gamers. Our platform delivers the performance and features you need to succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-500 hover:scale-105 hover:shadow-2xl group animate-scale-in backdrop-blur-sm" 
              style={{"--delay": `${800 + index * 100}ms`} as any}
            >
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-100 transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-gray-400 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
