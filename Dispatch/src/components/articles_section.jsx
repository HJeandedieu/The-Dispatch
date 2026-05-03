import About from "./about.jsx";
import Articles from "./articles";

function Articles_section({posts, authors, tags}){
    return (
        <section className="info-section">
               <Articles posts={posts} />
               <About authors={authors} tags={tags} /> 
      </section>
    )
}

export default Articles_section;