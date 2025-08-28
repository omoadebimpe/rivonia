import React from 'react';
import { 
  Heart, 
  Shield, 
  Users, 
  Award,
  Target,
  Eye,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Respect",
      description: "Improve Individual dignity"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Doing the right thing in honest dealings"
    },
    {
      icon: Users,
      title: "Stewardship",
      description: "Accomplishment of individualism"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "World class clinical outcomes"
    }
  ];

  const achievements = [
    "NHIS Accredited Medical Facility",
    "5-Star Google Rating (200+ Reviews)",
    "Registered with Oyo State Ministry of Health",
    "Featured in Top Medical Centers in Ibadan",
    "Seasoned Team of Medical Experts",
    "Trusted by 15,000+ Patients",
    "State-of-the-art Equipment",
    "Comprehensive Diagnostic Services",
    "24/7 Emergency Support",
    "ISO Quality Standards Compliant"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              About 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Us</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Rivonia Diagnostics & Sleep Center - Your trusted partner in healthcare excellence
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <Target size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our Main Objective is to Provide a State of the art healthcare setting 
                  that will ease the medical bottleneck of our state hospitals in delivering 
                  quality healthcare services to our clients.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Eye size={32} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  To develop a world class test centre to aid the decision making of our 
                  medical practitioners in various specialties like Pathology, Ultrasound 
                  and Sleep Studies respectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are driven by our core values that guide every aspect of our healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                    <IconComponent size={32} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Rivonia Diagnostics & Sleep Centre
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Rivonia Diagnostics and Sleep Centre is a privately owned indigenous medical 
                  facility incorporated in Oyo State capital Ibadan. It was formed to provide 
                  medical communities with the essential resources needed to deliver effective 
                  healthcare in Ibadan and its environs.
                </p>
                <p>
                  We have established ourselves as a trusted healthcare provider with a team of 
                  seasoned and capable medical experts who are competent and well-versed in their 
                  respective medical specialties.
                </p>
                <p>
                  Our facility is registered with the Oyo State Ministry of Health and we are 
                  NHIS accredited, ensuring that we meet the highest standards of healthcare 
                  delivery and patient safety.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Medical facility"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Achievement Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">15+</p>
                    <p className="text-sm text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized for excellence in healthcare delivery and patient satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle size={20} className="text-green-600" />
                </div>
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience World-Class Healthcare?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied patients who trust Rivonia Diagnostics 
            for their healthcare needs.
          </p>
          <a
            href="https://wa.me/2349161791708"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Test Today
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;