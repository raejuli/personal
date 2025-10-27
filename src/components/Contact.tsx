import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Reach me directly at:</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="mailto:your.email@example.com" className="text-blue-600 hover:text-blue-800 font-semibold">
                📧 davies.tom.raej@gmail.com
              </a>
              <p className="text-blue-600 hover:text-blue-800 font-semibold">
                📱 +44 7538961713
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
