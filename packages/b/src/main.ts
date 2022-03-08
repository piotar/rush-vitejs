import { AException } from '@localxx/a';

import { Exception } from '@localxx/utils';

console.log('moduleB', new Exception())

console.log('e', new AException() instanceof Exception)

export const BException = Exception