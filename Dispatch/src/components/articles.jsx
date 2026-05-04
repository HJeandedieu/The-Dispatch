function Articles({ posts }) {
  return (
    <section className="articles-section">
      {/* ARTICLES SECTION INTRO */}
      <div className="articles-intro">
        <p>Latest Articles</p>
      </div>
      {/* POST SHOWCASE */}
      <section className="posts-container">
        {posts.map((post, index) => (
          <div
            key={`${post.author}.${post.read_min}`}
            className="post_instance"
          >
            <span className="article-border"></span>
            {/* CARD PROFILE */}
            <div className="profile">
              <img src="{ post.profile_pic }" />
              <span className="card-author-name">{post.author}</span>
              <span className="card-dot">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span className="card-date-posted">{post.date}</span>
            </div>

            {/* CARD CONTENT */}
            <div className="main-content">
              <p className="card-title">{post.title}</p>
              <p className="card-content">{post.content}</p>
            </div>
            <div className="bottom-labels">
              <span className="card_label">{post.category}</span>
              <span className="card_read_min">{post.read_min} read min</span>
            </div>
          </div>
        ))}
      </section>

      {/* PAGINATION */}
      <div className="page-nav-buttons">
        <button className="previous">Prev</button>
        <button className="numbers">1</button>
        <button className="numbers">2</button>
        <button className="numbers">3</button>
        <button className="next">Next</button>
      </div>
    </section>
  );
}

export default Articles;
