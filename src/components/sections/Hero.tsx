
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, GamepadIcon, ArrowRight, Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-black to-purple-900/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="animate-fade-in" style={{"--delay-200": true} as any}>
          <Badge className="mb-8 bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200 border-2 border-blue-400/50 px-6 py-2 text-sm font-bold backdrop-blur-md shadow-2xl animate-scale-in" style={{"--delay-300": true} as any}>
            <Rocket className="w-4 h-4 mr-2 text-blue-300" />
            NEXT-GEN HOSTING IS HERE
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none animate-fade-in tracking-tight" style={{"--delay-400": true} as any}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300 drop-shadow-2xl">
              LYLERN
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in font-light" style={{"--delay-500": true} as any}>
            Stop settling for trash hosting. 
            <span className="text-blue-300 font-semibold"> Deploy like a boss</span>, 
            <span className="text-purple-300 font-semibold"> scale like a legend</span>, 
            <span className="text-cyan-300 font-semibold"> dominate like a champion</span>.
            <br />
            <span className="text-base md:text-lg text-gray-400 mt-2 block">
              Your games deserve better. Your players demand it.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{"--delay-600": true} as any}>
            <Button size="lg" className="group bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white text-lg px-12 py-6 h-auto rounded-xl font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 border-0 shadow-xl">
              START DOMINATING NOW
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gray-500 bg-black/70 text-gray-200 hover:bg-gray-800/90 hover:text-white hover:border-gray-300 text-lg px-12 py-6 h-auto rounded-xl font-bold transition-all duration-500 hover:scale-105 backdrop-blur-md shadow-xl">
              VIEW PRICING
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{"--delay-700": true} as any}>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-black text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">UPTIME</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-black text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">GAMES</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-black text-cyan-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">LOCATIONS</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-black text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider font-medium">SUPPORT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
