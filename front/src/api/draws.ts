import axios from 'axios';

export async function getDrawsList() {
  const response = await axios.get<DrawsList>(
    'http://ec2-3-34-140-151.ap-northeast-2.compute.amazonaws.com:4000/'
  );
  return response.data;
}

export async function getDrawsData(i: number) {
  const response = await axios.get<DrawsData>(
    `http://ec2-3-34-140-151.ap-northeast-2.compute.amazonaws.com:4000/${i}`
  );
  return response.data;
}

export type DrawsList = {
  index: number;
  link: string;
  imgLink: string;
}[];

export type DrawsData = {
  index: number;
  imgLink: string;
  title: string;
  date: string;
  country: string;
  link: string;
}[];
