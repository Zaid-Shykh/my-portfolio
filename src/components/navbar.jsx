
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Education', '#education'],
    ['Contact', '#contact']
  ];

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu}>
          ZS<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
