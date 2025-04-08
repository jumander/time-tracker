import dynamic from 'next/dynamic';

const ClientRouter = dynamic(() => import('./client.js'), {
  ssr: false,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ClientRouter />
      </body>
    </html>
  );
}