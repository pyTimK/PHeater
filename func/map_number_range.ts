export default function mapNumberRange(
  value: number,
  minInput: number,
  maxInput: number,
  minOutput: number,
  maxOutput: number
): number {
  // First, calculate the normalized value within the input range
  const normalizedValue = (value - minInput) / (maxInput - minInput);

  // Next, map the normalized value to the output range
  let mappedValue = normalizedValue * (maxOutput - minOutput) + minOutput;

  if (mappedValue < minOutput) mappedValue = minOutput;
  if (mappedValue > maxOutput) mappedValue = maxOutput;

  // Return the mapped value
  return mappedValue;
}
