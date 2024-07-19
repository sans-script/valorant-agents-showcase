export interface ColorStop {
    color: string;
    stop: string;
  }
  
  export const createGradient = (backgroundGradientColors: string[]): string => {
    const colorStops: ColorStop[] = [
      { color: backgroundGradientColors[0], stop: '20%' },
      { color: backgroundGradientColors[1], stop: '60%' },
      { color: backgroundGradientColors[2], stop: '100%' },
      { color: backgroundGradientColors[3], stop: '100%' },
    ];
  
    return colorStops.map(({ color, stop }) => `#${color} ${stop}`).join(', ');
  };
  