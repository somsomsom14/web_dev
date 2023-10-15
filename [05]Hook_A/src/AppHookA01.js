import React from 'react';

export default function AppHookA01() {
  const add = (x, y) => x + y;

  const add2 = (x, y) => {
    return x + y;
  };
  function add3(x, y) {
    return x + y;
  }

  const calc = (x, y, op) => {
    if (op == '+') return x + y;
    else if (op == '-') return x - y;
    else if (op == '*') return x * y;
    else if (op == '/') return x / y;

    return null;
  };

  return (
    <div>
      <div>3+4={add(3, 4)}</div>
      <div>3+4={calc(3, 4, '+')}</div>
      <div>3-4={calc(3, 4, '-')}</div>
      <div>3*4={calc(3, 4, '*')}</div>
    </div>
  );
}
