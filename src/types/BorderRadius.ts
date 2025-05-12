export interface BorderRadiusValues {
  topLeft: {
    horizontal: number;
    vertical: number;
  };
  topRight: {
    horizontal: number;
    vertical: number;
  };
  bottomRight: {
    horizontal: number;
    vertical: number;
  };
  bottomLeft: {
    horizontal: number;
    vertical: number;
  };
}

export type CornerKey = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft';
export type DirectionKey = 'horizontal' | 'vertical';

export interface BorderRadiusPreset {
  id: string;
  name: string;
  values: BorderRadiusValues;
  category: 'basic' | 'cards' | 'buttons' | 'blobs' | 'custom';
}

export type CodeFormatType = 'css' | 'tailwind' | 'scss';

export type ShapeSize = {
  width: number;
  height: number;
};