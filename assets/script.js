// 1 Compte de 1 à 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
    let exo1 = document.getElementById('exo1');
    exo1.innerHTML += i;
}

// 2. Afficher les nombres pairs de 0 à 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
        exo2.innerHTML += i;
    }
}

// 3. Somme des nombres de 1 à 10

let total = 0;

for (i = 1; i <= 10; i++) {

    total = total + i;

    console.log(total);
    exo3.innerHTML = total;

}

// 4. Table de multiplication

//prompt sert à afficher une fenetre pop up poue faire une multiplication
// let nombre= Number(prompt(8));

// for (let i=1;i<=10; i++) {

// console.log;


// let nombretotal=(nombre + "x"+ i + "=" + (nombre * i));
// exo4.innerHTML = nombretotal;
// }

//5.  Parcourir un tableau

let fruit = ["pomme", "banane", "poire", "kiwi"];
let f = "";

for (let i = 0; i < fruit.length; i++) {
    f += fruit[i] + "\n";
}
console.log(f);
exo5.innerHTML = f;

// 6. Trouver le plus grand nombre

let nombres = [5, 12, 8, 20, 3];

let max = nombres[0];

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] > max) {
        max = nombres[i];
    }
}
console.log(max);
exo6.innerHTML = max;

//  7. Compter les nombres supérieurs à 10

let sup = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] > 10) {
        sup++;
    }
}
console.log(sup);
exo7.innerHTML = sup;

// 8. Inverser un mot

// let word = prompt("écrivez un mot");
// let newWord = "";
// for (let i = word.length - 1; i >= 0; i--) {
//     newWord += word[i];
// }
// console.log(newWord);

// exo8.innerHTML = newWord;


//9. Doubler les valeurs d’un tableau

let arr = [2, 4, 6, 8];
let newarr = [];

for(let i = 0; i < arr.length; i++) {
    newarr += arr[i] + arr[i];
}

console.log(newarr);
exo9.innerHTML = newarr;

// 10. FizzBuzz (classique des devs)
let mot="";
for(let i=1;i<=20;i++) {
   if(i%3 === 0){
      mot="Fizz";
   }else if(i%5 === 0){
      mot="Buzz";
   }else if(i%3 === 0 && i%5 ===  0) {
      mot= "FizzBuzz";
   }
   console.log(i+mot);
   exo10.innerHTML += i+mot +"\n";
}

