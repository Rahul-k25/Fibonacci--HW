const fibonacci = (F0, F1, n) => {
  let result = 0;
  const series = [F0, F1];

  if (n === 0) {
    result = F0;
  } 

  else if (n === 1) {
    result = F1;
  } 

  for (let i = 2; i <= Math.abs(n); i++) {
    result = series[i - 2] + series[i - 1];
    series.push(result);
  }
  if (n < 0) {
    result = n % 2 === 0 ? -result : result;
  }
  return result;
};

function fibonacciSeries() {
  const f0 = Number(prompt("Enter the first number in the sequence:"));
  const f1 = Number(prompt("Enter the second number in the sequence:"));
  const n = Number(prompt("Enter the nth number in the generalized Fibonacci sequence:"));
  const num = n < 0 ? n+1 : (n == 0) ? n : n-1;
  console.log(`The ${n}-th generalized Fibonacci number is: ${fibonacci(f0, f1, num)}`);
}
