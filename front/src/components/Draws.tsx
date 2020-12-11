import React, { useEffect } from 'react';
import useDraws from '../hooks/useDraws';
import useData from '../hooks/useData';
import styled from 'styled-components';
import { Image } from 'antd';
import DrawsDataComponent from '../components/DrawsData';
import { DrawsList } from '../api/draws';

type PropsType = {
  isLoading: boolean;
  isLoadingData: boolean;
  showingData: boolean;
  drawsList: DrawsList;
};

const MainSection: any = styled.div`
  width: 100%;
  display: ${(props: PropsType) =>
    props.isLoading || props.isLoadingData ? 'none' : 'grid'};
  grid-template-columns: 4rem 1fr 4rem;
  grid-template-rows: 4rem 2fr 8fr 4rem;
`;

const DrawsSection: any = styled.div`
  grid-column: 2 / -2;
  grid-row: 2 / ${(props: PropsType) => (props.showingData ? '-3' : '-2')};
  display: grid;
  grid-template-columns: repeat(
    ${(props: PropsType) => (props.showingData ? props.drawsList.length : '7')},
    1fr
  );
  gap: 2em;
  justify-content: center;
  justify-items: center;
  align-content: center;
`;

export default function Draws() {
  const { drawsList, onList } = useDraws();
  const { drawsData, onData } = useData();
  useEffect(() => {
    onList();
  }, []);

  return (
    <MainSection
      isLoading={drawsList.loading}
      isLoadingData={drawsData.loading}
    >
      <DrawsSection
        drawsList={drawsList.data}
        isLoading={drawsList.loading}
        isLoadingData={drawsData.loading}
        showingData={drawsData.data}
      >
        {drawsList.data &&
          drawsList.data.map((e, i) => (
            <Image
              onClick={() => onData(i)}
              key={i}
              preview={false}
              src={e.imgLink}
            ></Image>
          ))}
      </DrawsSection>
      {drawsData.data && <DrawsDataComponent></DrawsDataComponent>}
    </MainSection>
  );
}
