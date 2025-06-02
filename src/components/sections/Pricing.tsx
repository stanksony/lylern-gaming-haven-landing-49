
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    description: "Perfect for testing and small projects",
    features: [
      "3GB RAM",
      "Unlimited slots",
      "Basic DDoS protection",
      "Community support",
      "1 server instance"
    ],
    buttonText: "Get Started Free",
    buttonVariant: "outline" as const,
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Ideal for serious gamers and communities",
    features: [
      "8GB RAM",
      "Unlimited slots",
      "Advanced DDoS protection",
      "Priority support",
      "Custom subdomain",
      "5 server instances",
      "Auto backups"
    ],
    buttonText: "Start Pro Plan",
    buttonVariant: "default" as const,
    popular: true
  },
  {
    name: "Enterprise",
    price: "$29.99",
    period: "/month",
    description: "For large communities and organizations",
    features: [
      "16GB RAM",
      "Unlimited slots",
      "Enterprise DDoS protection",
      "24/7 phone support",
      "Custom domain",
      "Unlimited instances",
      "Daily backups",
      "Dedicated support"
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false
  }
];

export const Pricing = () => {
  const handleRedirect = () => {
    window.location.href = "https://client.lylern.cloud/";
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in" style={{"--delay-200": true} as any}>
          <h2 className="text-5xl font-black text-white mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Start free and scale as you grow. No hidden fees, no surprises. Choose the plan that fits your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-scale-in ${
                plan.popular 
                  ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-400 scale-105 shadow-2xl shadow-blue-500/20' 
                  : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
              } backdrop-blur-sm`}
              style={{"--delay": `${400 + index * 100}ms`} as any}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-white'}`}>
                  {plan.name}
                </CardTitle>
                <div className="py-4">
                  <span className={`text-5xl font-black ${plan.popular ? 'text-blue-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-lg">{plan.period}</span>
                </div>
                <CardDescription className="text-gray-300 text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300 transition-all duration-300 hover:text-blue-200">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/25'
                      : plan.buttonVariant === 'outline'
                      ? 'border-2 border-blue-500 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                  }`}
                  variant={plan.buttonVariant}
                  onClick={handleRedirect}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
