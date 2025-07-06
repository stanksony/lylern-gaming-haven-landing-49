
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 4.99,
    originalPrice: 9.99,
    ram: "3GB",
    slots: "Unlimited",
    features: [
      "3GB DDR4 RAM",
      "Unlimited Player Slots",
      "Free Sub-domain",
      "Instant Setup",
      "DDoS Protection",
      "24/7 Support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: 9.99,
    originalPrice: 19.99,
    ram: "8GB",
    slots: "Unlimited", 
    features: [
      "8GB DDR4 RAM",
      "Unlimited Player Slots",
      "Free Custom Domain",
      "Priority Support",
      "Enhanced DDoS Protection",
      "Automated Backups",
      "Plugin Management"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 19.99,
    originalPrice: 39.99,
    ram: "16GB",
    slots: "Unlimited",
    features: [
      "16GB DDR4 RAM", 
      "Unlimited Player Slots",
      "Dedicated IP Address",
      "White-glove Setup",
      "Enterprise Support",
      "Custom Configurations",
      "Advanced Monitoring"
    ],
    popular: false
  }
];

export const Pricing = () => {
  const handleRedirect = () => {
    window.location.href = "https://client.lylern.cloud/";
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Get started with professional game hosting. All plans include DDoS protection and 24/7 support.
          </p>
          
          {/* Sale Banner */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 mb-12 max-w-2xl mx-auto">
            <Badge className="bg-red-600 text-white mb-3">LIMITED TIME</Badge>
            <h3 className="text-2xl font-bold text-white mb-2">50% OFF First Month</h3>
            <p className="text-blue-200">New customers get half price on their first month. No setup fees!</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`bg-slate-800/50 border-2 transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 text-sm font-semibold rounded-t-lg">
                  MOST POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-lg text-gray-400 line-through">${plan.originalPrice}</span>
                  </div>
                  <div className="text-gray-400">per month</div>
                </div>
                <div className="text-gray-300 bg-slate-700/50 rounded-lg p-3">
                  {plan.ram} RAM • {plan.slots} Slots
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full font-semibold py-6 text-lg ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                  onClick={handleRedirect}
                >
                  Get {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-blue-900/30 rounded-2xl p-8 border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-4">
            Need Something Custom?
          </h3>
          <p className="text-gray-400 text-lg mb-6">
            Contact our team for enterprise solutions and custom configurations
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-slate-600 text-white hover:bg-slate-800"
            onClick={handleRedirect}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};
