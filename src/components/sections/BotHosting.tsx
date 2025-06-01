
import { Bot, Shield, Clock } from "lucide-react";

export const BotHosting = () => {
  return (
    <section id="bot-hosting" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-right" style={{"--delay-200": true} as any}>
            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl p-8 backdrop-blur-sm border border-blue-800/30">
              <div className="text-center">
                <Bot className="w-24 h-24 text-blue-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Discord Bot Management</h3>
                <p className="text-gray-300 mb-6">
                  Keep your Discord bots online 24/7 with our reliable hosting platform
                </p>
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-green-400 font-semibold">✓ 24/7 Uptime Monitoring</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-green-400 font-semibold">✓ Automatic Restarts</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-green-400 font-semibold">✓ Real-time Logs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{"--delay-400": true} as any}>
            <h2 className="text-5xl font-black text-white mb-8 leading-tight">
              Discord Bot <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hosting</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Keep your Discord bots online 24/7 with our reliable and scalable bot hosting platform. 
              Perfect for communities of all sizes.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">24/7 Uptime</h3>
                  <p className="text-gray-300 text-lg">Keep your bots running around the clock</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Secure Environment</h3>
                  <p className="text-gray-300 text-lg">Isolated containers with enterprise security</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Auto-Restart</h3>
                  <p className="text-gray-300 text-lg">Automatic recovery from crashes and errors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
