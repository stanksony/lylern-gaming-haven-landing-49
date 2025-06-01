
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, GamepadIcon, ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-purple-900/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in" style={{"--delay-200": true} as any}>
          <Badge className="mb-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-300 border border-blue-500/30 px-6 py-3 text-sm font-medium backdrop-blur-sm animate-scale-in" style={{"--delay-300": true} as any}>
            <Zap className="w-4 h-4 mr-2" />
            Premium Game & Bot Hosting
          </Badge>
          
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-none animate-fade-in tracking-tight" style={{"--delay-400": true} as any}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400">
              LYLERN
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light" style={{"--delay-500": true} as any}>
            Experience next-generation game server hosting with 
            <span className="text-blue-400 font-medium"> enterprise-grade infrastructure</span>. 
            Deploy instantly, scale effortlessly, dominate globally.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{"--delay-600": true} as any}>
            <Button size="lg" className="group bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 hover:from-blue-700 hover:via-blue-600 hover:to-purple-700 text-white text-lg px-16 py-8 h-auto rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 border-0">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-600 bg-black/50 text-gray-300 hover:bg-gray-900/80 hover:text-white hover:border-gray-400 text-lg px-16 py-8 h-auto rounded-2xl font-semibold transition-all duration-500 hover:scale-105 backdrop-blur-sm">
              View Plans
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 animate-fade-in" style={{"--delay-700": true} as any}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Game Types</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Locations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
