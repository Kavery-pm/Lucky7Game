const sum = (arr) => {

  return arr.reduce((prev, curr) => prev + curr, 0);
};
const dice6 = () => {
  return Math.floor(Math.random() * 6 + 1);
};
const getRolls = (n) => {
  return Array.from({ length: n }, () => dice6());
};
export { getRolls, dice6, sum };
