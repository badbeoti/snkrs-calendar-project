import React from 'react';
import { RootState } from '../draws';
import { drawsAsync } from '../draws/action';
import { useSelector, useDispatch } from 'react-redux';

export default function useDraws() {
  const dispatch = useDispatch();
  const drawsList = useSelector((state: RootState) => state.draws.draws);

  const onList = () => dispatch(drawsAsync.request());

  return { drawsList, onList };
}
