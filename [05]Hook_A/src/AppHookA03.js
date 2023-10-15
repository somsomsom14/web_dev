import React from 'react';

export default function AppHookA03() {
  const Hello = () => <div>Hello</div>;
  const Hello2 = (msg) => <div>{msg}</div>;
  const Hello3 = ({ msg }) => <div>[{msg}]</div>;

  return (
    <div>
      {Hello()}
      {Hello2('Hello!!')}
      {Hello3('more!')}
      {Hello3({ msg: 'more!' })}

      <Hello />
      <Hello3 msg="Test!!!" />
    </div>
  );
}
