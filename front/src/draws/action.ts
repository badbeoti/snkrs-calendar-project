import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { createAsyncAction, AsyncActionCreatorBuilder } from 'typesafe-actions';
import { DrawsData, DrawsList } from '../api/draws';

export const DRAWS_REQUEST = 'DRAWS_REQUEST';
export const DRAWS_SUCCESS = 'DRAWS_SUCCESS';
export const DRAWS_FAILURE = 'DRAWS_FAILURE';

export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAILURE = 'DATA_FAILURE';

export const drawsAsync = createAsyncAction(
  DRAWS_REQUEST,
  DRAWS_SUCCESS,
  DRAWS_FAILURE
)<undefined, DrawsList, AxiosError>();

export const dataAsync = createAsyncAction(
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_FAILURE
)<number, DrawsData, AxiosError>();

// export const fn = (
//   a: AsyncActionCreatorBuilder<['DRAWS_REQUEST',undefined],['DRAWS_SUCCESS',],[]
// )
