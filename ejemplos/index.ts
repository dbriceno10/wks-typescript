// enum Fases {
//   Primera,
//   Segunda,
//   Tercera
// }

// console.log(Fases.Primera);

// let tupla : [string, number] = [ "franco", 27]

interface People {
  name: string;
  lastName: string;
  age: number;
}

interface Student extends People {
  status: boolean;
  hello:() => void
}

let daniel: Student = {
  name: "daniel",
  lastName: "briceño",
  age: 25,
  status: true,
  hello: () => {console.log("hola")}
}

console.log(daniel)


//tsc ---> se usa si se instalo typescript de forma global
//npx tsc ---> se usa si se instalo typescript de forma local

//npx tsc nombreDeMiArchivo.ts

// tsc --init ----> Crearnos un archivo de configuración