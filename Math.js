
// Наименьший делитель числа
const smallestDivisor = (num) => {
    const iter = (n, divisor) => {
      if (n % divisor === 0) {
        return divisor;
      }
      if (n === 1) {
        return 1;
      }
      return iter(n, divisor + 1);
    };
  
    return iter(num, 2);
};
  
  // Площадь треугольника
const getTriangleArea = (h, b) => {
    return A = 1/2 * h * b;
};
  
  // 