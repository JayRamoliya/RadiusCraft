import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from '../ui/Slider';
import Button from '../ui/Button';
import { RefreshCw } from 'lucide-react';

interface BlobModeProps {
  width: number;
  height: number;
  background?: string;
}

const BlobMode: React.FC<BlobModeProps> = ({
  width,
  height,
  background = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
}) => {
  const [complexity, setComplexity] = useState(3);
  const [smoothness, setSmoothness] = useState(50);
  const [seed, setSeed] = useState(Math.random());

  const generateBlobPath = () => {
    const points = complexity * 4;
    const angleStep = (Math.PI * 2) / points;
    const pathData = [];
    
    for (let i = 0; i < points; i++) {
      const angle = i * angleStep;
      const radius = width / 3 * (1 + (Math.sin(seed * angle) * (1 - smoothness / 100)));
      const x = width / 2 + radius * Math.cos(angle);
      const y = height / 2 + radius * Math.sin(angle);
      
      if (i === 0) {
        pathData.push(`M ${x} ${y}`);
      } else {
        const prevAngle = (i - 1) * angleStep;
        const cpRadius = radius * 0.5;
        const cp1x = width / 2 + cpRadius * Math.cos(angle - angleStep / 2);
        const cp1y = height / 2 + cpRadius * Math.sin(angle - angleStep / 2);
        const cp2x = width / 2 + cpRadius * Math.cos(angle - angleStep / 4);
        const cp2y = height / 2 + cpRadius * Math.sin(angle - angleStep / 4);
        
        pathData.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`);
      }
    }
    
    pathData.push('Z');
    return pathData.join(' ');
  };

  const regenerateBlob = () => {
    setSeed(Math.random());
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <motion.svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          style={{ background: 'transparent' }}
        >
          <motion.path
            d={generateBlobPath()}
            fill={background}
            animate={{
              d: generateBlobPath()
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Complexity
          </label>
          <Slider
            min={2}
            max={8}
            value={complexity}
            onChange={setComplexity}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Smoothness
          </label>
          <Slider
            min={0}
            max={100}
            value={smoothness}
            onChange={setSmoothness}
          />
        </div>

        <Button
          onClick={regenerateBlob}
          variant="outline"
          className="w-full"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Regenerate Shape
        </Button>
      </div>
    </div>
  );
};

export default BlobMode;