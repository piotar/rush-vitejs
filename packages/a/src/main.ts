import { Exception } from '@localxx/utils';

console.log('moduleA', new Exception())


// import deepmerge from 'deepmerge';


// export const aMerge = (obj: Record<string, unknown>) => {
//     return deepmerge(obj, utilsMerge({ formA: 444 }, obj));
// }

// export const resultMerge = aMerge({merg: 22});


export const AException = Exception;


import { createStore, applyMiddleware } from 'redux';
import dynamicMiddlewares from 'redux-dynamic-middlewares';

export const store = createStore((s) => s, applyMiddleware(
    // ... other static middlewares
    dynamicMiddlewares as any
));
