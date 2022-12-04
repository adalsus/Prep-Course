// No cambies los nombres de las funciones.

//ESTUDIANTE:  adalsus

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let listaArrays = [];
  for (let clave in objeto) {
      let eArray = [];
      eArray.push(clave, objeto[clave]);
      listaArrays.push(eArray);
  }
  //Otra forma
  //let listaArrays = Object.entries(objeto);
  
  return listaArrays;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
 let result = {};
 for (let valor of string) {
     result[valor] = result.hasOwnProperty(valor)   ?   ++result[valor]   :   1;
 }
  return result;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let maymi = function fan(texto) {
      let une=['',''];
      
      //Con un for clásico
      /*for (let p=0; p<texto.length; p++) { 
          if ( texto[p]===texto[p].toUpperCase() ) { 
              une[0] += texto[p];
          } else {
              une[1] += texto[p];
          }   
      }*/
      
      //Con forEach
      Array.from(texto).forEach( function cb(letra) {
         if ( letra===letra.toUpperCase() ) {
             une[0] += letra;
         } else {
             une[1] += letra;
         }
      } );
      
      return une;
  };
  
  return maymi(s)[0]+maymi(s)[1];
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  
  let fr = function fn(frase) {
      let cpr = [];
      let cnvArray = frase.split(' ');
      cnvArray.forEach( function cb(word) {
          cpr.push(Array.from(word).reverse().join(''));
      } );
      return cpr.join(' ');
  };
    
  return fr(str);
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
  let numr = function nf(valorn) {
    let snr = Array.from(valorn+'').reverse().join('');
    return parseInt(snr);
  };
  
  return numero===numr(numero)  ?  'Es capicua' : 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  let eli_abc = function nf(frase) {
      let resul='';
      Array.from(frase).forEach( function cb(letra) {
         if (letra!=='a' && letra!=='b' && letra!=='c') {
             resul += letra;
         }
     } );
     return resul;
  };
  
  return eli_abc(cadena);
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  let arrO = Array.from(arr);
  let arrT = [];
  for (let valor of arrO) {
      arrT.push(valor.length);
  }
  
  let auxT, auxV;
  for ( let c in arrT ) {
      let cS = (parseInt(c)+1)+'';
      for ( cS in arrT ) {
          if (parseInt(cS) > parseInt(c)) {
              if (arrT[c]>arrT[cS]) {
                  auxT = arrT[c];
                  auxV = arrO[c];
                  arrT[c] = arrT[cS];
                  arrO[c] = arrO[cS];
                  arrT[cS] = auxT;
                  arrO[cS] = auxV;
              }
          }
      }
  }
  return arrO;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let ca1 = Array.from(arreglo1);
  let ca2 = Array.from(arreglo2);
  let ame, ama;
  if (ca1.length<=ca2.length) {
      ame = ca1;
      ama = ca2;
  } else {
      ame = ca2;
      ama =ca1;
  }
  let inters = [];
  for (let valor of ame) {
    if (ama.includes(valor)) {
        inters.push(valor);
        ama = ama.filter( (item) => item !== valor );
    }
  }
  //Ordeno, uso la manera directa
  inters.sort( (a,b) => { return a-b; } );
  
  return inters;
}

//ESTUDIANTE :  adalsus


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

