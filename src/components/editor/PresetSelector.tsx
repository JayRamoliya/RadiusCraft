import React from 'react';
import { presets } from '../../utils/presets';
import { BorderRadiusValues } from '../../types/BorderRadius';
import { cn } from '../../utils/cn';

interface PresetSelectorProps {
  onSelectPreset: (preset: BorderRadiusValues) => void;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({ onSelectPreset }) => {
  const categories = Array.from(
    new Set(presets.map((preset) => preset.category))
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Presets</h2>
      
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 capitalize mb-3">
              {category}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {presets
                .filter((preset) => preset.category === category)
                .map((preset) => {
                  const { topLeft, topRight, bottomRight, bottomLeft } = preset.values;
                  const borderRadiusStyle = `${topLeft.horizontal}px ${topRight.horizontal}px ${bottomRight.horizontal}px ${bottomLeft.horizontal}px / ${topLeft.vertical}px ${topRight.vertical}px ${bottomRight.vertical}px ${bottomLeft.vertical}px`;
                  
                  return (
                    <button
                      key={preset.id}
                      onClick={() => onSelectPreset(preset.values)}
                      className={cn(
                        "group flex flex-col items-center p-3 rounded-lg border border-gray-200 dark:border-gray-700",
                        "hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-sm transition-all"
                      )}
                    >
                      <div
                        className="w-16 h-16 mb-2 bg-gradient-to-br from-primary-400 to-accent-400"
                        style={{ borderRadius: borderRadiusStyle }}
                      />
                      <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                        {preset.name}
                      </span>
                    </button>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresetSelector;