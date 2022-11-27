// No cambies los nombres de las funciones.

//ESTUDIANTE:  adalsus
function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {
      constructor(objOpc_p) {
          this.usuario = objOpc_p['usuario'];
          this.nombre = objOpc_p['nombre'];
          this.email = objOpc_p['email'];
          this.password = objOpc_p['password'];
      }
  }
  Usuario.prototype.saludar = function ups() {
      return `Hola, mi nombre es ${this.nombre}`;
  };
  //let usuarioDeUsu = new Usuario({usuario:'001', nombre:'Adalberto', email:'adalsus@laei.com', password:'hy77667'});
  //console.log(usuarioDeUsu.saludar());
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function cps() {
      return 'Hello World!';
  };
  return Constructor;
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function spr() {
      let texto = this;
      let alreves = '';
      for (let i = texto.length - 1; i >= 0; i--) {
        alreves += texto[i];
      }
      return alreves; 
  };
  return String;
}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
      this['nombre'] = nombre;
      this['apellido'] = apellido;
      this['edad'] = edad;
      this['domicilio'] = domicilio;
    }  
    
    detalle() {
          return {'Nombre':this['nombre'], 'Apellido':this['apellido'], 'Edad':this['edad'], 'Domicilio':this['domicilio']};
    };
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  let personaObj = new Persona(nombre, apellido, edad, dir);
  return personaObj;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  let Datos = {
      datos() {
          return `${this['nombre']}, ${this['edad']} años`;
      }
  };
  Object.setPrototypeOf(Persona.prototype, Datos);
  /*//Otra forma
  Persona.prototype.datos = function ppd() {
      return `${this['nombre']}, ${this['edad']} años`;
  };*/
  
  return Persona;
}
//ESTUDIANTE:  adalsus  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
