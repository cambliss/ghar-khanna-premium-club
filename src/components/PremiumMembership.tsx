
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PremiumMembership = () => {
  const benefits = [
    {
      icon: "🍽️",
      title: "Restaurant Discounts",
      description: "15-30% off at 500+ partner restaurants",
      details: "Dine-in and delivery discounts at premium restaurants across Delhi & Hyderabad"
    },
    {
      icon: "☕",
      title: "Café Partners",
      description: "Free coffee every week + 20% off",
      details: "Complimentary beverages at Starbucks, CCD, and local cafés"
    },
    {
      icon: "🛍️",
      title: "Shopping Benefits",
      description: "Exclusive deals on groceries & lifestyle",
      details: "Discounts at BigBasket, Flipkart, Amazon, and premium brands"
    },
    {
      icon: "🎬",
      title: "Entertainment",
      description: "Movie tickets & streaming subscriptions",
      details: "BookMyShow offers, Netflix/Prime discounts, and event bookings"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Medical consultations & pharmacy",
      details: "Free teleconsultations, medicine discounts, and fitness memberships"
    },
    {
      icon: "🚗",
      title: "Travel & Transport",
      description: "Cab rides, fuel, and travel bookings",
      details: "Uber/Ola credits, petrol station discounts, and hotel bookings"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-orange-50 to-green-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <Badge className="bg-gradient-to-r from-purple-600 to-orange-600 text-white px-4 py-2 text-lg mb-4">
            Premium Exclusive
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Virtual Premium Membership Card
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Unlock exclusive discounts and benefits across 1000+ partner brands. 
            Your subscription doesn't just feed you - it rewards your lifestyle.
          </p>
        </div>

        {/* Premium Card Visual */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <Card className="w-80 h-48 bg-gradient-to-br from-purple-600 via-orange-600 to-pink-600 p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">GHAR SE KHANNA</h3>
                  <p className="text-sm opacity-90">Premium Member</p>
                </div>
                <div className="w-12 h-8 bg-white/20 rounded backdrop-blur-sm flex items-center justify-center">
                  <span className="text-xs font-bold">VIP</span>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="text-sm opacity-90">Member ID</div>
                <div className="font-mono text-lg tracking-wider">GSK-2024-PREMIUM</div>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs opacity-90">Valid Until</div>
                  <div className="font-semibold">12/2025</div>
                </div>
                <div className="text-2xl">💳</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-purple-200">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-orange-600 font-semibold mb-3">{benefit.description}</p>
              <p className="text-gray-600 text-sm">{benefit.details}</p>
            </Card>
          ))}
        </div>

        {/* Membership Tiers */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Membership Eligibility</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center border-2 border-gray-200">
              <div className="text-3xl mb-3">🥉</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Bronze</h4>
              <p className="text-gray-600 mb-3">Monthly Subscribers</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 10% partner discounts</li>
                <li>• Basic benefits</li>
                <li>• 50+ partners</li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-orange-500 bg-orange-50">
              <div className="text-3xl mb-3">🥈</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Silver</h4>
              <p className="text-gray-600 mb-3">6-Month Subscribers</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 20% partner discounts</li>
                <li>• Enhanced benefits</li>
                <li>• 200+ partners</li>
              </ul>
            </Card>
            
            <Card className="p-6 text-center border-2 border-purple-500 bg-purple-50">
              <div className="text-3xl mb-3">🥇</div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">Gold</h4>
              <p className="text-gray-600 mb-3">Yearly Subscribers</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Up to 30% discounts</li>
                <li>• Premium benefits</li>
                <li>• 500+ partners</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-orange-600 hover:from-purple-700 hover:to-orange-700 text-white px-8 py-3 text-lg font-semibold shadow-lg">
            Activate Premium Membership
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumMembership;
