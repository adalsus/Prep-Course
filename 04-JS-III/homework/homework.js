// No cambies los nombres de las funciones.

//ESTUDIANTE: adalsus
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let i=0; i<array.length; i++) {
      array[i] += 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let todas='';
  for (let c = 0; c < palabras.length; c++) {
      let espa = ' ';
      if  (c === palabras.length-1) {
          espa='';
      }
      todas += palabras[c] + espa;
  }
  return todas;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let esta=false;
  for (let c=0; c < array.length; c++) {
    if (elemento===array[c]) {
        esta = true;
        break;
    }
  }
  return esta;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let sumatoria=0;
  for (let c=0; c<numeros.length; c++) {
      sumatoria += numeros[c];
  }
  return sumatoria;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let media;
  media = agregarNumeros(resultadosTest)/resultadosTest.length;
  return media;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length<=1) {
    if (arguments.length===0) {
        return 0;
    } else {
        return arguments[0];
    }
  }
  
  let multiTodo=1;
  for (let c=0; c<arguments.length ;c++) {
      multiTodo *= arguments[c];
  }
  return multiTodo;
  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayoresA18=0;
  for (let c=0; c<arreglo.length; c++) {
    if (arreglo[c]>18) {
        ++mayoresA18;
    }
  }
  return mayoresA18;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  function queMomento(porElDia) {
      switch (porElDia) {
          case 7:
          case 1:
              return 'Es fin de semana';
          default:
              return 'Es dia Laboral';
      }
  }
  return queMomento(numeroDeDia);
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
  function esini9(numero) {
    let convAcade = numero + '';
    return convAcade[0]==='9';
  } 
  
  return esini9(n);
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let estaEn=1;
  for (let c=1;c<arreglo.length;c++) {
      if (arreglo[0]===arreglo[c]) {
          ++estaEn;
      }
  }
  return estaEn===arreglo.length;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray=[];
  for (let c_a=0; c_a<array.length; c_a++) {
          if (array[c_a]==='Enero' || array[c_a]==='Marzo' || array[c_a]==='Noviembre') {
              let yaEsta=false;
              for (let c_nA=0;c_nA<nuevoArray.length;c_nA++) {
                  if (array[c_a]===nuevoArray[c_nA]) {
                      yaEsta=true;
                      break;
                  }
              }
              if (yaEsta===false) {
                nuevoArray.push(array[c_a]);
              }  
          }
  }
  
  if (nuevoArray.length===3) {
      return nuevoArray;
  } else {
      return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nA_may100=[];
  for (let c=0; c<array.length; c++) {
      if (array[c]>100) {
          nA_may100.push(array[c]);
      }
  }
  return nA_may100;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let array=[];
  let enDos=numero;
  let lim;
  for (lim=1; lim<=10; lim++) {
      enDos += 2;
      array.push(enDos);
      if (enDos===lim) {
          break;
      }
  }
  if (enDos===lim) {
      return 'Se interrumpió la ejecución';
  } else {
      return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array=[];
  let enDos=numero;
  let lim;
  for (lim=1; lim<=10; lim++) {
      if (lim===5) {
          continue;
      }
      enDos += 2;
      array.push(enDos);
  }
  return array;
}
//ESTUDIANTE: adalsus

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
