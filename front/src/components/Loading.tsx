import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';

const LoadingSection: any = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Loading() {
  return (
    <LoadingSection>
      <Spin size={'large'}></Spin>
      <span style={{ display: 'block', fontSize: '2rem' }}>Loading...</span>
    </LoadingSection>
  );
}
