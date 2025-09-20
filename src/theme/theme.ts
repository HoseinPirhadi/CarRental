interface Color {
  Primary: string;
  PrimaryRGBA15: string;
  Secondary: string;
  TextDark: string;
  Black: string;
  BlackRGB10: string;
  OrangeRGBA0: string;
  Grey: string;
  DarkGrey: string;
  White: string;
  WhiteRGBA75: string;
  WhiteRGBA50: string;
  WhiteRGBA32: string;
  WhiteRGBA15: string;
}

export const COLORS: Color = {
  Primary: '#007BFF',
  PrimaryRGBA15: 'rgb(0, 123, 255, 0.15)',
  Secondary: '#E64A19',
  TextDark: '#0D0D0D',
  Black: '#000000',
  White: '#FFFFFF',
  
  BlackRGB10: 'rgba(0,0,0,0.1)',
  OrangeRGBA0: 'rgba(255,85,36,0)',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  WhiteRGBA75: 'rgba(255,255,255,0.75)',
  WhiteRGBA50: 'rgba(255,255,255,0.50)',
  WhiteRGBA32: 'rgba(255,255,255,0.32)',
  WhiteRGBA15: 'rgba(255,255,255,0.15)',
};

interface FontFamily {
  iransansx_extrabold: string;
  iransansx_bold: string;
  iransansx_medium: string;
  iransansx_regular: string;
}

export const FONTFAMILY: FontFamily = {
  iransansx_extrabold: 'IRANSansX-ExtraBold',
  iransansx_bold: 'IRANSansX-Bold',
  iransansx_medium: 'IRANSansX-Medium',
  iransansx_regular: 'IRANSansX-Regular',
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_30: 30,
};