import React from 'react';

const Docs = ({ params }: { params: { slug: string[] } }) => {
  {
    if (params.slug?.length === 2) {
      return (
        <div>
          <h1>Docs</h1>
          <h2>Viewing docs for feature {params.slug[0]}</h2>
          <h3>and concept {params.slug[1]}</h3>
        </div>
      );
    } else if (params.slug?.length === 1) {
      return (
        <div>
          <h1>Docs</h1>
          <h2>Viewing docs for feature {params.slug[0]}</h2>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>Docs Home page catches all and default</h1>
    </div>
  );
};

export default Docs;
