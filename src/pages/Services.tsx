import React from 'react';
import { 
  Monitor, 
  Heart, 
  Microscope, 
  Camera,
  Stethoscope,
  Brain,
  Activity,
  Zap,
  Truck,
  Home,
  Pill,
  Droplets,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Monitor,
      title: "Sleep Study",
      description: "Rivonia Diagnostics has established a full sleep laboratory at Oluyole Extension, Ibadan, where the causes of sleep disorders are diagnosed and monitored",
      image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Comprehensive Sleep Analysis", "Sleep Disorder Diagnosis", "CPAP Machine Sales", "Sleep Questionnaire Available"]
    },
    {
      icon: Heart,
      title: "Digital Ultrasound",
      description: "Experience live image scan on 2D, 3D, and 4D image. Our 3/4D Ultrasound machine is premium technology commonly used in Obstetrics to provide real-time dimensional images for the Fetus.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["2D/3D/4D Imaging", "Obstetric Ultrasound", "High-end Multi-Slice Technology", "Detailed Analysis & Accurate Results"]
    },
    {
      icon: Activity,
      title: "Echocardiography (ECHO)",
      description: "Our program checks how your heart's chambers and valves are pumping blood through your heart.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Heart Chamber Analysis", "Valve Function Assessment", "Blood Flow Evaluation", "Cardiac Health Monitoring"]
    },
    {
      icon: Stethoscope,
      title: "Therapy Services",
      description: "Quality care from qualified experts providing comprehensive therapeutic interventions.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800",
      features: ["Physical Therapy", "Rehabilitation Services", "Pain Management", "Recovery Programs"]
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "Electrocardiography (ECG)",
      description: "Test that can be used to check your heart's rhythm and electrical activity."
    },
    {
      icon: Brain,
      title: "Electroencephalogram (EEG)",
      description: "EEG measures electrical activity in the brain using electrodes attached to the scalp. Helps diagnose epilepsy, sleep disorders, brain tumours among many others."
    },
    {
      icon: Microscope,
      title: "Clinical Chemistry",
      description: "Several simple chemical tests are used to detect and quantify different compounds in blood and urine."
    },
    {
      icon: Droplets,
      title: "Haematology",
      description: "Routine exam used to detect anemia, clotting problems, blood cancers, immune system disorders and infections."
    },
    {
      icon: Microscope,
      title: "Laboratory Investigation",
      description: "Comprehensive blood work and lab tests with fast turnaround times."
    },
    {
      icon: Pill,
      title: "Pharmacy Services",
      description: "Full-service pharmacy with prescription medications and health products."
    },
    {
      icon: Droplets,
      title: "Blood Bank Services",
      description: "Safe blood collection, testing, and storage services."
    },
    {
      icon: Microscope,
      title: "Microbiology",
      description: "Methods used for detection, identification or enumeration of microorganisms."
    },
    {
      icon: Camera,
      title: "X-Ray Services",
      description: "Support your diagnostics with high-quality X-ray imaging."
    },
    {
      icon: Activity,
      title: "Holter ECG",
      description: "24-hour continuous heart monitoring for comprehensive cardiac assessment."
    }
  ];

  const specialServices = [
    {
      icon: Home,
      title: "Home Care Service",
      description: "Rivonia Diagnostics and Sleep Center Home Care Services has been specifically designed to address the needs of the elderly and chronically ill, who often require compassionate health care at home.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Truck,
      title: "Ambulance Services",
      description: "We provide well equipped commercial ambulance services with Paramedics that care about patients' well-being when transporting and moving critically ill patients to the closest and most appropriate hospital.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              The results you can trust - Comprehensive diagnostic services with world-class technology
            </p>
            <a
              href="https://wa.me/2349161791708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book via WhatsApp
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our flagship diagnostic services powered by state-of-the-art technology
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive diagnostic and therapeutic services for all your healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                    <IconComponent size={32} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
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

      {/* Special Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extended care services for comprehensive patient support
            </p>
          </div>

          <div className="space-y-16">
            {specialServices.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    
                    <a
                      href="https://wa.me/2349161791708"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight size={20} className="ml-2" />
                    </a>
                  </div>
                  
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sleep Questionnaire CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Sleep Study Assessment
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Take our comprehensive sleep questionnaire to help our specialists 
              understand your sleep patterns and recommend appropriate treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Fill Sleep Questionnaire
                <ExternalLink size={20} className="ml-2" />
              </a>
              <a
                href="https://wa.me/2349161791708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Contact for Consultation
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Book Your Test?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get quick response and professional service through our WhatsApp contact. 
            Our medical experts are ready to assist you.
          </p>
          <a
            href="https://wa.me/2349161791708"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book via WhatsApp
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;