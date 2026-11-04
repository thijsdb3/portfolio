import Header from './components/Header';
import Icon from './components/Icon';
import ProjectVisual from './components/Projectvisual';

import projects from './data/project';
import skillGroups from './data/skills';

import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Extras from './sections/Extras';
import Contact from './sections/Contact';

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