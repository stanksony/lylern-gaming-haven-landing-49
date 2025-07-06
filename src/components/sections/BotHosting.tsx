
import { Bot, Shield, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const BotHosting = () => {
  return (
    <section id="bot-hosting" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Discord Bot <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Hosting</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Keep your Discord bots online 24/7 with our reliable and scalable hosting platform. 
              Perfect for communities of all sizes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Uptime</h3>
                  <p className="text-gray-400">Keep your bots running around the clock with automatic monitoring and restarts.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Secure Environment</h3>
                  <p className="text-gray-400">Isolated containers with enterprise-grade security and DDoS protection.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                  <p className="text-gray-400">High-performance servers ensure your bots respond instantly to commands.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-8 border border-slate-600 backdrop-blur-sm">
            <div className="text-center">
              <Bot className="w-24 h-24 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white mb-4">Bot Management Dashboard</h3>
              <p className="text-gray-400 mb-6">
                Manage all your Discord bots from one powerful interface with real-time monitoring.
              </p>
              <div className="space-y-3">
                <Card className="bg-slate-600/50 border-slate-500">
                  <CardContent className="p-3">
                    <div className="text-green-400 font-medium flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      Bot Status: Online
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-600/50 border-slate-500">
                  <CardContent className="p-3">
                    <div className="text-blue-400 font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Uptime: 99.9%
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-600/50 border-slate-500">
                  <CardContent className="p-3">
                    <div className="text-purple-400 font-medium flex items-center">
                      <Zap className="w-4 h-4 mr-2" />
                      Response Time: 12ms
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
