import React from 'react';
import RadiusEditor from '../components/editor/RadiusEditor';
import PresetSelector from '../components/editor/PresetSelector';
import { defaultBorderRadiusValues } from '../utils/border-radius';
import { BorderRadiusValues } from '../types/BorderRadius';

const EditorPage: React.FC = () => {
  const handleSelectPreset = (preset: BorderRadiusValues) => {
    // This would update the RadiusEditor component with the selected preset
    console.log('Selected preset:', preset);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Border Radius Editor</h1>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Design beautiful shapes with precise control over border radius values.
            </p>
          </div>
        </div>
        
        <div className="mb-10">
          <RadiusEditor />
        </div>
        
        <div>
          <PresetSelector onSelectPreset={handleSelectPreset} />
        </div>
      </div>
    </div>
  );
};

export default EditorPage;