import React from 'react';

export default function AppHookA02() {
  const Hello = () => <div>Hello</div>;
  const Hello2 = (msg) => {
    return <div>{msg}</div>;
  };

  function Hello3(msg) {
    return <div>{msg}</div>;
  }

  return (
    <div>
      {Hello()}
      {Hello2('Hello!!')}
      {Hello3('Good!!')}
    </div>
  );
}
