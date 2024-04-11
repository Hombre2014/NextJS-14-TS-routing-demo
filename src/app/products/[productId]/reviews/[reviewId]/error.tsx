'use client';

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      {/* <h3>Error in review ID</h3> */}
      <p>{error.message}</p>
    </div>
  );
}
