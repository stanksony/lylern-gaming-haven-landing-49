
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Clock, Users, Server, GamepadIcon, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <GamepadIcon className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Lylern</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">Contact</a>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Zap className="w-4 h-4 mr-1" />
              Lightning Fast Gaming Servers
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Game Server Hosting
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Made Simple</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Deploy your game servers instantly with Lylern. From free community servers to enterprise-grade hosting, 
              we've got you covered with unmatched performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
                Start Free Server
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-4">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Lylern?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built by gamers, for gamers. Our platform delivers the performance and features you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Instant Deployment</CardTitle>
                <CardDescription className="text-gray-300">
                  Get your server running in under 60 seconds with our one-click deployment system.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">DDoS Protection</CardTitle>
                <CardDescription className="text-gray-300">
                  Enterprise-grade DDoS protection keeps your server online 24/7.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">99.9% Uptime</CardTitle>
                <CardDescription className="text-gray-300">
                  Guaranteed uptime with automatic failover and redundant infrastructure.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">24/7 Support</CardTitle>
                <CardDescription className="text-gray-300">
                  Expert gaming support team available around the clock to help you.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Global Locations</CardTitle>
                <CardDescription className="text-gray-300">
                  Servers in 15+ locations worldwide for optimal latency and performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                  <GamepadIcon className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Game Templates</CardTitle>
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-gray-900 border-gray-800 relative">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Free</CardTitle>
                <div className="text-4xl font-bold text-purple-400">$0<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-300">Perfect for small communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    1GB RAM
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    10 player slots
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Basic DDoS protection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Community support
                  </li>
                </ul>
                <Button className="w-full border border-purple-500 text-purple-300 hover:bg-purple-500/10" variant="outline">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-400 relative scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-white">Pro</CardTitle>
                <div className="text-4xl font-bold text-purple-400">$9.99<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-300">Ideal for serious gamers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    4GB RAM
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    50 player slots
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Advanced DDoS protection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Custom subdomain
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Start Pro Plan
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-purple-400">$29.99<span className="text-lg text-gray-400">/month</span></div>
                <CardDescription className="text-gray-300">For large communities</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    16GB RAM
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Unlimited slots
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Enterprise DDoS protection
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    24/7 phone support
                  </li>
                  <li className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2" />
                    Custom domain
                  </li>
                </ul>
                <Button className="w-full border border-purple-500 text-purple-300 hover:bg-purple-500/10" variant="outline">
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
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Trusted by Gamers Worldwide</h2>
            <p className="text-xl text-gray-300">See what our community has to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  "Lylern has been incredible for our Minecraft server. Zero downtime and amazing support!"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">AX</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Alex Chen</div>
                    <div className="text-gray-400">Server Owner</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  "The free tier is perfect for testing. Upgraded to Pro and couldn't be happier with the performance."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">SM</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Miller</div>
                    <div className="text-gray-400">Community Manager</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <CardDescription className="text-gray-300 text-lg">
                  "Best hosting platform I've used. The deployment speed is insane and support is top-notch."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Level Up Your Gaming?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of gamers who trust Lylern for their server hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-4">
              Start Your Free Server
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/10 text-lg px-8 py-4">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <GamepadIcon className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Lylern</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Support</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Discord</a>
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
