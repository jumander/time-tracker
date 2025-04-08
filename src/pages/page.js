import { useState } from 'react';
import { Link } from 'react-router-dom'

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
      <Link to='/about'>To about</Link>
    </div>
  )
}