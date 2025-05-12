import { BorderRadiusValues } from '../types/BorderRadius';

export const generateSVGPath = (width: number, height: number, values: BorderRadiusValues): string => {
  const { topLeft, topRight, bottomRight, bottomLeft } = values;
  
  // Start from top-left and move clockwise
  const path = [
    `M${topLeft.horizontal},0`,
    `H${width - topRight.horizontal}`,
    `C${width},0 ${width},0 ${width},${topRight.vertical}`,
    `V${height - bottomRight.vertical}`,
    `C${width},${height} ${width},${height} ${width - bottomRight.horizontal},${height}`,
    `H${bottomLeft.horizontal}`,
    `C0,${height} 0,${height} 0,${height - bottomLeft.vertical}`,
    `V${topLeft.vertical}`,
    `C0,0 0,0 ${topLeft.horizontal},0`,
    'Z'
  ].join(' ');
  
  return path;
};

export const generateSVG = (width: number, height: number, values: BorderRadiusValues): string => {
  const path = generateSVGPath(width, height, values);
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${path}" fill="currentColor"/>
</svg>`;
};

export const generateReactComponent = (values: BorderRadiusValues): string => {
  const { topLeft, topRight, bottomRight, bottomLeft } = values;
  
  return `import React from 'react';

interface ShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  className?: string;
}

export const Shape: React.FC<ShapeProps> = ({
  width = 200,
  height = 200,
  className = '',
  style,
  ...props
}) => {
  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: \`\${${topLeft.horizontal}}px \${${topRight.horizontal}}px \${${bottomRight.horizontal}}px \${${bottomLeft.horizontal}}px / \${${topLeft.vertical}}px \${${topRight.vertical}}px \${${bottomRight.vertical}}px \${${bottomLeft.vertical}}px\`,
        ...style
      }}
      {...props}
    />
  );
};
`;
}