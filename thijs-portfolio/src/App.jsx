import Header from './components/header';
import Icon from './components/icon';
import ProjectVisual from './components/projectvisual';

import projects from './data/project';
import skillGroups from './data/skills';

import Hero from './sections/hero';
import About from './sections/about';
import Projects from './sections/projects';
import Skills from './sections/skills';
import Experience from './sections/experience';
import Extras from './sections/extras';
import Contact from './sections/contact';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero Icon={Icon} />

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <span className="strip-label">A LITTLE ABOUT MY WORK</span>
                  <p>
          From messy datasets to meaningful insights — I enjoy connecting
          <b> data, technology, and problem-solving.</b>
        </p>
            <span className="strip-mark">✳</span>
          </div>
        </section>

        <About />

        <Projects
          projects={projects}
          Icon={Icon}
          ProjectVisual={ProjectVisual}
        />

        <Skills skillGroups={skillGroups} />

        <Experience />

        <Extras />

        <Contact Icon={Icon} />
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home">
            tdb<span>.</span>
          </a>
          <span>Designed & built with curiosity.</span>
          <span>© {new Date().getFullYear()} Thijs De Bock</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;