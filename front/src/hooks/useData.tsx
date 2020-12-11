import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../draws';
import { dataAsync } from '../draws/action';

export default function useData() {
  const dispatch = useDispatch();
  const drawsData = useSelector((state: RootState) => state.data.draws);

  const onData = (i: number) => dispatch(dataAsync.request(i));

  return { drawsData, onData };
}
