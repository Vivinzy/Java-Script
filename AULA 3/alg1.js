// Operaddor logicos E (&&) com valores booleanos

let a = true;
let b = false;
let c = true;
let d = false;


console.log(a && b); // false
console.log(a && true); // true
console.log("Resultado de a c:" + a && c); // verdadeiro
console.log("Resultado de a d:" + b && d); // falso 

// Operador logico OU (||) com valores booleanos
let e = true;
let f = false;
let g = false;
let h = true;

console.log("Resultados de e || f: " + (e || f)); // verdadeiro
console.log("Resultados de e || g: " + (e || g)); // verdadeiro
console.log("Resultados de f || g: " + (f || g )); // falso
console.log("Resultados de g || f: " + (g || f)); // falso
console.log("Resultados de f || h: " + (f || h)); // falso

// Operador logico NOT (!) com valores booleanos
let ab = true;
let vn = false;
let np = true;
let fl = true;

console.log("Resultado de !ab: " + !ab); // falso
console.log("Resultado de !vn: " + !vn); // verdadeiro
console.log("Resultado de !np: " + !np); // falso
console.log("Resultado de !fl: " + !fl); // falso

let kj = true;
let bc = false;

//Operador E (&&)
let eResultafo = kj && bc;
console.log("Resultado de kj && bc: " + eResultafo); // falso

//Operador OU (||)
let ouResultado = kj || bc;
console.log("Resultado de kj || bc: " + ouResultado); // verdadeiro

//Operador NOT (!)
let notResultado = !kj;
console.log("Resultado de !kj: " + notResultado); // verdadeiro

// Combinação de operadores logicos
let combinados = (kj && !bc) || (!kj && bc);
console.log("Resultados de (kj && !bc) || (!kj && bc): " + combinados); // 

// Exemplos de operadores logicos com valores numericos

let x = 10;
let y = 5;
let z = 0;

//Operador E (&&) com valores numericos
let ResultadoE = (x > y) && (y > z);
console.log("Resultado de (x > y) && (y > z): " + ResultadoE); // 
console.log("Resulatdo de (z < y) && (x > z): " + (z < y) && (x > z)); // 

//Operador OU (||) com valores numericos
let ResultadoOU = (x < y) || (y > z);
console.log("Resultado de (x < y) || (y > z): " + ResultadoOU); //

//Operador NOT (!) com valores numericos
let ResultadoNOT = !(x < y);
console.log("Resultado de !(x < y): " + ResultadoNOT); //

//Combinação de operadores logicos com valores numericos
let ResultadoC = ((x > y) && (y > z)) || ((x < y) && (y > z));
console.log("Resultado de ((x > y) && (y > z)) || ((x < y) && (y > z)): " + ResultadoC); //
