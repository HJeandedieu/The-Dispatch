import Hero from "../components/hero.jsx";
import Articles_section from "../components/articles_section.jsx";

function Home_page({ posts, tags, authors }) {
  return (
    <>
      <Hero />
      <Articles_section posts={posts} tags={tags} authors={authors} />
    </>
  );
}

export default Home_page;
