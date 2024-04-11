import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    // absolute: '',
    default: 'Next.js 14 Tutorial with Typescript',
    template: '%s | Codevolution',
  },
  description: 'Video series by [Codevolution](https://codevolution.com)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'lightblue', padding: '1rem' }}>
          <p className="text-red-500">Header</p>
        </header>

        <main>{children}</main>
        <footer style={{ backgroundColor: 'ghostwhite', padding: '1rem' }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
