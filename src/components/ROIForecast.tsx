
import React from 'react';
import { Card } from "@/components/ui/card";

const ROIForecast = () => {
  const roiData = [
    {
      year: "Year 1",
      revenue: "₹2.5 Crores",
      customers: "1,500",
      growth: "Base Year",
      profit: "₹45 Lakhs",
      margin: "18%"
    },
    {
      year: "Year 2", 
      revenue: "₹6.8 Crores",
      customers: "4,200",
      growth: "180%",
      profit: "₹1.5 Crores",
      margin: "22%"
    },
    {
      year: "Year 3",
      revenue: "₹15.2 Crores", 
      customers: "9,500",
      growth: "125%",
      profit: "₹4.2 Crores",
      margin: "28%"
    }
  ];

  const metrics = [
    { label: "Customer Acquisition Cost", value: "₹350", trend: "↓ 15%" },
    { label: "Customer Lifetime Value", value: "₹18,500", trend: "↑ 25%" },
    { label: "Monthly Churn Rate", value: "3.2%", trend: "↓ 40%" },
    { label: "Average Order Value", value: "₹2,850", trend: "↑ 30%" }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            3-Year ROI Forecast
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Projected growth and returns based on market analysis and current subscription trends 
            in the homemade food delivery sector.
          </p>
        </div>

        {/* ROI Timeline */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {roiData.map((data, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-orange-50 to-green-50 border-l-4 border-orange-500 hover:shadow-xl transition-all duration-300">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{data.year}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-orange-600">{data.revenue}</p>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-green-600">{data.profit}</p>
                    <p className="text-sm text-gray-600">Net Profit ({data.margin})</p>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">{data.customers}</p>
                    <p className="text-sm text-gray-600">Active Customers</p>
                  </div>
                  {data.growth !== "Base Year" && (
                    <div className="pt-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                        {data.growth} Growth
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="bg-gradient-to-r from-orange-100 to-green-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Key Performance Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-4 bg-white/80 backdrop-blur-sm text-center">
                <p className="text-lg font-bold text-gray-800">{metric.value}</p>
                <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  metric.trend.includes('↑') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {metric.trend}
                </span>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Breakdown */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Initial Investment Required</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Technology & Platform</span>
                <span className="font-semibold">₹25 Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Kitchen Setup & Equipment</span>
                <span className="font-semibold">₹40 Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fleet</span>
                <span className="font-semibold">₹20 Lakhs</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Marketing & Operations</span>
                <span className="font-semibold">₹15 Lakhs</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total Investment</span>
                <span className="text-orange-600">₹1 Crore</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Expected Returns</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Break-even Period</span>
                <span className="font-semibold">18 months</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">3-Year Total Revenue</span>
                <span className="font-semibold">₹24.5 Crores</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">3-Year Net Profit</span>
                <span className="font-semibold">₹6.15 Crores</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Annual ROI</span>
                <span className="font-semibold">205%</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total ROI (3 Years)</span>
                <span className="text-green-600">615%</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROIForecast;
