
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, GamepadIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in" style={{"--delay-200": true} as any}>
          <Badge className="mb-8 bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm animate-scale-in" style={{"--delay-300": true} as any}>
            <Zap className="w-4 h-4 mr-2 animate-pulse" />
            Premium Game & Bot Hosting
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight animate-fade-in" style={{"--delay-400": true} as any}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              LYLERN
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{"--delay-500": true} as any}>
            Professional game server and Discord bot hosting with enterprise-grade infrastructure. 
            Deploy instantly, scale effortlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{"--delay-600": true} as any}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-12 py-6 h-auto rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-500 text-blue-300 hover:bg-blue-500/10 text-lg px-12 py-6 h-auto rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:border-blue-400">
              View Plans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
