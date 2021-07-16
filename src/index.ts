export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};



// import Cookies from 'js-cookie';
import api from './api';
import { generateId } from './helpers';

const getId = () => {
    // if (!Cookies.get('bfg_id')) {
    //     Cookies.set('bfg_id', generateId());
    // }

    // return Cookies.get('bfg_id');
    return generateId();
};



export const reportAction = (action: ApiAction, mid: string, data: object) => {
    api.post('debug', {
        action,
        mid,
        identifier: getId(),
        data: {
            action,
            ...data,
            env: process.env.NODE_ENV,
        },
    })
        .then(() => {
            console.log('Analytics sent successfully.');
        })
        .catch((error) => {
            console.log('Error sending analytics', error);
        });
};
