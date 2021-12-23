import { FC, useCallback, Reducer, useReducer, useState } from 'react';
import { useGet } from "@akishichinibu/react-requests-hook";

import "./ApiDemo.css";

import Loading from 'src/utils/Loading';
import NumberInput from 'src/utils/NumberInput';
import Table from 'src/utils/Table';
import Button from 'src/utils/Button';
import { Nullable } from '@akishichinibu/react-requests-hook/lib/utils';


interface BaseWithId {
  id: number;
}


interface Post extends BaseWithId {
  title: string;
  body: string;
  userId: number;
}


interface Comment extends BaseWithId {
  id: number;
  name: string;
  email: string;
  body: string;
}


const ApiListDemo: FC = () => {
  const [userId, setUserId] = useState<Nullable<number>>(null);
  const [postId, setPostId] = useState<Nullable<number>>(null);

  const listRequestUrl = userId === null ? null : `/posts?userId=${userId}`;
  const { payload: posts, error: postsError, isLoading: isPostLoading, refresh: refreshPost } = useGet<Post[]>({ initialUrl: null });
  const { payload: comments, isLoading: isCommentLoading, refresh: refreshComment } = useGet<Comment[]>({ initialUrl: null });

  const payloadWithOption = (posts === null ? [] : posts).map((r) => {
    const commentRequestUrl = `/posts/${r.id}/comments`;
    return {
      ...r,
      option: <Button text='Show Comment' onClick={() => { setPostId(r.id); refreshComment({ newUrl: commentRequestUrl }); }} />
    }
  });

  const postTableHeader = ["id", "title", "body", "userId", "option"];
  const commentTableHeader = ["id", "body"];

  return (
    <section className="container demo-api-list">

      <div>
        <div className='header'>
          <NumberInput htmlId={`params-user-id`} label={"userId"} onChange={setUserId} />
        </div>

        <div>
          <div>
            {
              listRequestUrl === null ?
                <span>Input the userId to fetch posts</span> :
                <span>The request will be send to <strong>{listRequestUrl}</strong> if you click `refresh` button. </span>
            }
          </div>

          <div>
            <Button text='refresh' onClick={() => refreshPost({ newUrl: listRequestUrl ?? undefined })}></Button>
          </div>
        </div>
      </div>

      {isPostLoading ? <Loading /> :
        postsError ? { postsError } : 
        <Table title={"Post"} headers={postTableHeader} data={payloadWithOption} />}
      {isCommentLoading ? <Loading /> : <Table title={postId === null ? 'comments' : `comments of Post ${postId}`} headers={commentTableHeader} data={comments ?? []} />}
    </section>
  );
}


export default ApiListDemo;
