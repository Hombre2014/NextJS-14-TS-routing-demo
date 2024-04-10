export const metadata = {
  title: 'Next.js 14 Tutorial with Typescript',
  description: 'Video series by [Codevolution](https://codevolution.com)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
