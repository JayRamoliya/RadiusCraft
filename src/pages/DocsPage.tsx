import React from 'react';
import CodeBlock from '../components/ui/CodeBlock';

const DocsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Documentation</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">What is Border Radius?</h2>
            <p className="mb-4">
              The <code>border-radius</code> CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-3">Basic Syntax</h3>
              <CodeBlock 
                code="border-radius: 10px;"
                language="css"
              />
              
              <div className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-center">
                <div 
                  className="w-32 h-32 bg-primary-500"
                  style={{ borderRadius: '10px' }}
                ></div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Non-uniform Border Radius</h2>
            <p className="mb-4">
              You can specify different radius values for each corner by using the following syntax:
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-3">Four-value Syntax</h3>
              <CodeBlock 
                code="border-radius: 10px 20px 30px 40px;"
                language="css"
              />
              
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                This sets the top-left, top-right, bottom-right, and bottom-left corners respectively.
              </p>
              
              <div className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-center">
                <div 
                  className="w-32 h-32 bg-primary-500"
                  style={{ borderRadius: '10px 20px 30px 40px' }}
                ></div>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Elliptical Corners</h2>
            <p className="mb-4">
              For even more control, you can create elliptical corners by specifying both the horizontal and vertical radii:
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-medium mb-3">Horizontal and Vertical Radii</h3>
              <CodeBlock 
                code="border-radius: 10px 20px 30px 40px / 40px 30px 20px 10px;"
                language="css"
              />
              
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                The values before the slash set the horizontal radii, while the values after the slash set the vertical radii.
              </p>
              
              <div className="mt-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex justify-center">
                <div 
                  className="w-32 h-32 bg-primary-500"
                  style={{ borderRadius: '10px 20px 30px 40px / 40px 30px 20px 10px' }}
                ></div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Tailwind CSS Equivalents</h2>
            <p className="mb-4">
              Tailwind CSS provides utility classes for border radius, though for complex non-uniform radii, you'll need to use arbitrary values:
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Tailwind Examples</h3>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Basic rounded corners:</p>
                <CodeBlock 
                  code='<div className="rounded-lg"></div>'
                  language="jsx"
                />
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Different radius for each corner:</p>
                <CodeBlock 
                  code='<div className="rounded-tl-lg rounded-tr-xl rounded-br-2xl rounded-bl-md"></div>'
                  language="jsx"
                />
              </div>
              
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Complex non-uniform radius (using arbitrary values):</p>
                <CodeBlock 
                  code='<div className="rounded-[10px_20px_30px_40px/40px_30px_20px_10px]"></div>'
                  language="jsx"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;