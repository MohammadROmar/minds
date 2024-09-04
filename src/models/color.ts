interface ColorProps {
  r: number;
  g: number;
  b: number;
}

export default class Color {
  r: number;
  g: number;
  b: number;

  constructor({ r, g, b }: ColorProps) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
