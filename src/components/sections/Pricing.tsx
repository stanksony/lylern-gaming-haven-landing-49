
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";

const plans = [
  {
    name: "Starter",
    price: 4.99,
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
    ram: "8GB",
    slots: "Unlimited", 
    features: [
      "8GB DDR4 RAM",
      "Unlimited Player Slots",
      "Free Domain",
      "Priority Support",
      "Advanced DDoS Protection",
      "Free Backups",
      "Plugin Installation"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: 19.99,
    ram: "16GB",
    slots: "Unlimited",
    features: [
      "16GB DDR4 RAM", 
      "Unlimited Player Slots",
      "Dedicated IP",
      "White-glove Setup",
      "Enterprise Support",
      "Custom Configurations",
      "Advanced Monitoring"
    ],
    popular: false
  }
];

export const Pricing = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 15,
    minutes: 8,
    seconds: 51
  });

  const handleRedirect = () => {
    window.location.href = "https://client.lylern.cloud/";
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Sale Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-4xl font-black text-white mb-4">
            GET 50% OFF YOUR SERVER!
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Get 50% off your first month and enjoy The Lylern Control Panel 2.0—faster, easier, and built for gamers. 
            <span className="text-white font-semibold"> Learn More.</span>
          </p>
          
          {/* Countdown Timer */}
          <div className="flex justify-center space-x-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold bg-white/20 rounded-lg px-4 py-2">
                {timeLeft.days}
              </div>
              <div className="text-sm mt-2">DAYS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-white/20 rounded-lg px-4 py-2">
                {timeLeft.hours}
              </div>
              <div className="text-sm mt-2">HOURS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-white/20 rounded-lg px-4 py-2">
                {timeLeft.minutes}
              </div>
              <div className="text-sm mt-2">MINS</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-white/20 rounded-lg px-4 py-2">
                {timeLeft.seconds}
              </div>
              <div className="text-sm mt-2">SEC</div>
            </div>
          </div>
        </div>

        {/* Billing Toggles */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800 rounded-lg p-1 flex">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
              Monthly
            </button>
            <button className="text-gray-300 px-6 py-2 rounded-lg font-medium hover:text-white relative">
              Quarterly
              <Badge className="absolute -top-2 -right-2 bg-blue-600 text-xs">10% OFF</Badge>
            </button>
            <button className="text-gray-300 px-6 py-2 rounded-lg font-medium hover:text-white relative">
              Semi-Annually
              <Badge className="absolute -top-2 -right-2 bg-purple-600 text-xs">20% OFF</Badge>
            </button>
            <button className="text-gray-300 px-6 py-2 rounded-lg font-medium hover:text-white relative">
              Annually
              <Badge className="absolute -top-2 -right-2 bg-green-600 text-xs">25% OFF</Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`bg-slate-800 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 ring-2 ring-blue-500/20' 
                  : 'border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-bold rounded-t-lg">
                  MOST POPULAR
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-black text-white mb-2">
                  {plan.name}
                </CardTitle>
                <div className="text-4xl font-black text-white mb-2">
                  ${plan.price}<span className="text-lg text-gray-400">/month</span>
                </div>
                <div className="text-gray-300">
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
                  className={`w-full font-bold py-6 text-lg ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  }`}
                  onClick={handleRedirect}
                >
                  Choose {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-3xl font-black text-white mb-4">
              PLAY <span className="text-blue-400">VANILLA</span>
            </h3>
            <p className="text-gray-300 text-lg">
              Experience Minecraft the way it was meant to be played
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
