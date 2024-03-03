function increaseBalance(x, y) {
  x += y;
  return x;
}

function decreaseBalance(x, y) {
  x -= y;
  return x;
}
function divideBalanceByAccounts(x, y) {
  x /= y;
  return x;
  console.log("x");
}

function getRestAfterDivision(x, y) {
  x %= y;
  return x;
}
console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));

/*Добавить в скрипт 2 функции для нашего расчета - одну с инкрементом и вторую с декрементом, соответственно. 
Вызовите функции и выведите в консоль их результаты.*/

function increment(x) {
  x = 5;
  x++;
  return x;
}
console.log(increment(5));
