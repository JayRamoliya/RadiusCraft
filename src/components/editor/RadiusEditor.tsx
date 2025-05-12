import React, { useState, useEffect } from 'react';
import { CornerKey, BorderRadiusValues, DirectionKey } from '../../types/BorderRadius';
import Slider from '../ui/Slider';
import ShapePreview from './ShapePreview';
import RadiusControls from './RadiusControls';
import CodeOutput from './CodeOutput';
import { defaultBorderRadiusValues } from '../../utils/border-radius';
import { generateSVG, generateReactComponent } from '../../utils/export';
import Button from '../ui/Button';
import { ArrowUpRight, Download, Copy } from 'lucide-react';

const RadiusEditor: React.FC = () => {
  const [radiusValues, setRadiusValues] = useState<BorderRadiusValues>(defaultBorderRadiusValues);
  const [previewSize, setPreviewSize] = useState({ width: 300, height: 200 });

  const handleCornerChange = (corner: CornerKey, direction: DirectionKey, value: number) => {
    setRadiusValues((prev) => ({
      ...prev,
      [corner]: {
        ...prev[corner],
        [direction]: value,
      },
    }));
  };

  const applyPreset = (preset: BorderRadiusValues) => {
    setRadiusValues(preset);
  };

  const resetToDefault = () => {
    setRadiusValues(defaultBorderRadiusValues);
  };

  const handleSizeChange = (dimension: 'width' | 'height', value: number) => {
    setPreviewSize((prev) => ({
      ...prev,
      [dimension]: value,
    }));
  };

  const exportAsSVG = () => {
    const svg = generateSVG(previewSize.width, previewSize.height, radiusValues);
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'shape.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportAsReactComponent = () => {
    const component = generateReactComponent(radiusValues);
    const blob = new Blob([component], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Shape.tsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 order-2 lg:order-1">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Border Radius Controls</h2>
          
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Preview Size</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Width</label>
                <Slider
                  min={100}
                  max={500}
                  value={previewSize.width}
                  onChange={(value) => handleSizeChange('width', value)}
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">Height</label>
                <Slider
                  min={100}
                  max={500}
                  value={previewSize.height}
                  onChange={(value) => handleSizeChange('height', value)}
                />
              </div>
            </div>
          </div>
          
          <RadiusControls
            radiusValues={radiusValues}
            onCornerChange={handleCornerChange}
            onReset={resetToDefault}
          />
          
          <div className="mt-8">
            <CodeOutput radiusValues={radiusValues} />
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="primary" onClick={() => navigator.clipboard.writeText(generateSVG(previewSize.width, previewSize.height, radiusValues))}>
              <Copy className="w-4 h-4 mr-2" />
              Copy CSS
            </Button>
            <Button variant="outline" onClick={exportAsSVG}>
              <Download className="w-4 h-4 mr-2" />
              Export SVG
            </Button>
            <Button variant="ghost" onClick={exportAsReactComponent}>
              <ArrowUpRight className="w-4 h-4 mr-2" />
              React Component
            </Button>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-1 order-1 lg:order-2">
        <div className="sticky top-24">
          <ShapePreview 
            radiusValues={radiusValues} 
            width={previewSize.width}
            height={previewSize.height}
          />
          
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Quick Actions</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => applyPreset(defaultBorderRadiusValues)}
              >
                Reset
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => {
                  const firstValue = radiusValues.topLeft.horizontal;
                  setRadiusValues({
                    topLeft: { horizontal: firstValue, vertical: firstValue },
                    topRight: { horizontal: firstValue, vertical: firstValue },
                    bottomRight: { horizontal: firstValue, vertical: firstValue },
                    bottomLeft: { horizontal: firstValue, vertical: firstValue }
                  });
                }}
              >
                Make Equal
              </Button>
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => {
                  setRadiusValues({
                    topLeft: { 
                      horizontal: Math.floor(Math.random() * 100),
                      vertical: Math.floor(Math.random() * 100)
                    },
                    topRight: {
                      horizontal: Math.floor(Math.random() * 100),
                      vertical: Math.floor(Math.random() * 100)
                    },
                    bottomRight: {
                      horizontal: Math.floor(Math.random() * 100),
                      vertical: Math.floor(Math.random() * 100)
                    },
                    bottomLeft: {
                      horizontal: Math.floor(Math.random() * 100),
                      vertical: Math.floor(Math.random() * 100)
                    }
                  });
                }}
              >
                Random
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiusEditor;