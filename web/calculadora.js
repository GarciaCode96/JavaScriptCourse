let valorOperando = 0;
let resultadoOperacion = 0;
const elementos = {
  operador: document.querySelector('input'),
  suma: document.querySelector('#suma'),
  resta: document.querySelector('#resta'),
  producto: document.querySelector('#producto'),
  division: document.querySelector('#division'),
  igual: document.querySelector('#resultado'),
  resultado: document.querySelector('#resultado_operacion')
};

// Obtener valor del campo
elementos.operador.addEventListener('input', ({ target }) => valorOperando = target.value);

const metodoSuma = () => resultadoOperacion = Number(valorOperando) + 12;

// Elegimos una opración
elementos.suma.addEventListener('click', metodoSuma);
elementos.resta.addEventListener('click', () => resultadoOperacion = Number(valorOperando) - 10);
elementos.producto.addEventListener('click', () => resultadoOperacion = Number(valorOperando) * 4);
elementos.division.addEventListener('click', () => resultadoOperacion = valorOperando > 0 && Number(valorOperando) / 5);

// Mostramos el resultado de la operación
elementos.igual.addEventListener('click', () => elementos.resultado.textContent = resultadoOperacion);
