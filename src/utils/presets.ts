import { BorderRadiusPreset } from '../types/BorderRadius';

export const presets: BorderRadiusPreset[] = [
  {
    id: 'default',
    name: 'Rounded',
    category: 'basic',
    values: {
      topLeft: { horizontal: 8, vertical: 8 },
      topRight: { horizontal: 8, vertical: 8 },
      bottomRight: { horizontal: 8, vertical: 8 },
      bottomLeft: { horizontal: 8, vertical: 8 }
    }
  },
  {
    id: 'pill',
    name: 'Pill',
    category: 'basic',
    values: {
      topLeft: { horizontal: 9999, vertical: 9999 },
      topRight: { horizontal: 9999, vertical: 9999 },
      bottomRight: { horizontal: 9999, vertical: 9999 },
      bottomLeft: { horizontal: 9999, vertical: 9999 }
    }
  },
  {
    id: 'card',
    name: 'Card',
    category: 'cards',
    values: {
      topLeft: { horizontal: 12, vertical: 12 },
      topRight: { horizontal: 12, vertical: 12 },
      bottomRight: { horizontal: 12, vertical: 12 },
      bottomLeft: { horizontal: 12, vertical: 12 }
    }
  },
  {
    id: 'chat-bubble',
    name: 'Chat Bubble',
    category: 'cards',
    values: {
      topLeft: { horizontal: 16, vertical: 16 },
      topRight: { horizontal: 16, vertical: 16 },
      bottomRight: { horizontal: 4, vertical: 4 },
      bottomLeft: { horizontal: 16, vertical: 16 }
    }
  },
  {
    id: 'blob',
    name: 'Blob',
    category: 'blobs',
    values: {
      topLeft: { horizontal: 70, vertical: 30 },
      topRight: { horizontal: 30, vertical: 70 },
      bottomRight: { horizontal: 70, vertical: 30 },
      bottomLeft: { horizontal: 30, vertical: 70 }
    }
  },
  {
    id: 'button-soft',
    name: 'Soft Button',
    category: 'buttons',
    values: {
      topLeft: { horizontal: 8, vertical: 8 },
      topRight: { horizontal: 8, vertical: 8 },
      bottomRight: { horizontal: 8, vertical: 8 },
      bottomLeft: { horizontal: 8, vertical: 8 }
    }
  },
  {
    id: 'ios-button',
    name: 'iOS Button',
    category: 'buttons',
    values: {
      topLeft: { horizontal: 12, vertical: 12 },
      topRight: { horizontal: 12, vertical: 12 },
      bottomRight: { horizontal: 12, vertical: 12 },
      bottomLeft: { horizontal: 12, vertical: 12 }
    }
  }
];