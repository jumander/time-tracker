'use client';
import { useState } from 'react';

export default function MyButton()
{
  const [count, setCount] = useState(0);

  function handleClick()
  {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>React</button>
      <p>Button pressed {count} times</p>
    </div>
  )
}