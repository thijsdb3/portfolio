export default function About() {
  return (
    <section className="section-wrap section-block about-section" id="about">
      <div className="section-heading">
        <span className="section-kicker">01 / ABOUT</span>
        <h2>Curiosity meets<br /><em>technical thinking.</em></h2>
      </div>

      <div className="about-content">
        <p className="about-large">
          I'm interested in turning data into insights and using technology to solve real-world problems.
        </p>

        <p>
          I graduated from KU Leuven in Belgium with a Master's degree in
          Information Management and a Bachelor's degree in Computer Science.
          This combination gave me a foundation in programming, statistics,
          data management, and business-oriented problem-solving.
        </p>

        <p>
          I enjoy working across the data lifecycle — from collecting,
          cleaning, and integrating data to exploring patterns, building
          analytical models, and communicating results. I'm interested in
          applying these skills to different industries and types of
          real-world challenges.
        </p>

        <div className="about-facts">
          <div><b>2025</b><span>Graduated</span></div>
          <div><b>KU Leuven</b><span>Belgium</span></div>
          <div><b>Los Angeles</b><span>Currently based</span></div>
        </div>
      </div>
    </section>
  );
}