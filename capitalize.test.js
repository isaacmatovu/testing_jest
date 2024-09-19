import { capitalize,reverseString,analyze } from "./exercise";
import calculator from "./calculator";

test('capitalize the first letter and return the rest in small letters', () => {
  expect(capitalize('isaac')).toMatch('Isaac');
});

test('reverse the string ',() =>{
  expect(reverseString('isaac')).toMatch('caasi');
})

test('calculator methods ',()=>{
  expect(calculator.sum(1,2)).toBe(3);
  
})

test('subtracting method',()=>{
  expect(calculator.subtract(3,2)).toBe(1);
})

test('dividing method',()=>{
  expect(calculator.divide(4,2)).toBe(2);
})

test('multiplying method',()=>{
  expect(calculator.multiply(3,2)).toBe(6);
})


test('object methods',()=>{
  expect(analyze([1,8,3,4,2,6])).toEqual({
      average: 4,
      min : 1,
      max: 8,
      length: 6
  });
 
})

