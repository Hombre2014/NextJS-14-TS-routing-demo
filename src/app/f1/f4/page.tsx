import Link from 'next/link';

const F4 = () => {
  return (
    <div>
      <h1>F4 page</h1>
      <Link href="/f1/f3">F3</Link>
      <br></br>
      <Link href="/about">About</Link>
    </div>
  );
};

export default F4;
