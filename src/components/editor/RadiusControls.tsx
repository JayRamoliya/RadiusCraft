import React from 'react';
import { CornerKey, BorderRadiusValues, DirectionKey } from '../../types/BorderRadius';
import Slider from '../ui/Slider';
import Button from '../ui/Button';
import { RefreshCw } from 'lucide-react';

interface RadiusControlsProps {
  radiusValues: BorderRadiusValues;
  onCornerChange: (corner: CornerKey, direction: DirectionKey, value: number) => void;
  onReset: () => void;
}

const RadiusControls: React.FC<RadiusControlsProps> = ({
  radiusValues,
  onCornerChange,
  onReset,
}) => {
  const cornersMap: { key: CornerKey; label: string }[] = [
    { key: 'topLeft', label: 'Top Left' },
    { key: 'topRight', label: 'Top Right' },
    { key: 'bottomRight', label: 'Bottom Right' },
    { key: 'bottomLeft', label: 'Bottom Left' },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">Corner Radius</h3>
        <Button 
          variant="ghost"
          size="sm"
          onClick={onReset}
          className="text-xs"
        >
          <RefreshCw className="w-3 h-3 mr-1" />
          Reset All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cornersMap.map(({ key, label }) => (
          <div key={key} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
            <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">{label}</h4>
            
            <div className="space-y-6">
              <Slider
                min={0}
                max={100}
                value={radiusValues[key].horizontal}
                onChange={(value) => onCornerChange(key, 'horizontal', value)}
                label="Horizontal"
              />
              
              <Slider
                min={0}
                max={100}
                value={radiusValues[key].vertical}
                onChange={(value) => onCornerChange(key, 'vertical', value)}
                label="Vertical"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadiusControls;