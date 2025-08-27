import React from 'react';
import { 
  Heart, 
  Camera, 
  Monitor, 
  Microscope, 
  Truck
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "ECG",
      description: "Accurate heart monitoring with advanced electrocardiogram testing."
    },
    {
      icon: Camera,
      title: "Radiology",
      description: "High-quality imaging services for precise diagnosis."
    },
    {
      icon: Monitor,
      title: "Ultrasound",
      description: "Safe and effective imaging for various medical needs."
    },
    {
      icon: Microscope,
      title: "Laboratory Investigations",
      description: "Comprehensive blood work and lab tests with fast turnaround times."
    },
    {
      icon: Truck,
      title: "Ambulance Services",
      description: "Reliable and responsive medical transport when it matters most."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div
                key={index}
                className="text-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent size={32} className="text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;