// Do not change any of the function names

//ESTUDIANTE:  adalsus
function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  
  //Como práctica lo resuelvo creando un callback
  let capital = function letraC(nom_p) {
      return `${nom_p['0'].toUpperCase()}${nom_p.slice(1)}`;
  };
  function eV(nombre_p, fcb_capi) {
      return fcb_capi(nombre_p);
  }
  return eV(nombre, capital);
  
  //Otra forma sin callback
  //return `${nombre['0'].toUpperCase()}${nombre.slice(1)}`;
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let sumaTodos = numeros.reduce(function cb_r(vacu, va/*, i, cualArreglo*/){
      return vacu + va; 
    }, 
    0 /*valor inicial de vacu*/
  );
  
  return cb(sumaTodos);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function cb_fE(elemento/*, indice*/){ return cb(elemento); });
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  let nuevoArray = [];
  array.map(
            function cb_m(element/*,index, verArray*/) {
              nuevoArray.push(cb(element));
              return element; 
            }/*,
            thisArg*/
  );   
  return nuevoArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  return array.filter(  function cb_f(element) { return element['0']==='a'; } );
}
//ESTUDIANTE:  adalsus


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
