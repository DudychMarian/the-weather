export function generateRandomCity(city) {
  const result = [];
  const index = Math.floor(Math.random() * city.length);
  const index2 = Math.floor(Math.random() * city.length);
  const index3 = Math.floor(Math.random() * city.length);
  const index4 = Math.floor(Math.random() * city.length);
  const index5 = Math.floor(Math.random() * city.length);
  const index6 = Math.floor(Math.random() * city.length);
  const index7 = Math.floor(Math.random() * city.length);
  result.push(city[index], city[index2], city[index3], city[index4], city[index5], city[index6], city[index7]);
  return result
}