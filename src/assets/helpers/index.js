export const formatCost = (cost) => {
  const costInDollarAndCents = Number(cost)/100;
  return `$${costInDollarAndCents.toFixed(2)}`;
}