
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Daily Plan",
      price: "₹150",
      period: "per day",
      description: "Perfect for trying our service",
      features: ["1 meal per day", "Free delivery", "No commitment", "Cancel anytime"],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Weekly Plan",
      price: "₹980",
      period: "per week",
      description: "Great for short-term needs",
      features: ["7 meals", "10% discount", "Free delivery", "Flexible scheduling"],
      popular: false,
      color: "border-orange-200"
    },
    {
      name: "Monthly Plan",
      price: "₹3,600",
      period: "per month",
      description: "Most popular choice",
      features: ["30 meals", "20% discount", "Priority delivery", "Menu customization", "Free extras"],
      popular: true,
      color: "border-orange-500"
    },
    {
      name: "Yearly Plan",
      price: "₹36,000",
      period: "per year",
      description: "Best value for families",
      features: ["365 meals", "40% discount", "Premium support", "Full customization", "Free premium membership", "Corporate benefits"],
      popular: false,
      color: "border-green-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-green-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Flexible Payment Options
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose a plan that fits your lifestyle and budget. From daily trials to yearly subscriptions, 
            we have options for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative p-6 hover:shadow-2xl transition-all duration-300 ${plan.color} ${plan.popular ? 'scale-105 shadow-xl' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-orange-600 mb-1">{plan.price}</div>
                <p className="text-gray-600 text-sm">{plan.period}</p>
                <p className="text-gray-700 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-600 hover:bg-gray-700'} text-white font-semibold py-2 px-4 transition-all duration-200`}
              >
                Choose Plan
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Need a custom plan for your organization?</p>
          <Button variant="outline" size="lg" className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white">
            Contact for Corporate Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
