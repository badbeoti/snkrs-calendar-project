import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      setData(result.data);
    }
    get();
    console.log(data);
  }, [data]);
  return (
    <>
      {data!.map((e, i) => (
        <li key={i}>
          {e.link}
          <img src={e.imgLink}></img>
        </li>
      ))}
    </>
  );
}

export default App;
