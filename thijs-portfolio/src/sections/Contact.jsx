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

        <a href="tel:+17346033127">
            <span><Icon name="phone" /> PHONE</span>
            <b>+1 (734) 603-3127 <Icon name="arrow" /></b>
        </a>

        <a href="https://github.com/thijsdb3" target="_blank" rel="noreferrer">
            <span><Icon name="github" /> GITHUB</span>
            <b>github.com/thijsdb3 <Icon name="arrow" /></b>
        </a>

        <a href="https://www.linkedin.com/in/thijs-de-bock-3784892a6/" target="_blank" rel="noreferrer">
            <span><Icon name="linkedin" /> LINKEDIN</span>
            <b>thijs-de-bock-3784892a6/ <Icon name="arrow" /></b>
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