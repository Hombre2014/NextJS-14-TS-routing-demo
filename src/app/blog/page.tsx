import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: 'Blog', // Will overwrite the template from the parent
  },
};

const BlogPage = () => {
  return <h1>My Blog</h1>;
};

export default BlogPage;
