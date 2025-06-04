
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PartnerDiscounts = () => {
  const partnerCategories = [
    {
      category: "Fine Dining",
      partners: [
        { name: "The Leela Hotels", discount: "25%", logo: "🏨" },
        { name: "Barbeque Nation", discount: "20%", logo: "🍖" },
        { name: "Mainland China", discount: "15%", logo: "🥢" },
        { name: "Pizza Hut", discount: "30%", logo: "🍕" }
      ]
    },
    {
      category: "Quick Service",
      partners: [
        { name: "McDonald's", discount: "15%", logo: "🍟" },
        { name: "KFC", discount: "20%", logo: "🍗" },
        { name: "Subway", discount: "25%", logo: "🥪" },
        { name: "Domino's", discount: "20%", logo: "🍕" }
      ]
    },
    {
      category: "Cafés & Beverages",
      partners: [
        { name: "Starbucks", discount: "15%", logo: "☕" },
        { name: "Costa Coffee", discount: "20%", logo: "☕" },
        { name: "Chaayos", discount: "25%", logo: "🫖" },
        { name: "Blue Tokai", discount: "20%", logo: "☕" }
      ]
    },
    {
      category: "Retail & Shopping",
      partners: [
        { name: "Big Bazaar", discount: "10%", logo: "🛒" },
        { name: "Reliance Fresh", discount: "15%", logo: "🍎" },
        { name: "Spencer's", discount: "12%", logo: "🛍️" },
        { name: "Nature's Basket", discount: "20%", logo: "🥬" }
      ]
    },
    {
      category: "Healthcare",
      partners: [
        { name: "Apollo Pharmacy", discount: "15%", logo: "💊" },
        { name: "Medplus", discount: "12%", logo: "🏥" },
        { name: "Practo", discount: "25%", logo: "👨‍⚕️" },
        { name: "PharmEasy", discount: "20%", logo: "💉" }
      ]
    },
    {
      category: "Transportation",
      partners: [
        { name: "Uber", discount: "₹100 credits", logo: "🚗" },
        { name: "Ola", discount: "₹75 credits", logo: "🚕" },
        { name: "Shell Petrol", discount: "₹5/L", logo: "⛽" },
        { name: "HP Petrol", discount: "₹3/L", logo: "⛽" }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Partner Network & Discounts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enjoy exclusive discounts and offers from our extensive network of partner brands. 
            Your membership opens doors to savings across the city.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="space-y-8">
          {partnerCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-r from-orange-50 to-green-50 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.partners.map((partner, idx) => (
                  <Card key={idx} className="p-4 hover:shadow-lg transition-all duration-300 bg-white border-orange-200">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{partner.logo}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{partner.name}</h4>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {partner.discount} OFF
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-16 bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
            How to Use Your Membership
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Show Your Card</h4>
              <p className="text-gray-600">Present your virtual membership card at any partner location or enter the code online.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Enjoy Discounts</h4>
              <p className="text-gray-600">Get instant discounts applied to your bill. No complex procedures or waiting periods.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Save More</h4>
              <p className="text-gray-600">Track your savings through our app and discover new partner offers every month.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-orange-50 border-orange-200">
            <h3 className="text-3xl font-bold text-orange-600">500+</h3>
            <p className="text-gray-600">Partner Brands</p>
          </Card>
          <Card className="p-6 text-center bg-green-50 border-green-200">
            <h3 className="text-3xl font-bold text-green-600">₹15,000</h3>
            <p className="text-gray-600">Avg. Annual Savings</p>
          </Card>
          <Card className="p-6 text-center bg-purple-50 border-purple-200">
            <h3 className="text-3xl font-bold text-purple-600">2</h3>
            <p className="text-gray-600">Cities Covered</p>
          </Card>
          <Card className="p-6 text-center bg-blue-50 border-blue-200">
            <h3 className="text-3xl font-bold text-blue-600">24/7</h3>
            <p className="text-gray-600">Support Available</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PartnerDiscounts;
