import React, { useState } from 'react';
import { BorderRadiusValues, CodeFormatType } from '../../types/BorderRadius';
import CodeBlock from '../ui/CodeBlock';
import { generateCode } from '../../utils/border-radius';
import { cn } from '../../utils/cn';

interface CodeOutputProps {
  radiusValues: BorderRadiusValues;
}

const CodeOutput: React.FC<CodeOutputProps> = ({ radiusValues }) => {
  const [activeFormat, setActiveFormat] = useState<CodeFormatType>('css');
  
  const formatOptions: { value: CodeFormatType; label: string }[] = [
    { value: 'css', label: 'CSS' },
    { value: 'tailwind', label: 'Tailwind' },
    { value: 'scss', label: 'SCSS' },
  ];
  
  const code = generateCode(radiusValues, activeFormat);
  
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Code Output</h3>
        
        <div className="flex rounded-md overflow-hidden border border-gray-200 dark:border-gray-700">
          {formatOptions.map((format) => (
            <button
              key={format.value}
              onClick={() => setActiveFormat(format.value)}
              className={cn(
                "px-3 py-1.5 text-xs font-medium",
                activeFormat === format.value
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
              )}
            >
              {format.label}
            </button>
          ))}
        </div>
      </div>
      
      <CodeBlock
        code={code}
        language={activeFormat}
        className="mt-2"
      />
    </div>
  );
};

export default CodeOutput;