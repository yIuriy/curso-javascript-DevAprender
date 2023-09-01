// 1. For
// 2. While
// 3. Do ... While
// 4. For ... in
// 5. For ... of

// 1. For
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("---------------");

// 2. While

let i = 1;
while (i < 6) {
  console.log(i);
  i++;
}

// 3. Do ... While

let i1 = 1;
do {
  console.log("Digitando!");
  i1++;
} while (i1 <= 5);

// 4. For ... in

const cores = ["Vermelho", "Azul", "Verde"]
for (indice in cores){
    console.log(cores[indice])
}

// 5. For ... of

for (let cor of cores){
    console.log(cor)
}