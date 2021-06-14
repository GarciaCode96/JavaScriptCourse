const nombrePersona = 'Jesús Garcia';
console.log(nombrePersona);

const acciones = {
  nombre: 'Acciones',
  fecha: new Date(),
  accion: function () {
    console.log('Vamos a mostrar la acción... ' + this.nombre);
  },
};

acciones.accion();

const multiplesValores = (...valores) =>
  valores.length && valores.map(value => console.log(value * 2));
multiplesValores(12, 34, 15, 75);

const valores = (...valores) => valores;
console.log(valores`${12 * 3} ${16} ${28} ${32}`);

// Conversion a tipo número (string to number)
console.log(typeof +'12');
