import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>Introducing RadiusCraft</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Create Beautiful
            <span className="relative inline-block mx-2">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Border Radius</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-500/20 dark:bg-accent-500/30 rounded-lg -z-10"></span>
            </span>
            Shapes
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Design complex border-radius shapes with intuitive controls, AI-powered suggestions, and instant code export.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/editor">
              <Button size="lg" variant="primary">
                Try It Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/docs">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
          <div className="relative aspect-video overflow-hidden bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-64 h-64 bg-gradient-to-br from-primary-400 via-primary-600 to-accent-500 animate-pulse"
                style={{ 
                  borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  animation: 'pulse 3s infinite'
                }}
              >
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-900 text-xs text-gray-500 dark:text-gray-400 px-2 py-1 rounded-md shadow-sm">
              Preview
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;