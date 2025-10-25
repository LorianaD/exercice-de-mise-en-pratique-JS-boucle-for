# exercice-de-mise-en-pratique-JS-boucle-for

### 🧩 **1. Compter de 1 à 10**

👉 Affiche dans la console tous les nombres de **1 à 10**.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

🧠 Objectif : comprendre la syntaxe de base d’un `for`.

---

### 🔢 **2. Afficher les nombres pairs de 0 à 20**

👉 Utilise une boucle `for` pour afficher uniquement les **nombres pairs** entre **0 et 20**.

🧠 Astuce : un nombre est pair quand `i % 2 === 0`.

---

### ➕ **3. Somme des nombres de 1 à 10**

👉 Calcule et affiche la **somme** des nombres de 1 à 10.

💡 Résultat attendu : `55`.

---

### ✖️ **4. Table de multiplication**

👉 Demande à l’utilisateur un nombre (avec `prompt`) et affiche sa **table de multiplication** (jusqu’à 10).

Exemple :

```
5 x 1 = 5
5 x 2 = 10
...
```

---

### 📦 **5. Parcourir un tableau**

👉 Crée un tableau :

```js
let fruits = ["pomme", "banane", "poire", "kiwi"];
```

et affiche chaque fruit avec `console.log()` grâce à une boucle `for`.

---

### 🔍 **6. Trouver le plus grand nombre**

👉 Crée un tableau de nombres et utilise une boucle `for` pour trouver **le plus grand**.

Exemple :

```js
let nombres = [5, 12, 8, 20, 3];
```

Résultat attendu : `20`.

---

### 🧮 **7. Compter les nombres supérieurs à 10**

👉 Dans un tableau de nombres, compte combien sont **supérieurs à 10**, et affiche ce nombre à la fin.

---

### 💬 **8. Inverser un mot**

👉 Demande un mot à l’utilisateur, puis affiche-le **à l’envers** grâce à une boucle `for`.

Exemple :

```
Mot : "chat"
Résultat : "tahc"
```

---

### 💡 **9. Doubler les valeurs d’un tableau**

👉 À partir d’un tableau `[2, 4, 6, 8]`, crée un **nouveau tableau** où chaque nombre est doublé.
Résultat attendu : `[4, 8, 12, 16]`.

---

### 🧠 **10. FizzBuzz (classique des devs)**

👉 Affiche les nombres de 1 à 20, mais :

* Si le nombre est multiple de 3 → affiche **"Fizz"**
* Si le nombre est multiple de 5 → affiche **"Buzz"**
* Si le nombre est multiple de 3 et 5 → affiche **"FizzBuzz"**
  Sinon, affiche simplement le nombre.
