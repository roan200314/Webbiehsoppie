export const red = new Set<number>([32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3]);
export const black = new Set<number>([15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26]);
export const even = new Set<number>([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]);
export const odd = new Set<number>([1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]);
export const green = 0;

export type Color = 'red' | 'black' | 'green';
export type Parity = 'even' | 'odd' | 'na';

export function classifyNumber(n: number) {

  let color: Color;
  let parity: Parity;

  if (n === 0) {
    color = 'green';
    parity = 'na';
    return { number: n, color, parity };
  } else if (red.has(n)) {
    color = 'red';
    parity = n % 2 === 0 ? 'even' : 'odd';
  } else if (black.has(n)) {
    color = 'black';
    parity = n % 2 === 0 ? 'even' : 'odd';
  } else {
    throw new Error('Onbekend nummer voor dit bord');
  }

  return { number: n, color, parity };
}


