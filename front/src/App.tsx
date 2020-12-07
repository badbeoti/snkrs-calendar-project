import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Calendar, Badge } from 'antd';
import styled from 'styled-components';
import './App.css';

declare module 'styled-components' {
  export interface DefaultTheme {}
}

interface dataFace {
  index: number;
  link: string;
  imgLink: string;
}

const TestSection: any = styled.div`
  .events {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .events .ant-badge-status {
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  .notes-month {
    text-align: center;
    font-size: 28px;
  }
  .notes-month section {
    font-size: 28px;
  }
`;

function getListData(value: any) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value: any) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map((item: any) => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value: any) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value: any) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

function App() {
  const [data, setData] = useState<dataFace[] | null>([]);
  useEffect(() => {
    async function get() {
      const result = await axios.get('http://localhost:4000');
      setData(result.data);
    }
    get();
  }, []);
  return (
    <TestSection>
      {data!.map((e, i) => (
        <div key={i}>
          {e.link}
          <Image width={'200px'} height={'200px'} src={e.imgLink}></Image>
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
