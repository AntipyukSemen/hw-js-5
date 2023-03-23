const balance = 'Ваш баланс поповнено на 1';
console.log('кількість символів завдання 3:', balance.length);
// 1 варіант
const balancePadEnd = balance.padEnd(29, 0);
console.log(balancePadEnd);
// 2 варіант
// console.log(balance.padEnd(29, 0));