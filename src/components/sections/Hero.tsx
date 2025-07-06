
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Clock, Headphones, Zap, Server } from "lucide-react";

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
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Trustpilot-style rating */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                ))}
              </div>
              <span className="ml-3 text-white text-lg font-semibold">4.9 out of 5 based on 2800+ reviews</span>
            </div>
            <Badge className="bg-green-600 text-white border-0">★ Trustpilot</Badge>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-none">
                MINECRAFT<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  SERVER HOSTING
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Easily host your very own Minecraft server with Lylern. Enjoy 
                <span className="text-blue-300 font-semibold"> reliable, fully customizable and quick to set up servers</span>, 
                perfect for playing with friends or starting a community!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">72hr Self-Serve Refund</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">Instant Setup</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Headphones className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">24/7 Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">Instant Modpack & Plugin Installer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-red-400" />
                  <span className="text-white font-medium">DDoS Protection</span>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6 h-auto rounded-lg font-bold"
                onClick={scrollToPricing}
              >
                View All Plans
              </Button>
            </div>

            {/* Right Content - Game Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/30">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mb-6">
                    <Server className="w-32 h-32 text-white" />
                  </div>
                  <Badge className="bg-blue-600 text-white border-0 px-4 py-2">
                    "CHASE THE SKIES" NOW AVAILABLE
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
