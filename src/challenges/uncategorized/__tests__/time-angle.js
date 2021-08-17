const angleBetween = require('../time-angle')

test('At 5:15 angle should be 67.5 degrees', () => {
  expect(angleBetween(5, 15)).toBe(67.5)
})

test('At 11:59 angle should be 5.5 degrees', () => {
  expect(angleBetween(11, 59)).toBe(5.5)
})

test('At 0:00 angle should be 0 degrees', () => {
  expect(angleBetween(0, 0)).toBe(0)
})

test('At 3:45 angle should be 157.5 degrees', () => {
  expect(angleBetween(3, 45)).toBe(157.5)
})
