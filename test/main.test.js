const [metodoSuma, metodoResta] = require('./operaciones');

test('suma', () => {
  expect(metodoSuma(12, 18)).toBe(30);
});

test('resta', () => {
  expect(metodoResta(15, 3)).toBe(12);
});
