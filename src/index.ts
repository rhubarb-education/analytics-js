import store from 'store2';
import { ApiAction } from './actions';
import api from './api';
import { getId } from './helpers';

export { ApiAction } from './actions';

export const reportAction = (
  courseId: string,
  action: ApiAction,
  data: object
) => {
  api
    .post('action', {
      id: getId(),
      uuid: courseId,
      action,
      data: {
        ...data,
        env: process.env.NODE_ENV,
      },
    })
    .then(() => {
      console.debug('Action report sent successfully.');
    })
    .catch((error) => {
      console.debug('Error sending action report.', error);
    });
};

export const clearActionData = () => {
  store.clearAll();
};
