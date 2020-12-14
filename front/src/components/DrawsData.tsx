import React from 'react';
import styled from 'styled-components';
import useData from '../hooks/useData';
import { Image, Popover, Empty } from 'antd';

const DataSection: any = styled.div`
  grid-column: 2 / -2;
  grid-row: 3 / -2;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  justify-items: center;
  align-items: center;
  padding: 4rem 0;
`;

export default function DrawsDataComponent() {
  const { drawsData } = useData();

  return (
    <DataSection>
      {drawsData.data?.length ? (
        drawsData.data?.map((e, i) => (
          <Popover
            content={
              <div>
                <p>{e.date}</p>
                <p>{e.country}</p>
              </div>
            }
            title={e.title}
          >
            <a target="_blank" href={e.link} style={{ width: '1fr' }}>
              <Image
                style={{ marginBottom: '1rem' }}
                width={200}
                preview={false}
                src={e.imgLink}
              ></Image>
            </a>
          </Popover>
        ))
      ) : (
        <Empty></Empty>
      )}
    </DataSection>
    // <Card
    //   hoverable
    //   style={{ width: 240 }}
    //   cover={
    //     <img
    //       alt="example"
    //       src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    //     />
    //   }
    // >
    //   <Meta title="Europe Street beat" description="www.instagram.com" />
    // </Card>
  );
}

{
  /* <div>
        {drawsData.loading && <p>loading</p>}
        {drawsData.data &&
          drawsData.data.map((e, i) => (
            <div key={i}>
              <a target={'_blank'} style={{ fontSize: '2rem' }} href={e.link}>
                바로가기
              </a>
              <span>{e.title}</span>
              <span>{e.country}</span>
              <span>{e.date}</span>
              <span>{e.date.substr(0, 2)}</span>
              <span>{e.date.substr(4, 2)}</span>
              <span>{e.date.substr(8, 5)}</span>
              <Image
                preview={false}
                width={'100px'}
                height={'100px'}
                src={e.imgLink}
              ></Image>
            </div>
          ))}
      </div> */
}
