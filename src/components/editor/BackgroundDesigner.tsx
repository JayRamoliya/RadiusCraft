import React, { useState } from 'react';
import { Palette, Image as ImageIcon, BadgeCent as Gradient } from 'lucide-react';
import Button from '../ui/Button';
import { cn } from '../../utils/cn';

interface BackgroundDesignerProps {
  onBackgroundChange: (background: string) => void;
}

const BackgroundDesigner: React.FC<BackgroundDesignerProps> = ({ onBackgroundChange }) => {
  const [activeTab, setActiveTab] = useState<'solid' | 'gradient' | 'image'>('solid');
  const [color, setColor] = useState('#8B5CF6');
  const [gradientStart, setGradientStart] = useState('#8B5CF6');
  const [gradientEnd, setGradientEnd] = useState('#EC4899');
  const [gradientAngle, setGradientAngle] = useState(135);
  const [imageUrl, setImageUrl] = useState('');

  const handleSolidColorChange = (newColor: string) => {
    setColor(newColor);
    onBackgroundChange(newColor);
  };

  const handleGradientChange = () => {
    const gradient = `linear-gradient(${gradientAngle}deg, ${gradientStart}, ${gradientEnd})`;
    onBackgroundChange(gradient);
  };

  const handleImageChange = (url: string) => {
    setImageUrl(url);
    onBackgroundChange(`url(${url})`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">Background</h3>
      
      <div className="flex space-x-2 mb-4">
        <Button
          size="sm"
          variant={activeTab === 'solid' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('solid')}
        >
          <Palette className="w-4 h-4 mr-1" />
          Solid
        </Button>
        <Button
          size="sm"
          variant={activeTab === 'gradient' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('gradient')}
        >
          <Gradient className="w-4 h-4 mr-1" />
          Gradient
        </Button>
        <Button
          size="sm"
          variant={activeTab === 'image' ? 'primary' : 'outline'}
          onClick={() => setActiveTab('image')}
        >
          <ImageIcon className="w-4 h-4 mr-1" />
          Image
        </Button>
      </div>

      <div className="space-y-4">
        {activeTab === 'solid' && (
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
              Color
            </label>
            <input
              type="color"
              value={color}
              onChange={(e) => handleSolidColorChange(e.target.value)}
              className="w-full h-10 rounded-md cursor-pointer"
            />
          </div>
        )}

        {activeTab === 'gradient' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                Start Color
              </label>
              <input
                type="color"
                value={gradientStart}
                onChange={(e) => {
                  setGradientStart(e.target.value);
                  handleGradientChange();
                }}
                className="w-full h-10 rounded-md cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                End Color
              </label>
              <input
                type="color"
                value={gradientEnd}
                onChange={(e) => {
                  setGradientEnd(e.target.value);
                  handleGradientChange();
                }}
                className="w-full h-10 rounded-md cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                Angle: {gradientAngle}°
              </label>
              <input
                type="range"
                min="0"
                max="360"
                value={gradientAngle}
                onChange={(e) => {
                  setGradientAngle(parseInt(e.target.value));
                  handleGradientChange();
                }}
                className="w-full"
              />
            </div>
          </div>
        )}

        {activeTab === 'image' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
                Image URL
              </label>
              <input
                type="text"
                value={imageUrl}
                onChange={(e) => handleImageChange(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className={cn(
                  "w-full px-3 py-2 rounded-md border",
                  "focus:outline-none focus:ring-2 focus:ring-primary-500",
                  "dark:bg-gray-900 dark:border-gray-700"
                )}
              />
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Tip: Use a high-resolution image for best results
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundDesigner;