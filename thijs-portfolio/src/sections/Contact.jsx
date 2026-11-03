export default function Contact({ Icon }) {
  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <div>
          <span className="section-kicker">07 / CONTACT</span>
          <h2>
            Have a question<br />
            or an opportunity?<br />
            <em>Let's talk.</em>
          </h2>
          <p>
            I'm always interested in connecting about data, technology,
            and new opportunities.
          </p>
        </div>

        <div className="contact-details">
          <a href="mailto:thijsdebock28@gmail.com">
            <span><Icon name="mail" /> EMAIL</span>
            <b>thijsdebock28@gmail.com <Icon name="arrow" /></b>
          </a>

          <a href="https://github.com/thijsdb3" target="_blank" rel="noreferrer">
            <span><Icon name="github" /> GITHUB</span>
            <b>github.com/thijsdb3 <Icon name="arrow" /></b>
          </a>

          <div className="contact-location">
            <span><Icon name="pin" /> LOCATION</span>
            <b>Los Angeles, California</b>
          </div>

          <div className="contact-location">
            <span>LANGUAGES</span>
            <b>Dutch · English</b>
          </div>
        </div>
      </div>
    </section>
  );
}