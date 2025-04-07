
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>Count: {count}</p>
    </main>
  );
}

// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         {children}
//       </body>
//     </html>
//   );
// }
