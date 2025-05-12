import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw } from 'lucide-react';
import Button from '../ui/Button';
import { BorderRadiusValues } from '../../types/BorderRadius';

interface ShapeMorphProps {
  initialShape: BorderRadiusValues;
  targetShape: BorderRadiusValues;
  width: number;
  height: number;
  background?: string;
}

const ShapeMorph: React.FC<ShapeMorphProps> = ({
  initialShape,
  targetShape,
  width,
  height,
  background = 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReversed, setIsReversed] = useState(false);

  const getBorderRadius = (shape: BorderRadiusValues) => {
    const { topLeft, topRight, bottomRight, bottomLeft } = shape;
    return `${topLeft.horizontal}px ${topRight.horizontal}px ${bottomRight.horizontal}px ${bottomLeft.horizontal}px / ${topLeft.vertical}px ${topRight.vertical}px ${bottomRight.vertical}px ${bottomLeft.vertical}px`;
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <motion.div
          style={{
            width,
            height,
            background,
          }}
          animate={{
            borderRadius: isPlaying ? getBorderRadius(isReversed ? initialShape : targetShape) : getBorderRadius(initialShape)
          }}
          initial={{
            borderRadius: getBorderRadius(initialShape)
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: isPlaying ? Infinity : 0,
            repeatType: "reverse"
          }}
          className="shadow-lg"
        />
      </div>

      <div className="flex justify-center space-x-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            <><Pause className="w-4 h-4 mr-1" /> Pause</>
          ) : (
            <><Play className="w-4 h-4 mr-1" /> Play</>
          )}
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsReversed(!isReversed)}
        >
          <RotateCcw className="w-4 h-4 mr-1" />
          Reverse
        </Button>
      </div>
    </div>
  );
};

export default ShapeMorph;