import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <h1>Welcome Home</h1>
      <Link href="/about">About</Link>
      <br></br>
      <Link href="/blog">Blog</Link>
      <br></br>
      <Link href="/dashboard">Dashboard</Link>
      <br></br>
      <Link href="/products">Products</Link>
      <br></br>
    </>
  );
};

export default HomePage;
