import { createReducer } from 'typesafe-actions';
import {
  DRAWS_REQUEST,
  DRAWS_SUCCESS,
  DRAWS_FAILURE,
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE,
} from './action';
import { DrawsState, DrawsAction, DataState, DataAction } from './type';

const initialState: DrawsState = {
  draws: {
    loading: false,
    error: null,
    data: null,
  },
};

const dataInitialState: DataState = {
  draws: {
    loading: false,
    error: null,
    data: null,
  },
};

const draws = createReducer<DrawsState, DrawsAction>(initialState, {
  [DRAWS_REQUEST]: (state) => ({
    ...state,
    draws: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [DRAWS_SUCCESS]: (state, action) => ({
    ...state,
    draws: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [DRAWS_FAILURE]: (state, action) => ({
    ...state,
    draws: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

const data = createReducer<DataState, DataAction>(dataInitialState, {
  [DATA_REQUEST]: (state) => ({
    ...state,
    draws: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [DATA_SUCCESS]: (state, action) => ({
    ...state,
    draws: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [DATA_FAILURE]: (state, action) => ({
    ...state,
    draws: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export { draws, data };
