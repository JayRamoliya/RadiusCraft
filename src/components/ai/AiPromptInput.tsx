import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';
import Button from '../ui/Button';

interface AiPromptInputProps {
  onSubmit: (prompt: string) => void;
  isLoading?: boolean;
}

const AiPromptInput: React.FC<AiPromptInputProps> = ({ 
  onSubmit,
  isLoading = false
}) => {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt.trim());
    }
  };

  const examplePrompts = [
    "Design a soft, bubbly shape",
    "Create an iOS style button",
    "Make a professional card shape",
    "Design a playful, organic blob"
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center mb-4">
        <Sparkles className="h-5 w-5 text-primary-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">AI Shape Generator</h2>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
        Describe the shape you want, and our AI will generate optimized border radius values.
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Create a soft, bubbly shape with organic flow..."
            className="w-full h-24 px-4 py-3 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          
          <div className="absolute right-3 bottom-3">
            <Button 
              type="submit" 
              disabled={!prompt.trim() || isLoading}
              isLoading={isLoading}
            >
              {!isLoading && <Send className="h-4 w-4 mr-1" />}
              Generate
            </Button>
          </div>
        </div>
      </form>
      
      <div className="mt-6">
        <h3 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Try an example:</h3>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiPromptInput;