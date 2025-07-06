
import { Bot, Shield, Clock } from "lucide-react";

export const BotHosting = () => {
  return (
    <section id="bot-hosting" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Discord Bot <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Hosting</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Keep your Discord bots online 24/7 with our reliable and scalable bot hosting platform. 
              Perfect for communities of all sizes.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">24/7 Uptime</h3>
                  <p className="text-gray-300">Keep your bots running around the clock</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Secure Environment</h3>
                  <p className="text-gray-300">Isolated containers with enterprise security</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Auto-Restart</h3>
                  <p className="text-gray-300">Automatic recovery from crashes and errors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
            <div className="text-center">
              <Bot className="w-24 h-24 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Discord Bot Management</h3>
              <p className="text-gray-300 mb-6">
                Keep your Discord bots online 24/7 with our reliable hosting platform
              </p>
              <div className="space-y-3">
                <div className="bg-slate-600 rounded-lg p-3 text-left">
                  <div className="text-green-400 font-semibold">✓ 24/7 Uptime Monitoring</div>
                </div>
                <div className="bg-slate-600 rounded-lg p-3 text-left">
                  <div className="text-green-400 font-semibold">✓ Automatic Restarts</div>
                </div>
                <div className="bg-slate-600 rounded-lg p-3 text-left">
                  <div className="text-green-400 font-semibold">✓ Real-time Logs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
