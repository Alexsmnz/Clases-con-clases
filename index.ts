// crear las clases Edificio, Piso y Departamento aquí

class Departamento {
 departamento: string;
 constructor(departamento: string) {
  this.departamento = departamento;
 }

 getName() {
  return this.departamento;
 }
}
/*La clase "Departamento", recibe en su constructor el parámetro "departamento"
de tipo string. Esta clase tiene un método llamado "getName()" que devuelve
el nombre del departamento.*/


class Piso {
 nombrePiso: string;
 deptos: Departamento[];
 constructor(nombrePiso: string) {
  this.nombrePiso = nombrePiso;
  this.deptos = [];
 }

 pushDepartamento(depto: Departamento) {
  this.deptos.push(depto);
 }

 getDepartamento(): Departamento[] {
  return this.deptos;
 }
}
/*La clase "Piso", recibe como parámetro en su constructor el nombre del piso
en formato texto y se guarda en la propiedad "nombrePiso" para ser usada 
posteriormente. Esta clase también tiene dos métodos, el método 
"pushDepartamento()" para agregar departamentos y el método "getDepartamento()"
para obtener el listado completo de ese piso.*/


class Edificio {
 pisos: Piso[];
 constructor(pisos: Piso[]) {
  this.pisos = pisos;
 }

 addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
  const pisoEncontrado = this.pisos.find(e => e.nombrePiso == nombreDePiso);
  pisoEncontrado.pushDepartamento(departamento);
 }

 getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
  const buscarPiso = this.pisos.find(e => e.nombrePiso == nombreDePiso);
  return buscarPiso.getDepartamento();
 }
}
/*La clase "Edificio", recibe un array de "piso" y lo guarda en una propiedad.
Esta clase también tiene dos métodos, el método "addDepartamentoToPido()" que
recibe un departamento y lo ubica en el piso con el nombre indicado (si no 
existe tal departamento devuelve un error), y el método 
"getDepartamentoByPiso(): Departamento[]" que devuelve todos los 
departamento de ese piso.*/


// no modificar este test
function testClaseEdificio() {
 const unPiso = new Piso("planta baja");
 const otroPiso = new Piso("primer piso");
 const unEdificio = new Edificio([unPiso, otroPiso]);
 const deptoUno = new Departamento("depto uno");
 const deptoDos = new Departamento("depto dos");
 const deptoTres = new Departamento("depto tres");
 unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
 unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
 unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

 const deptos = unEdificio.getDepartamentosByPiso("planta baja");
 const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

 if (
  Array.isArray(deptosEmpty) &&
  deptosEmpty.length == 0 &&
  deptos.length == 3 &&
  deptos[2].getName() == "depto tres"
 ) {
  console.log("testClaseBandaApartment passed");
 } else {
  throw "testClaseBandaApartment not passed";
 }
}

function main() {
 testClaseEdificio();
}
main();