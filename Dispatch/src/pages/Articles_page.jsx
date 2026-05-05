import Articles from "../components/articles.jsx"
import { Authors_card, Tags_card } from "../components/about.jsx";

function Articles_page({posts, tags, authors}){
    return (
        <>
        <section className="info-section">
            <Articles posts={posts} />
            <section className="about-section">
                <Authors_card title="Browse by Tag" authors={authors} />
                <Tags_card title="top contributors" tags={tags} />
            </section>
        </section>
        </>
    )
}

export default Articles_page