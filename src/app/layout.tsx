import './globals.css'; // Make sure this points to your CSS file

export const metadata = {
  title: 'Canadian HCN Generator',
  description: 'Random HCN generator',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}