import React from 'react';
import useDraws from '../hooks/useDraws';

export default function DrawsTest() {
  const { drawsList, onList } = useDraws();

  return (
    <div>
      <button onClick={onList}></button>
      {drawsList.loading && <p>loading</p>}
      {drawsList.data &&
        drawsList.data.map((e) => (
          <div>
            <span>{e.index}</span>
            <span>{e.imgLink}</span>
            <span>{e.link}</span>
          </div>
        ))}
    </div>
  );
}
