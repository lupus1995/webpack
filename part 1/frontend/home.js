'use strict';

import welcome from './welcome';
welcome('home war');
if (process.env.NODE_ENV === 'development') {
    console.log('development');
}
console.log(555);

export {
    welcome
};
