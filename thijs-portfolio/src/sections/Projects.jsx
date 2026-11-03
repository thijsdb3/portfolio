export default function Projects({ projects, Icon, ProjectVisual }) {
  return (
    <section className="projects-section" id="projects">
      <div className="section-wrap section-block">
        <div className="section-heading projects-heading">
          <div>
            <span className="section-kicker">02 / SELECTED WORK</span>
            <h2>Projects with a<br /><em>purpose.</em></h2>
          </div>

          <p>
            A selection of projects where I've explored data, built workflows,
            and applied technology to practical questions.
          </p>
        </div>

        <div className="project-list">
          {projects.map((p) => (
            <article className="project-card" key={p.number}>
              <div className="project-main">
                <div className="project-number">
                  {p.number} <span>{p.year}</span>
                </div>

                <div className="project-info">
                  <div className="project-type">{p.type}</div>
                  <h3>{p.title}</h3>
                  <p className="project-intro">{p.intro}</p>
                  <p className="project-description">{p.description}</p>

                  <ul>
                    {p.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>

                  <div className="tag-list">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>

                  <div className="project-link">
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noreferrer">
                        {p.linkLabel || 'View on GitHub'} <Icon name="external" />
                      </a>
                    )}

                    {p.liveLink && (
                      <a href={p.liveLink} target="_blank" rel="noreferrer">
                        Play the game <Icon name="external" />
                      </a>
                    )}

                    {p.demoLink && (
                      <a href={p.demoLink} target="_blank" rel="noreferrer">
                        Watch gameplay demo <Icon name="external" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-art">
                <ProjectVisual type={p.visual} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}