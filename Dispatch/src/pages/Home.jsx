import Hero from "../components/hero";
import Articles_section from "../components/articles_section.jsx";

function Home({ posts, tags, authors }) {
  return (
    <>
      <Hero />
      <Articles_section posts={posts} tags={tags} authors={authors} />
    </>
  );
}

export default Home