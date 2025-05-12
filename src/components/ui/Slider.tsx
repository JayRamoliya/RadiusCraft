import React, { useRef, useState, useEffect } from 'react';
import { cn } from '../../utils/cn';

interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
  label?: string;
  showValue?: boolean;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      className,
      min,
      max,
      step = 1,
      value,
      onChange,
      label,
      showValue = true,
      ...props
    },
    ref
  ) => {
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    
    const percentage = ((value - min) / (max - min)) * 100;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(Number(e.target.value));
    };
    
    useEffect(() => {
      const onMouseUp = () => setIsDragging(false);
      window.addEventListener('mouseup', onMouseUp);
      
      return () => {
        window.removeEventListener('mouseup', onMouseUp);
      };
    }, []);
    
    return (
      <div className={cn("flex flex-col space-y-2", className)}>
        {label && (
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</label>
            {showValue && <span className="text-sm text-gray-500 dark:text-gray-400">{value}</span>}
          </div>
        )}
        
        <div className="relative w-full h-6 flex items-center">
          <div
            ref={trackRef}
            className="absolute h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
          >
            <div
              className="absolute h-full bg-primary-500 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          
          <input
            type="range"
            ref={ref}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            onMouseDown={() => setIsDragging(true)}
            className={cn(
              "absolute w-full h-6 cursor-pointer opacity-0 z-10",
              isDragging ? "cursor-grabbing" : "cursor-grab"
            )}
            {...props}
          />
          
          <div
            className={cn(
              "absolute h-4 w-4 rounded-full bg-white border-2 border-primary-500 shadow transform -translate-x-1/2",
              isDragging ? "scale-110" : ""
            )}
            style={{ left: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;