let height = 5; // висота трикутника
let symbol = '*'; // символ, яким малюємо трикутник

for (let i = 1; i <= height; i++) {
  let row = '';
  for (let j = 0; j < i; j++) {
    row += symbol;
  }
  console.log(row);
}

let height = 5; // висота трикутника
let symbol = '*'; // символ, яким малюємо трикутник

for (let i = 1; i <= height; i++) {
  console.log(symbol.repeat(i));
}