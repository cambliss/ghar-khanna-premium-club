
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-orange-100 via-orange-50 to-green-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                Ghar se
                <span className="text-orange-600 block">Khanna</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium">
                By Cambliss
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Authentic homemade meals delivered fresh to your doorstep. 
              From daily tiffins to corporate catering - we bring the warmth 
              of home-cooked food to busy professionals, students, and families 
              across Delhi & Hyderabad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Start Your Subscription
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-200"
              >
                View Menu
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="p-4 text-center bg-white/80 backdrop-blur-sm border-orange-200">
                <h3 className="text-2xl font-bold text-orange-600">500+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </Card>
              <Card className="p-4 text-center bg-white/80 backdrop-blur-sm border-green-200">
                <h3 className="text-2xl font-bold text-green-600">2</h3>
                <p className="text-gray-600">Cities Served</p>
              </Card>
              <Card className="p-4 text-center bg-white/80 backdrop-blur-sm border-orange-200">
                <h3 className="text-2xl font-bold text-orange-600">99%</h3>
                <p className="text-gray-600">On-time Delivery</p>
              </Card>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-200 to-green-200 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-full h-64 bg-gradient-to-br from-orange-100 to-green-100 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🍱</span>
                    </div>
                    <p className="text-gray-600 font-medium">Fresh Homemade Meals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
