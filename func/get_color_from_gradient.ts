export default function getColorFromGradient(
  color1: string,
  color2: string,
  percent: number
): string {
  const parseColor = (color: string): [number, number, number] => {
    const hex = color.slice(1); // Remove the leading '#'
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 2), 16);
    return [r, g, b];
  };

  if (percent < 0) percent = 0;
  if (percent > 1) percent = 1;

  const [r1, g1, b1] = parseColor(color1);
  const [r2, g2, b2] = parseColor(color2);

  const r = Math.round(r1 + (r2 - r1) * percent);
  const g = Math.round(g1 + (g2 - g1) * percent);
  const b = Math.round(b1 + (b2 - b1) * percent);

  const toHex = (value: number): string => {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
