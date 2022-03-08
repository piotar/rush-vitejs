import { AException } from '@localxx/a';
import { BException } from '@localxx/b';
import { Exception } from '@localxx/utils';

console.log('app', new Exception())
console.log('appA', new AException())
console.log('appB', new BException())

