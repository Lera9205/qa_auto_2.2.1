function increaseBalance(x, y) {
  let a = x + y;
  return a;
} //добавила временную переменную "а", и присвоили ей значение x + y

function decreaseBalance(x, y) {
  let b = x - y;
  return b;
} //добавила переменную y, добавила временную переменную "b" т.к. в console.log указано 2 значения 3000, 700

function divideBalanceByAccounts(x, y) {
  let c = x / y;
  return c;
  console.log("x");
} // в данном коде console.log("x") можно не писать, т.к. после return c; дальнейший код не выполняется, добавила переменную y, добавила временную переменную "b"

function getRestAfterDivision(x, y) {
  let d = x % y;
  return d;
} //добавила переменную d, добавила временную переменную "b"

console.log(increaseBalance(3000, 700));
console.log(decreaseBalance(3000, 700));
console.log(divideBalanceByAccounts(3000, 2, 4000));
console.log(getRestAfterDivision(7000, 3));
