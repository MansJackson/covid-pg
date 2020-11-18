import { Dispatch } from 'redux';

export const setGeneral = (payload: string) => (dispatch: Dispatch): void => {
  dispatch({
    type: 'SET_GENERAL',
    payload,
  });
};
