import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'portfolio'],
  ['Education', 'education'],
  ['Contact', 'contact'],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu}>MZ<span>.</span></a>
        <div className="desktop-nav">
          {links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}
        </div>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="menu-toggle"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
        <div className={`mobile-nav${isOpen ? ' is-open' : ''}`} id="mobile-navigation" hidden={!isOpen}>
          {links.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
