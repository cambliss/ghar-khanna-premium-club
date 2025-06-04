
import React from 'react';
import Hero from '../components/Hero';
import TargetAudience from '../components/TargetAudience';
import SubscriptionPlans from '../components/SubscriptionPlans';
import ROIForecast from '../components/ROIForecast';
import PremiumMembership from '../components/PremiumMembership';
import PartnerDiscounts from '../components/PartnerDiscounts';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-green-50">
      <Hero />
      <TargetAudience />
      <SubscriptionPlans />
      <ROIForecast />
      <PremiumMembership />
      <PartnerDiscounts />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
