// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  departamento: string;
  constructor(nombreDpto: string) {
    this.departamento = nombreDpto;
  }
  getName() {
    return this.departamento;
  }
}

class Piso {
  nombrePiso: string;
  deptos: Departamento[];
  constructor(nombrePiso) {
    this.nombrePiso = nombrePiso;
    this.deptos = [];
  }
  pushDepartamento(dpto: Departamento) {
    return this.deptos.push(dpto);
  }
  getDepartamento(): Departamento[] {
    return this.deptos;
  }
}

class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const pisoEncontrado = this.pisos.find(e => e.nombrePiso == nombreDePiso);
    pisoEncontrado.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDelPiso: string): Departamento[] {
    const pisoEncontrado = this.pisos.find(e => e.nombrePiso == nombreDelPiso);
    return pisoEncontrado.getDepartamento();
  }
}


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
  console.log("vino una persona y cambio este console.log")
}
main();
