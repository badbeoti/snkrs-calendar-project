import React, { useEffect } from 'react';
import useDraws from '../hooks/useDraws';
import useData from '../hooks/useData';
import { Image } from 'antd';

export default function Draws() {
  const { drawsList, onList } = useDraws();
  const { drawsData, onData } = useData();
  useEffect(() => {
    onList();
  }, []);

  return (
    <div>
      {drawsList.loading && <p>loading</p>}
      {drawsList.data &&
        drawsList.data.map((e, i) => (
          <div
            style={{ display: 'inline-block' }}
            key={i}
            onClick={() => onData(i)}
          >
            <Image
              preview={false}
              width={'200px'}
              height={'200px'}
              src={e.imgLink}
            ></Image>
          </div>
        ))}
      <div>
        {drawsData.loading && <p>loading</p>}
        {drawsData.data &&
          drawsData.data.map((e, i) => (
            <div style={{ display: 'inline-block' }} key={i}>
              <a target={'_blank'} style={{ fontSize: '2rem' }} href={e.link}>
                바로가기
              </a>
              <span>{e.title}</span>
              <span>{e.country}</span>
              <span>{e.date}</span>
              <Image
                preview={false}
                width={'200px'}
                height={'200px'}
                src={e.imgLink}
              ></Image>
            </div>
          ))}
      </div>
    </div>
  );
}
