// mais de um valor
const x = 10;
const y = "Guilherme";
const z = [1, 2];

console.log(x, y, z);

// Contagem de imporessões
console.count(`O valor de x é ${x}, contagem:`);
console.count(`O valor de x é ${x}, contagem:`);
console.count(`O valor de x é ${x}, contagem:`);
console.count(`O valor de x é ${x}, contagem:`);

// variavel entre string
console.log("O nome é %s, e ele é programador", y);

// limpar o console
setTimeout(() => {
  console.clear();
}, 2000);
