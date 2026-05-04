function About({ authors, tags }) {
  return (
    <section className="about-section">
      <div className="about-info">
        <div className="section-title">
          <p>ABOUT THE DISPATCH</p>
          <span className="about-border"></span>
        </div>
        <div className="about-content">
          <p>
            A community platform for writers who care about craft. No
            algorithms. No ads. Just good writing.
          </p>
        </div>
        <button>Join Today</button>
      </div>
      {/* AUTHORS SECTION */}
      <div className="authors-section">
        <div className="section-title">
          <p>TOP CONTRIBUTORS</p>
          <span className="about-border"></span>
        </div>
        <div className="authors-list">
          {authors.map((author, index) => (
            <div key={`${author.name}-${author.post}`} className="author">
              <div>
                <img src={author.profile_pic} />
                <span>{author.full_name}</span>
              </div>
              <span className="author_articles">{author.posts} articles</span>
            </div>
          ))}
        </div>
      </div>
      <div className="tags-section">
        <div className="section-title">
          <p>TAGS</p>
          <span className="about-border"></span>
        </div>
        <div className="all-tags">
          {tags.map((tag, index) => (
            <button key={`${tag}.${index}`} className="tag">
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
