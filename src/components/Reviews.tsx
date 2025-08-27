import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      text: "The environment was very conducive and the staff that attended to me were courteous and gave me a top notch treatment. They are good at their game and I will recommend your center to anyone.",
      author: "Eghonghon Solace"
    },
    {
      text: "Amazing service, polite staff, great environment. I highly recommend.",
      author: "David Obada"
    },
    {
      text: "Lovely reception, customer service on point, no unnecessary delay, and wonderful service.",
      author: "Adepoju Omotola"
    },
    {
      text: "I recently visited Rivonia Diagnostics for a series of tests, and I must say I was thoroughly impressed with the experience. From the moment I walked in, the staff was incredibly welcoming and professional, putting me at ease during what could have been a stressful time.",
      author: "Hamzat Titilayo"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            5 Stars on Google – Here's What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                "{review.text}"
              </p>
              
              <p className="font-semibold text-gray-900">
                – {review.author}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Rivonia+Diagnostics"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            <span>Read More Reviews on Google</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;