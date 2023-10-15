import React from 'react';

export default function AppHookA05() {
  function handleClick1() {
    alert('클릭함');
  }

  const handleClick2 = () => alert('클릭함');
  const handleClick3 = () => {
    return alert('클릭함');
  };

  return (
    <div>
      <button onClick={handleClick1}>click1</button>
      <button onClick={handleClick2}>click2</button>
      <button onClick={handleClick3}>click3</button>
      <button onClick={() => alert('클릭함4')}>click4</button>
      <button
        onClick={() => {
          const msg = 'test';
          alert(msg);
        }}
      >
        click5
      </button>

      <input
        type="text"
        style={{ borderColor: 'red', borderWidth: 2 }}
        onChange={(evt) => alert(evt.target.value)}
      />
    </div>
  );
}
