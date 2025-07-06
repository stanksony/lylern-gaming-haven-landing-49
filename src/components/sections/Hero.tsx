
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, Headphones, Zap, Server, Play } from "lucide-react";

export const Hero = () => {
  const handleRedirect = () => {
    window.location.href = "https://client.lylern.cloud/";
  };

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Trust Indicators */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-3 text-white text-lg font-medium">4.9/5 • 2,800+ Reviews</span>
            </div>
            <Badge className="bg-green-600/20 text-green-400 border border-green-500/30 px-4 py-1">
              ⭐ Excellent on Trustpilot
            </Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Premium<br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Game Server
                </span><br />
                Hosting
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Experience lightning-fast, reliable game servers with enterprise-grade infrastructure. 
                Perfect for Minecraft, CS2, Rust, and more.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4 mb-8 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-white text-sm font-medium">Instant Setup</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-white text-sm font-medium">DDoS Protected</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-3">
                  <Server className="w-5 h-5 text-blue-400" />
                  <span className="text-white text-sm font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 rounded-lg p-3">
                  <Headphones className="w-5 h-5 text-purple-400" />
                  <span className="text-white text-sm font-medium">24/7 Support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold"
                  onClick={scrollToPricing}
                >
                  View Plans
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-slate-600 text-white hover:bg-slate-800 px-8 py-4 text-lg"
                  onClick={handleRedirect}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Demo
                </Button>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/50">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                    <Server className="w-24 h-24 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Enterprise Infrastructure</h3>
                  <p className="text-gray-400 mb-4">Powered by high-performance servers worldwide</p>
                  <Badge className="bg-blue-600/20 text-blue-400 border border-blue-500/30">
                    Global Network
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
