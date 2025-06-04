
import React from 'react';
import { Card } from "@/components/ui/card";

const TargetAudience = () => {
  const audiences = [
    {
      icon: "💼",
      title: "Office Workers & Business Professionals",
      description: "Corporate employees across Delhi & Hyderabad who need reliable, nutritious meals during busy workdays.",
      features: ["Bulk corporate orders", "Scheduled deliveries", "Customizable meal plans"]
    },
    {
      icon: "🎓",
      title: "Students",
      description: "School and college students who miss the taste of home-cooked food while staying away from home.",
      features: ["Affordable pricing", "Hostel-friendly delivery", "Parent-approved nutrition"]
    },
    {
      icon: "🏥",
      title: "Hospitals & Patients",
      description: "Patients requiring healthy, homemade food as an alternative to standard hospital meals.",
      features: ["Diet-specific meals", "Hospital delivery", "Doctor-approved nutrition"]
    },
    {
      icon: "👥",
      title: "Senior Citizens & Families",
      description: "Elderly people and busy families who need convenient access to traditional, healthy meals.",
      features: ["Regular meal schedules", "Familiar recipes", "Family-size portions"]
    },
    {
      icon: "🏢",
      title: "Corporate Partnerships",
      description: "Companies looking to provide quality meal benefits to their employees through our tie-up programs.",
      features: ["Volume discounts", "Employee meal programs", "Office canteen services"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From busy professionals to students and families, we cater to everyone who values 
            the comfort and nutrition of authentic homemade food.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 bg-gradient-to-br from-white to-orange-50">
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{audience.title}</h3>
              <p className="text-gray-600 mb-4">{audience.description}</p>
              <ul className="space-y-2">
                {audience.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-700 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
