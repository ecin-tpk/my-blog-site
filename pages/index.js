import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { FeaturedPosts } from "../sections";
import { getPosts } from "../services";

const Home = ({ posts }) => (
  <div className="container mx-auto mb-8">
    <FeaturedPosts />
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 col-span-1">
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
      </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="relative top-8 lg:sticky">
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  </div>
);

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

export default Home;
