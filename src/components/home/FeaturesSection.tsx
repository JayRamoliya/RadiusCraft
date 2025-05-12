import React from 'react';
import { Lightbulb, Sliders, Code, PaintBucket } from 'lucide-react';

const features = [
  {
    icon: <Sliders className="h-6 w-6 text-primary-500" />,
    title: 'Interactive Controls',
    description: 'Adjust each corner individually with intuitive sliders for both horizontal and vertical radii.'
  },
  {
    icon: <Code className="h-6 w-6 text-primary-500" />,
    title: 'Export Ready Code',
    description: 'Generate clean, optimized CSS, Tailwind, or SCSS code with a single click.'
  },
  {
    icon: <Lightbulb className="h-6 w-6 text-primary-500" />,
    title: 'AI Suggestions',
    description: 'Get intelligent shape recommendations based on your design needs using AI assistance.'
  },
  {
    icon: <PaintBucket className="h-6 w-6 text-primary-500" />,
    title: 'Preset Library',
    description: 'Access a growing collection of professionally designed border radius presets.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Designers & Developers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to create beautiful, complex shapes with precise control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;