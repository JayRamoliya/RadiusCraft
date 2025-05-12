import { BorderRadiusValues, CodeFormatType } from '../types/BorderRadius';

export const generateCSSCode = (values: BorderRadiusValues): string => {
  const { topLeft, topRight, bottomRight, bottomLeft } = values;
  
  return `border-radius: ${topLeft.horizontal}px ${topRight.horizontal}px ${bottomRight.horizontal}px ${bottomLeft.horizontal}px / ${topLeft.vertical}px ${topRight.vertical}px ${bottomRight.vertical}px ${bottomLeft.vertical}px;`;
};

export const generateShorthandCSSCode = (values: BorderRadiusValues): string => {
  const { topLeft, topRight, bottomRight, bottomLeft } = values;
  
  // Check if all values are the same
  const allSame = 
    topLeft.horizontal === topRight.horizontal && 
    topLeft.horizontal === bottomRight.horizontal &&
    topLeft.horizontal === bottomLeft.horizontal &&
    topLeft.vertical === topRight.vertical &&
    topLeft.vertical === bottomRight.vertical &&
    topLeft.vertical === bottomLeft.vertical;
  
  if (allSame) {
    // If horizontal and vertical are the same
    if (topLeft.horizontal === topLeft.vertical) {
      return `border-radius: ${topLeft.horizontal}px;`;
    }
    // If horizontal and vertical are different
    return `border-radius: ${topLeft.horizontal}px / ${topLeft.vertical}px;`;
  }
  
  return generateCSSCode(values);
};

export const generateTailwindCode = (values: BorderRadiusValues): string => {
  // This is a simplified version - in reality, you'd map to the closest Tailwind values
  // or use arbitrary values
  const { topLeft, topRight, bottomRight, bottomLeft } = values;
  
  return `className="rounded-tl-[${topLeft.horizontal}px] rounded-tr-[${topRight.horizontal}px] rounded-br-[${bottomRight.horizontal}px] rounded-bl-[${bottomLeft.horizontal}px]"`;
};

export const generateSCSSCode = (values: BorderRadiusValues): string => {
  return `$border-radius: ${generateCSSCode(values)}\n\n.element {\n  ${generateCSSCode(values)}\n}`;
};

export const generateCode = (values: BorderRadiusValues, format: CodeFormatType): string => {
  switch (format) {
    case 'css':
      return generateShorthandCSSCode(values);
    case 'tailwind':
      return generateTailwindCode(values);
    case 'scss':
      return generateSCSSCode(values);
    default:
      return generateShorthandCSSCode(values);
  }
};

export const defaultBorderRadiusValues: BorderRadiusValues = {
  topLeft: { horizontal: 8, vertical: 8 },
  topRight: { horizontal: 8, vertical: 8 },
  bottomRight: { horizontal: 8, vertical: 8 },
  bottomLeft: { horizontal: 8, vertical: 8 }
};