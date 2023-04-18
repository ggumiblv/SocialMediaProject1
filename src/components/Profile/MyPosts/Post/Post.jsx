import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return (<div>

    <div className={s.item}>
      <img src='https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg' />
      { props.message }
      <div>
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  </div>
  )
}
export default Post;