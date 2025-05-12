import React from 'react';
import { motion } from 'framer-motion';
import { BorderRadiusValues } from '../../types/BorderRadius';

interface ShapePreviewProps {
  radiusValues: BorderRadiusValues;
  width: number;
  height: number;
  background?: string;
}

const ShapePreview: React.FC<ShapePreviewProps> = ({ 
  radiusValues, 
  width = 300, 
  height = 200,
  background = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
}) => {
  const { topLeft, topRight, bottomRight, bottomLeft } = radiusValues;
  
  const borderRadiusStyle = `${topLeft.horizontal}px ${topRight.horizontal}px ${bottomRight.horizontal}px ${bottomLeft.horizontal}px / ${topLeft.vertical}px ${topRight.vertical}px ${bottomRight.vertical}px ${bottomLeft.vertical}px`;
  
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Preview</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {width} × {height}px
        </p>
      </div>
      
      <div className="w-full flex items-center justify-center p-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg">
        <motion.div
          style={{
            width: `${width}px`,
            height: `${height}px`,
            borderRadius: borderRadiusStyle,
            background,
            boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.2), 0 10px 10px -5px rgba(139, 92, 246, 0.1)',
            transition: 'all 0.2s ease-in-out',
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center justify-center"
        >
          <div className="text-white text-opacity-90 font-medium">
            RadiusCraft Preview
          </div>
        </motion.div>
      </div>
      
      <div className="mt-4 mx-auto max-w-xs text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Resize using the width and height controls below
        </p>
      </div>
    </div>
  );
};

export default ShapePreview;