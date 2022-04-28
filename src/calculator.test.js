import calc from "./calculator";

test('add', () => {
    expect(calc.add(2,2)).toBe(4)
})

test('subtract', () => {
    expect(calc.subtract(2,2)).toBe(0)
})

test('multiply', () => {
    expect(calc.multiply(2,3)).toBe(6)
})

test('divide', () => {
    expect(calc.divide(1,1)).toBe(1)
})

test('error', () => {
    expect(calc.add(1,"2")).toBe('wrong type of input')
})