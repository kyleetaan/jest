import cipher from "./caesarCipher";

test('shift', () => {
    expect(cipher('attack at dawn', 1, true)).toBe('buubdl bu ebxo')
})

test('shift', () => {
    expect(cipher('test this sentence', 5, true)).toBe('yjxy ymnx xjsyjshj')
})

test('decrypt', () => {
    expect(cipher('c fcey viiem', 20, false)).toBe('i like books')
})

test('decrypt', () => {
    expect(cipher(`ebobg'f grfg mkl.`, 13, false)).toBe(`robot's test zxy.`)
})