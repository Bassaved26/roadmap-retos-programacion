
/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

//HERENCIAS
/* e puede denominar herencia de clases a la característica donde una clase hija obtiene las propiedades y métodos de una clase padre porque se ha establecido una relación entre ambas. Esa relación se establece a través de la palabra clave extends */

/* class Animal {
  constructor(especie, nombre){
    this.esp = especie;
    this.nom = nombre;
  }
  show(){
    console.log(`Es un ${this.esp} y se llama ${this.nom}`)
  }
}

class Perro extends Animal {
  constructor(especie, nombre){
    super(especie, nombre);
  }
  sonido(){
    console.log("WAO WAO")
  }
}
const perro = new Perro("Doberman", "Goliath")
perro.show()
perro.sonido()

class Gato extends Animal {
  constructor(especie, nombre){
    super(especie, nombre);
  }
  sonido(){
    console.log("MIAO MIAO")
  }
}
const gato = new Gato("Siames","Rocky")
gato.show()
gato.sonido() */

/* DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.*/

class Empleado {
  constructor(id, nombre){
    this.nom = nombre
    this.id = id
  }
}

class Gerente extends Empleado{
  constructor(id, nombre, empleados = [], area ){
    super(id, nombre, empleados);
    this.area = area
    this.emp = empleados
  }
  empleadosAcargo(){
    if(this.emp.length===0){
      console.log("Es un empleado, no tiene a nadie a cargo")
    }else{
      console.log(`${this.nom} Tiene a su cargo a:`)
      this.emp.forEach(empleado =>{
        console.log(`-${empleado}`
        )
      })
    }
  }

  actividad(){
    console.log("supervisa las actividades del area")
  }
  asignarTarea(a){
    this.emp.push(a)
    return `Asigna proyecto a ${a} nuevo integrante del area de ${this.area}`
  }
}
const gerente = new Gerente(1,"Andres", ["Maria", "Jose"], "desarrollo")
gerente.empleadosAcargo()
console.log(gerente.asignarTarea("Abrahan"))

class ProductManager extends Empleado{
  constructor(id, nombre, area, proyectos){
    super(id, nombre, area, proyectos);
    this.area = area
    this.pro = proyectos  
  }
  info(){
    console.log(`${this.nom} es el product manager del area ${this.area} y realiza el proyecto ${this.pro}`)
  }
} 
const product_manager = new ProductManager(2,"Roberto","desarrollo","Aplicacion movil")
product_manager.info()