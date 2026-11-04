import { useState } from 'react';
import Icon from './Icon';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Skills', '#skills'],
    ['Experience', '#experience'],
    ['Contact', '#contact'],
  ];

  return (
    <header className="header">
      <a className="brand" href="#home">
        tdb<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      <nav className={open ? 'nav nav-open' : 'nav'}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}

        <a className="nav-cta" href="mailto:thijsdebock28@gmail.com">
          Get in touch <Icon name="arrow" />
        </a>
      </nav>
    </header>
  );
}