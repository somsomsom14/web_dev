import React from 'react';

export default function AppHookA04() {
  const item = [10, 40, 30];
  const item2 = ['Hello', 'Good'];
  const item3 = item.map((x) => x * 10);

  return (
    <div>
      <div>{item}</div>
      <div>{item2}</div>
      <div>{item3}</div>

      <div>{item.map((x) => x * 10)}</div>
      <div>{item2.map((x) => '[' + x + ']')}</div>

      {item2.map((x) => (
        <div style={{ color: 'red' }}>[{x}]</div>
      ))}
    </div>
  );
}
