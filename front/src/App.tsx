import React from 'react';
import './App.css';
import styled from 'styled-components';
import Draws from './components/Draws';
import Loading from './components/Loading';
import useDraws from './hooks/useDraws';
import useData from './hooks/useData';

const AppSection: any = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
`;

declare module 'styled-components' {
  export interface DefaultTheme {}
}

function App() {
  const { drawsList } = useDraws();
  const { drawsData } = useData();
  return (
    <AppSection>
      {drawsList.loading && <Loading></Loading>}
      {drawsData.loading && <Loading></Loading>}
      <Draws></Draws>
    </AppSection>
  );
}

export default App;
