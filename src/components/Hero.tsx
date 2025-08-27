import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Improving Life Together
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Trusted diagnostic services in Lagos with accurate results, compassionate care, 
            and a commitment to your well-being.
          </p>

          <a
            href="https://wa.me/2348123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            Book a Test
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;