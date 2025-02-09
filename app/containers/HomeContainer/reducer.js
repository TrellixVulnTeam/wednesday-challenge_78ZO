/*
 *
 * HomeContainer reducer
 *
 */
import produce from 'immer';
import { createActions } from 'reduxsauce';
import get from 'lodash/get';

export const { Types: homeContainerTypes, Creators: homeContainerCreators } = createActions({
  requestGetItunesData: ['searchTermName'],
  successGetItunesData: ['data'],
  failureGetItunesData: ['error'],
  clearItunesData: []
});
export const initialState = { searchTermName: null, searchTermData: [], searchTermError: null };

/* eslint-disable default-case, no-param-reassign */
export const homeContainerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case homeContainerTypes.REQUEST_GET_ITUNES_DATA:
        draft.searchTermName = action.searchTermName;
        break;
      case homeContainerTypes.CLEAR_ITUNES_DATA:
        return initialState;
      case homeContainerTypes.SUCCESS_GET_ITUNES_DATA:
        draft.searchTermData = action.data;
        break;
      case homeContainerTypes.FAILURE_GET_ITUNES_DATA:
        draft.searchTermError = get(action.error, 'message', 'something_went_wrong');
        break;
    }
  });

export default homeContainerReducer;
