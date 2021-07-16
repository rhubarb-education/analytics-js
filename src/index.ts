import store from 'store2';
import api from './api';
import { getId } from './helpers';

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
            console.debug('Action report sent successfully.');
        })
        .catch((error) => {
            console.error('Error sending action report.', error);
        });
};


export const clearActionData = () => {
    store.clearAll(); 
}