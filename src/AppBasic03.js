import React from 'react';

export default function AppBasic03() {
  const msg = '노래 추천 블로그';
  const time = new Date().toString();

  return <div>
    <h1>{msg}</h1>
    {time}
    </div>;
  
}
