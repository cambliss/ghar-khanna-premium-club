
import React from 'react';
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, TCS Hyderabad",
      content: "Ghar se Khanna has been a lifesaver! The food tastes exactly like my mom's cooking. The monthly plan with premium membership has saved me over ₹8,000 in discounts at restaurants and cafés.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Rohit Verma",
      role: "MBA Student, IIM Delhi",
      content: "As a student, the affordable pricing and authentic taste make this perfect. The premium card discounts help me save on everything from books to movies. Highly recommend!",
      rating: 5,
      avatar: "👨‍🎓"
    },
    {
      name: "Dr. Anjali Gupta",
      role: "Physician, AIIMS Delhi",
      content: "For hospital staff with irregular schedules, this service is invaluable. Fresh, healthy meals delivered on time. The healthcare discounts through membership are an added bonus.",
      rating: 5,
      avatar: "👩‍⚕️"
    },
    {
      name: "Rajesh Kumar",
      role: "Corporate Manager, Infosys",
      content: "Our company tied up with Ghar se Khanna for employee meals. The quality is consistent, delivery is punctual, and employees love the variety. Cost-effective solution for our office.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Sunita Devi",
      role: "Senior Citizen, Gurgaon",
      content: "At my age, cooking daily was becoming difficult. These meals remind me of traditional recipes and the delivery team is so respectful. The healthcare discounts help with my medicines too.",
      rating: 5,
      avatar: "👵"
    },
    {
      name: "Vikash Singh",
      role: "Startup Founder",
      content: "When building my startup, I had no time for cooking. This service kept me well-fed with nutritious food. The premium membership paid for itself with the shopping and travel discounts.",
      rating: 5,
      avatar: "👨‍💻"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from real people who've made Ghar se Khanna part of their daily lives. 
            Join thousands of satisfied customers across Delhi and Hyderabad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-orange-200">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{testimonial.avatar}</div>
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </Card>
          ))}
        </div>

        {/* Customer Stats */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">4.8/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">5,000+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">50,000+</h3>
              <p className="text-gray-600">Meals Delivered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">98%</h3>
              <p className="text-gray-600">Customer Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
