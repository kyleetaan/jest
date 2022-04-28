// const capitalize = require('./capital')
import capitalize from './capital.js';

test('Take a string return with first character capitalized', () => {
    expect(capitalize('string')).toBe('String');
})


test('Take a string return with first character capitalized', () => {
    expect(capitalize('x')).toBe('X');
})

test('Take a string return with first character capitalized', () => {
    expect(capitalize('')).toBe('');
})
