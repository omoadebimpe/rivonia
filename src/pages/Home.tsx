import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Heart, 
  Microscope, 
  Monitor, 
  Stethoscope,
  Shield,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star
} from 'lucide-react';

const Home = () => {
  const quickServices = [
    {
      icon: Monitor,
      title: "Sleep Studies",
      description: "Full sleep laboratory for diagnosing and monitoring sleep disorders",
      image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Heart,
      title: "Digital Ultrasound",
      description: "Experience live 2D, 3D, and 4D imaging with premium technology",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Microscope,
      title: "Laboratory Services",
      description: "Well-equipped lab with experts handling comprehensive testing",
      image: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      icon: Stethoscope,
      title: "Therapy Services",
      description: "Quality care from qualified medical experts",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const stats = [
    { icon: Users, number: "15,000+", label: "Happy Patients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Shield, number: "5★", label: "Google Rating" },
    { icon: Clock, number: "NHIS", label: "Accredited" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Improving Life
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Together</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                Rivonia Diagnostics and Sleep Centre provides world-class medical 
                diagnostic services with compassionate care in Ibadan and its environs.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">5.0 Google</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <Shield size={16} className="text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">NHIS Accredited</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-md">
                  <Award size={16} className="text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">15+ Years Trusted</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/2349161791708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Book a Test
                  <ArrowRight size={20} className="ml-2" />
                </a>
                
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Medical professionals at work"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Star size={24} className="text-yellow-500 fill-current" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5.0★</p>
                    <p className="text-sm text-gray-600">Google Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} className="text-blue-600" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</p>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Rivonia Diagnostics & Sleep Centre
              </h2>
              
              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg px-3 py-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">5.0 on Google</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg px-3 py-2">
                  <Shield size={14} className="text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">NHIS Accredited</span>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg px-3 py-2">
                  <Users size={14} className="text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">15,000+ Patients</span>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Rivonia Diagnostics and Sleep Centre is a privately owned indigenous medical 
                facility incorporated in the Oyo State capital, Ibadan. The facility is 
                registered with the Oyo state ministry of health and we are NHIS accredited.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We have a seasoned and capable team of competent and well-versed experts in 
                their respective medical specialties. The facility was established to provide 
                medical communities with the essential resources needed to deliver effective 
                healthcare in Ibadan and its environs.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn more about us
                <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical facility"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a quick response via our WhatsApp contact with comprehensive 
              diagnostic services tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                        <IconComponent size={24} className="text-blue-600" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              See All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Home Care Service */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Home care service"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Home Care Service
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Rivonia Diagnostics and Sleep Center Home Care Services has been specifically 
                designed to address the needs of the elderly and chronically ill, who often 
                require compassionate health care at home. We help to create a safe environment 
                for your loved ones while you're at work.
              </p>
              <a
                href="https://wa.me/2349161791708"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Quick Response Contact
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-gray-300">Get in touch for appointments and inquiries</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Email</h3>
              <p className="text-gray-300">rivoniahealth@gmail.com</p>
              <p className="text-gray-300">rivoniadiagnostics@gmail.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Phone</h3>
              <p className="text-gray-300">+234-916-1791-708</p>
              <p className="text-gray-300">+234-916-1836-523</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Address</h3>
              <p className="text-gray-300">Plot 13 Block 53 Oluyole Estate Extension</p>
              <p className="text-gray-300">Ibadan, Oyo State</p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://wa.me/2349161791708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact us on WhatsApp
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Located in the heart of Ibadan</p>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4096.434812870944!2d3.8349445614817235!3d7.3656368678730155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398da26c4bc949%3A0x582f0a67b21c5422!2sRivonia%20Diagnostics%20and%20Sleep%20Centre!5e0!3m2!1sen!2sng!4v1756340760757!5m2!1sen!2sng"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rivonia Diagnostics and Sleep Centre Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;