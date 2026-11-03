export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="section-wrap section-block">
        <div className="section-heading">
          <span className="section-kicker">04 / BACKGROUND</span>
          <h2>Where I've<br /><em>learned and grown.</em></h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2024 — 2025</div>
            <div className="timeline-body">
              <span className="timeline-type">EDUCATION · LEUVEN, BELGIUM</span>
              <h3>Master in Information Management</h3>
              <h4>KU Leuven</h4>
              <p>
                Relevant coursework: Data Visualization, Business Analysis,
                Data Science for Business, Requirements Engineering and Domain
                Modelling, ICT Service Management, Statistical Software.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2020 — 2025</div>
            <div className="timeline-body">
              <span className="timeline-type">EDUCATION · LEUVEN, BELGIUM</span>
              <h3>Bachelor in Computer Science</h3>
              <h4>KU Leuven</h4>
              <p>
                Relevant coursework: Statistics, Algorithms & Data Structures,
                Software Architecture, Operating Systems, Computer Networks.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">JUL — SEP 2020</div>
            <div className="timeline-body">
              <span className="timeline-type">
                PROFESSIONAL EXPERIENCE · MECHELEN, BELGIUM
              </span>
              <h3>Student Developer</h3>
              <h4>DIPU BV</h4>
              <p>
                Worked in a four-person development team on a full-stack
                software development internship using C# and .NET Core.
                Contributed to requirements translation, implementation,
                troubleshooting, testing, and code reviews.
              </p>
              <div className="tag-list">
                <span>C#</span>
                <span>.NET Core</span>
                <span>Object-Oriented Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}