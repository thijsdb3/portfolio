export default function Hero({ Icon }) {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
          <span className="eyebrow-line" />
        </div>

        <h1>Turning data into<br /><em>understanding.</em></h1>

        <p className="hero-lead">
          I'm Thijs De Bock — a Computer Science and Information Management
          graduate interested in data science, machine learning, and solving
          real-world problems with data.
        </p>

        <div className="hero-actions">
          <a className="button button-dark" href="#projects">
            Explore my work <Icon name="arrow" />
          </a>
          <a className="button button-light" href="mailto:thijsdebock28@gmail.com">
            Contact me
          </a>
        </div>

<div className="hero-meta">
  <span><Icon name="pin" /> Los Angeles, California</span>
  <span className="hero-education">
    <span className="education-icon">✦</span>
    <span className="education-text">
      <strong>KU Leuven</strong>
      <small>Leading European research university</small>
    </span>
  </span>
</div>

      </div>

      <div className="hero-art" aria-label="Abstract data visualization illustration">
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-core"><span>DATA</span><b>↗</b></div>
        <div className="art-label art-label-top">ANALYZE <i>01</i></div>
        <div className="art-label art-label-bottom">DISCOVER <i>02</i></div>
        <div className="art-axis axis-x" />
        <div className="art-axis axis-y" />
        <div className="art-small-note">
          CURIOUS BY NATURE<br />DATA-DRIVEN BY DESIGN
        </div>
      </div>

      <div className="hero-index">
        <span>PORTFOLIO</span>
        <span>2026 — PRESENT</span>
      </div>
    </section>
  );
}