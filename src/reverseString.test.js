import reverse from "./reverseString";

test('takes a string then returns it reversed', () => {
    expect(reverse('abc')).toBe('cba');
})