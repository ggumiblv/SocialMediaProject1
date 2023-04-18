import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBsYW5kc2NhcGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60' />
      </div>
      <div className={s.descriptionBlock}>ava + description</div>
    </div>
  );

}
export default ProfileInfo;