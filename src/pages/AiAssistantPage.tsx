import React, { useState } from 'react';
import AiPromptInput from '../components/ai/AiPromptInput';
import ShapePreview from '../components/editor/ShapePreview';
import CodeOutput from '../components/editor/CodeOutput';
import Button from '../components/ui/Button';
import { Check, RefreshCw } from 'lucide-react';
import { BorderRadiusValues } from '../types/BorderRadius';

const AiAssistantPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedShapes, setGeneratedShapes] = useState<BorderRadiusValues[]>([]);
  const [selectedShape, setSelectedShape] = useState<BorderRadiusValues | null>(null);
  const [promptHistory, setPromptHistory] = useState<string[]>([]);

  // Simulate AI generation with some random values
  const handleGenerateShape = (prompt: string) => {
    setIsLoading(true);
    setPromptHistory(prev => [prompt, ...prev.slice(0, 4)]);
    
    // Simulate API call delay
    setTimeout(() => {
      const shapes: BorderRadiusValues[] = Array(3).fill(null).map(() => ({
        topLeft: { 
          horizontal: Math.floor(Math.random() * 70) + 5, 
          vertical: Math.floor(Math.random() * 70) + 5 
        },
        topRight: { 
          horizontal: Math.floor(Math.random() * 70) + 5, 
          vertical: Math.floor(Math.random() * 70) + 5 
        },
        bottomRight: { 
          horizontal: Math.floor(Math.random() * 70) + 5, 
          vertical: Math.floor(Math.random() * 70) + 5 
        },
        bottomLeft: { 
          horizontal: Math.floor(Math.random() * 70) + 5, 
          vertical: Math.floor(Math.random() * 70) + 5 
        },
      }));
      
      setGeneratedShapes(shapes);
      setSelectedShape(shapes[0]);
      setIsLoading(false);
    }, 1500);
  };

  const handleSelectShape = (shape: BorderRadiusValues) => {
    setSelectedShape(shape);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Shape Assistant</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Generate beautiful border radius shapes using natural language prompts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <AiPromptInput onSubmit={handleGenerateShape} isLoading={isLoading} />
            
            {promptHistory.length > 0 && (
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Prompt History</h3>
                <ul className="space-y-2">
                  {promptHistory.map((prompt, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleGenerateShape(prompt)}
                        className="text-sm text-left w-full px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {prompt}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="lg:col-span-2">
            {isLoading ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-10 flex flex-col items-center justify-center h-96">
                <div className="h-16 w-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600 dark:text-gray-300">Generating beautiful shapes...</p>
              </div>
            ) : generatedShapes.length > 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Generated Shapes</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {generatedShapes.map((shape, index) => (
                    <button
                      key={index}
                      onClick={() => handleSelectShape(shape)}
                      className={`relative p-4 border rounded-lg transition-all ${
                        selectedShape === shape 
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                          : 'border-gray-200 dark:border-gray-700 hover:border-primary-300'
                      }`}
                    >
                      <div className="aspect-square w-full mb-2 flex items-center justify-center">
                        <div
                          className="w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400"
                          style={{ 
                            borderRadius: `${shape.topLeft.horizontal}px ${shape.topRight.horizontal}px ${shape.bottomRight.horizontal}px ${shape.bottomLeft.horizontal}px / ${shape.topLeft.vertical}px ${shape.topRight.vertical}px ${shape.bottomRight.vertical}px ${shape.bottomLeft.vertical}px` 
                          }}
                        ></div>
                      </div>
                      <div className="text-xs text-center text-gray-600 dark:text-gray-400">
                        Shape {index + 1}
                      </div>
                      
                      {selectedShape === shape && (
                        <div className="absolute top-2 right-2 text-white bg-primary-500 rounded-full p-1">
                          <Check className="h-3 w-3" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {selectedShape && (
                  <div className="space-y-6">
                    <div>
                      <ShapePreview radiusValues={selectedShape} width={300} height={200} />
                    </div>
                    
                    <div>
                      <CodeOutput radiusValues={selectedShape} />
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      <Button 
                        variant="primary"
                        onClick={() => alert('Shape would be applied to the editor')}
                      >
                        Apply to Editor
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => handleGenerateShape(promptHistory[0] || 'Generate a new shape')}
                      >
                        <RefreshCw className="h-4 w-4 mr-2" />
                        Generate More
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-10 flex flex-col items-center justify-center h-96 text-center">
                <div className="p-4 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
                  <RefreshCw className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Shapes Generated Yet</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-md mb-6">
                  Enter a prompt to describe the shape you want, and our AI will generate beautiful border radius values for you.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistantPage;