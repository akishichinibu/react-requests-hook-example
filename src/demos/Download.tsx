import { FC } from 'react';
import { useGet } from "@akishichinibu/react-requests-hook";


interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


const DownloadDemo: FC = () => {
  const { payload, state, progress, isLoading, refresh } = useGet<Post[]>({ initialUrl: "/api/posts" });

  return (
    <div className="App">
      <div>{state}</div>
      <div>{progress * 100}%</div>
      <div>{isLoading ? "Loading..." : JSON.stringify(payload, null, 4)}</div>
      <div><button onClick={() => refresh()}>Refresh</button></div>
    </div>
  );
}


export default DownloadDemo;
