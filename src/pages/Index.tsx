
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Clock, Users, Server, GamepadIcon, Star, Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800 animate-fade-in" style={{"--delay-100": true} as any}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 animate-fade-in">
              <GamepadIcon className="h-8 w-8 text-cyan-400 transition-transform duration-300 hover:scale-110" />
              <span className="text-2xl font-bold text-white">Lylern</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#game-hosting" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Game Hosting</a>
              <a href="#bot-hosting" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Bot Hosting</a>
              <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Contact</a>
            </div>
            <Button className="bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in" style={{"--delay-200": true} as any}>
            <Badge className="mb-6 bg-cyan-600/20 text-cyan-300 border-cyan-500/30 animate-scale-in" style={{"--delay-300": true} as any}>
              <Zap className="w-4 h-4 mr-1 animate-pulse" />
              Lightning Fast Game & Bot Hosting
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in" style={{"--delay-400": true} as any}>
              Game & Bot Hosting
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"> Made Simple</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{"--delay-500": true} as any}>
              Deploy your game servers and Discord bots instantly with Lylern. From free community servers to enterprise-grade hosting, 
              we've got you covered with unmatched performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{"--delay-600": true} as any}>
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
                Start Free Server
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-cyan-400">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Hosting Section */}
      <section id="game-hosting" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{"--delay-200": true} as any}>
            <h2 className="text-4xl font-bold text-white mb-4">Game Server Hosting</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Host your favorite games with enterprise-grade infrastructure and unbeatable performance.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-right" style={{"--delay-400": true} as any}>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Gaming setup with multiple monitors" 
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 animate-fade-in" style={{"--delay-500": true} as any}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                  <GamepadIcon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">50+ Game Templates</h3>
                  <p className="text-gray-300">Minecraft, CS2, Rust, Valheim, and many more</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Instant Deployment</h3>
                  <p className="text-gray-300">Get your server running in under 60 seconds</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Global Infrastructure</h3>
                  <p className="text-gray-300">15+ locations worldwide for optimal latency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bot Hosting Section */}
      <section id="bot-hosting" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{"--delay-200": true} as any}>
            <h2 className="text-4xl font-bold text-white mb-4">Discord Bot Hosting</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Keep your Discord bots online 24/7 with our reliable and scalable bot hosting platform.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in" style={{"--delay-400": true} as any}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Bot className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">24/7 Uptime</h3>
                  <p className="text-gray-300">Keep your bots running around the clock</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Secure Environment</h3>
                  <p className="text-gray-300">Isolated containers with enterprise security</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Auto-Restart</h3>
                  <p className="text-gray-300">Automatic recovery from crashes and errors</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right" style={{"--delay-500": true} as any}>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="Programming code on monitor" 
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{"--delay-700": true} as any}>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Lylern?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built by gamers, for gamers. Our platform delivers the performance and features you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group animate-scale-in" style={{"--delay-800": true} as any}>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600/30 transition-all duration-300">
                  <Zap className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-100 transition-colors duration-300">Instant Deployment</CardTitle>
                <CardDescription className="text-gray-300">
                  Get your server running in under 60 seconds with our one-click deployment system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group animate-scale-in" style={{"--delay-900": true} as any}>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600/30 transition-all duration-300">
                  <Shield className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-100 transition-colors duration-300">DDoS Protection</CardTitle>
                <CardDescription className="text-gray-300">
                  Enterprise-grade DDoS protection keeps your server online 24/7.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group animate-scale-in" style={{"--delay-1000": true} as any}>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600/30 transition-all duration-300">
                  <Clock className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-100 transition-colors duration-300">99.9% Uptime</CardTitle>
                <CardDescription className="text-gray-300">
                  Guaranteed uptime with automatic failover and redundant infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group animate-slide-in-right" style={{"--delay-800": true} as any}>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600/30 transition-all duration-300">
                  <Users className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-100 transition-colors duration-300">24/7 Support</CardTitle>
                <CardDescription className="text-gray-300">
                  Expert gaming support team available around the clock to help you.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group animate-slide-in-right" style={{"--delay-900": true} as any}>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600/30 transition-all duration-300">
                  <Server className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-100 transition-colors duration-300">Global Locations</CardTitle>
                <CardDescription className="text-gray-300">
                  Servers in 15+ locations worldwide for optimal latency and performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-cyan-500/40 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group animate-slide-in-right" style={{"--delay-1000": true} as any}>
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-600/30 transition-all duration-300">
                  <GamepadIcon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-white group-hover:text-cyan-100 transition-colors duration-300">Game Templates</CardTitle>
                <CardDescription className="text-gray-300">
                  Pre-configured templates for Minecraft, CS2, Rust, and 50+ other games.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{"--delay-200": true} as any}>
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-gray-900 border-gray-800 relative transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 animate-scale-in" style={{"--delay-400": true} as any}>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Free</CardTitle>
                <div className="text-4xl font-bold text-cyan-400">$0<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-300">Perfect for small communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    1GB RAM
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    10 player slots
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Basic DDoS protection
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Community support
                  </li>
                </ul>
                <Button className="w-full border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border-cyan-400 relative scale-105 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/20 animate-scale-in" style={{"--delay-500": true} as any}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white animate-pulse">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <div className="text-4xl font-bold text-cyan-400">$9.99<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-300">Ideal for serious gamers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    4GB RAM
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    50 player slots
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Advanced DDoS protection
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Custom subdomain
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  Start Pro Plan
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-900 border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 animate-scale-in" style={{"--delay-600": true} as any}>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-cyan-400">$29.99<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-300">For large communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    16GB RAM
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Unlimited slots
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Enterprise DDoS protection
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center text-gray-300 transition-all duration-300 hover:text-cyan-200">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Custom domain
                  </li>
                </ul>
                <Button className="w-full border border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 hover:border-cyan-400" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in" style={{"--delay-200": true} as any}>
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Gamers Worldwide</h2>
            <p className="text-xl text-gray-300">See what our community has to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 animate-slide-in-right" style={{"--delay-400": true} as any}>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  "Lylern has been incredible for our Minecraft server. Zero downtime and amazing support!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold">AX</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Alex Chen</div>
                    <div className="text-gray-400">Server Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 animate-slide-in-right" style={{"--delay-500": true} as any}>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  "The free tier is perfect for testing. Upgraded to Pro and couldn't be happier with the performance."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Miller</div>
                    <div className="text-gray-400">Community Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30 animate-slide-in-right" style={{"--delay-600": true} as any}>
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-300 hover:scale-110" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  "Best hosting platform I've used. The deployment speed is insane and support is top-notch."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <span className="text-white font-bold">MJ</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Mike Johnson</div>
                    <div className="text-gray-400">Esports Team Lead</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in" style={{"--delay-300": true} as any}>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Level Up Your Gaming?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of gamers and developers who trust Lylern for their hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/25">
              Start Your Free Server
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 text-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-cyan-400">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800 animate-fade-in" style={{"--delay-400": true} as any}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GamepadIcon className="h-8 w-8 text-cyan-400 transition-transform duration-300 hover:scale-110" />
              <span className="text-2xl font-bold text-white">Lylern</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Terms</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Support</a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-105">Discord</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Lylern. All rights reserved. Built for gamers, by gamers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
