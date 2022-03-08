console.log('moduleUtils')


import merge from 'lodash.merge';

import * as theme from './abcModule';


const abc = {
  theme: { ...theme},
}




console.log(abc)

console.log('call');
console.log('utilsMerge', merge({}, abc, {theme: {color: { dupa: { lol :999 } }}}))


// const defaultObj = {
//   abc: 1,
// };

export const utilsMerge = (obj: Record<string, unknown>) => {
  return merge(theme, obj);
}




export class Exception extends Error {

  constructor() {
    super('ala ma kota');
  }
}