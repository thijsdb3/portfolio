export default function Skills({ skillGroups }) {
  return (
    <section className="section-wrap section-block skills-section" id="skills">
      <div className="section-heading">
        <span className="section-kicker">03 / TOOLKIT</span>
        <h2>Skills built<br /><em>Through Practice</em></h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map(([group, items], i) => (
          <div className="skill-group" key={group}>
            <div className="skill-group-head">
              <span>0{i + 1}</span>
              <h3>{group}</h3>
            </div>

            <div className="tag-list">
              {items.map((item, j) => (
                <span key={`${item}-${j}`}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}