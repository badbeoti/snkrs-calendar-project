import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Calendar } from 'antd';
import './App.css';
import {
  dateCellRender,
  TestSection,
  monthCellRender,
} from './components/Calendar';

declare module 'styled-components' {
  export interface DefaultTheme {}
}

interface dataFace {
  index: number;
  link: string;
  imgLink: string;
}

function App() {
  const [data, setData] = useState<dataFace[] | null>([]);
  useEffect(() => {
    async function get() {
      const result = await axios.get('http://localhost:4000');
      console.log(result.data);
      setData(result.data);
    }
    get();
  }, []);

  const onClick = async (i: number) => {
    console.log(i);
    const result = await axios.get(`http://localhost:4000/${i}`);
    console.log(result.data);
  };
  return (
    <TestSection>
      {data!.map((e, i) => (
        <div
          style={{ display: 'inline-block' }}
          key={i}
          onClick={() => onClick(i)}
        >
          <Image
            preview={false}
            width={'200px'}
            height={'200px'}
            src={e.imgLink}
          ></Image>
        </div>
      ))}
      <Calendar
        dateCellRender={dateCellRender}
        monthCellRender={monthCellRender}
      />
    </TestSection>
  );
}

export default App;
