import React from 'react';
import { 
  ExternalLink, 
  BookOpen, 
  Heart, 
  Shield, 
  Globe,
  FileText,
  Users,
  AlertCircle,
  ArrowRight,
  Download
} from 'lucide-react';

const Resources = () => {
  const healthResources = [
    {
      icon: BookOpen,
      title: "Medical Job Concepts",
      description: "Comprehensive medical education and career development resources for healthcare professionals.",
      url: "http://www.medjobconcepts.com/",
      category: "Education",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: AlertCircle,
      title: "CDC Travel Notices - COVID-19 Nigeria",
      description: "Latest travel health notices and COVID-19 updates for Nigeria from the Centers for Disease Control.",
      url: "https://wwwnc.cdc.gov/travel/notices/covid-1/coronavirus-nigeria",
      category: "Health Alerts",
      color: "from-red-600 to-pink-600"
    },
    {
      icon: Heart,
      title: "University College Hospital Ibadan",
      description: "Premier teaching hospital in Ibadan providing specialized medical care and research.",
      url: "https://uch-ibadan.org.ng/",
      category: "Healthcare",
      color: "from-green-600 to-teal-600"
    }
  ];

  const healthTopics = [
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Understanding heart health, prevention strategies, and when to seek cardiac testing.",
      topics: ["Heart Disease Prevention", "ECG Interpretation", "Cholesterol Management", "Blood Pressure Control"]
    },
    {
      icon: Shield,
      title: "Sleep Disorders",
      description: "Comprehensive information about sleep health and common sleep disorders.",
      topics: ["Sleep Apnea", "Insomnia Treatment", "Sleep Hygiene", "CPAP Therapy"]
    },
    {
      icon: FileText,
      title: "Laboratory Tests",
      description: "Understanding common lab tests and what your results mean.",
      topics: ["Blood Work Basics", "Urine Analysis", "Hormone Testing", "Infection Markers"]
    },
    {
      icon: Users,
      title: "Women's Health",
      description: "Specialized health information for women's unique healthcare needs.",
      topics: ["Prenatal Care", "Ultrasound Scans", "Reproductive Health", "Preventive Screening"]
    }
  ];

  const downloadableResources = [
    {
      title: "Sleep Questionnaire",
      description: "Comprehensive sleep assessment form to help diagnose sleep disorders.",
      type: "PDF Form",
      size: "2.3 MB"
    },
    {
      title: "Pre-Test Instructions",
      description: "Important preparation guidelines for various diagnostic tests.",
      type: "PDF Guide",
      size: "1.8 MB"
    },
    {
      title: "Health Screening Checklist",
      description: "Age-appropriate health screening recommendations.",
      type: "PDF Checklist",
      size: "1.2 MB"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Health 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600"> Resources</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Helpful health information, educational materials, and trusted medical resources
            </p>
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted Medical Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Curated links to reputable healthcare organizations and educational resources
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {healthResources.map((resource, index) => {
              const IconComponent = resource.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:-translate-y-2"
                >
                  <div className={`h-2 bg-gradient-to-r ${resource.color}`}></div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-xl flex items-center justify-center mr-4`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div>
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full mb-2">
                          {resource.category}
                        </span>
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {resource.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {resource.description}
                    </p>
                    
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
                    >
                      Visit Resource
                      <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Topics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Health Education Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about important health topics and understand your diagnostic tests better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {healthTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl flex items-center justify-center mr-4">
                      <IconComponent size={32} className="text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {topic.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {topic.description}
                  </p>
                  
                  <div className="space-y-3">
                    {topic.topics.map((subtopic, subtopicIndex) => (
                      <div key={subtopicIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                        <span className="text-gray-700">{subtopic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Downloadable Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Forms, guides, and educational materials to help you prepare for your visit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {downloadableResources.map((resource, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                  <Download size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-gray-500">{resource.type}</span>
                  <span className="text-sm text-gray-500">{resource.size}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Download size={20} />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border-l-4 border-red-500">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                <AlertCircle size={32} className="text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Emergency Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">When to Seek Emergency Care</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Chest pain or difficulty breathing</li>
                  <li>• Severe allergic reactions</li>
                  <li>• Loss of consciousness</li>
                  <li>• Severe bleeding or trauma</li>
                  <li>• Signs of stroke or heart attack</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contacts</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                      <AlertCircle size={16} className="text-red-600" />
                    </div>
                    <span className="text-gray-600">National Emergency: 199</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Heart size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-600">Rivonia Emergency: +234-708-7855-848</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need More Information?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our medical experts are available to answer your questions and provide 
            personalized health guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2349161791708"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact via WhatsApp
              <ArrowRight size={20} className="ml-2" />
            </a>
            <a
              href="tel:+2349161791708"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Call Us Now
              <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;