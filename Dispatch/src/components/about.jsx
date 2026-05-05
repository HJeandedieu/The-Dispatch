function About({ authors, tags }) {
  return (
    <section className="about-section">
      <Dispatch_card title="about the dispatch" />
      <Authors_card title="top contributors" authors={authors} />
      <Tags_card title="tags" tags={tags} />      
      
    </section>
  );
}

function Dispatch_card({title}){
  return(
    <div className="about-info">
        <div className="section-title">
          <p>{title}</p>
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
  )
}

function Authors_card({ title,authors }){
  return(
    <div className="authors-section">
        <div className="section-title">
          <p>{title}</p>
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
  )
}

function Tags_card({ title, tags }){
  return (
    <div className="tags-section">
        <div className="section-title">
          <p>{title}</p>
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
  )
}

export {About, Dispatch_card, Authors_card, Tags_card };
