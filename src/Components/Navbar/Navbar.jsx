import React, { Component } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    menuOpen: false,
    activeSection: "home",
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    this.setState({ scrolled: scrollPosition > 50 });
  };

  toggleMenu = () => {
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  handleNavClick = (section) => {
    this.setState({ activeSection: section });
    this.closeMenu();
  };

  render() {
    const { menuOpen, activeSection, scrolled } = this.state;
    const navItems = [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "portfolio", label: "Portfolio" },
      { id: "contact", label: "Contact" },
    ];

    return (
      <>
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
          <div className="navbar-container">
            <a
              href="#home"
              className="brand-name"
              onClick={() => this.handleNavClick("home")}
            >
              Veeru Dev
            </a>

            <button
              className="menu-button"
              onClick={this.toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
              <ul className="nav-list">
                {navItems.map((item) => (
                  <li key={item.id} className="nav-item">
                    <a
                      href={`#${item.id}`}
                      className={`nav-link ${
                        activeSection === item.id ? "active" : ""
                      }`}
                      onClick={() => this.handleNavClick(item.id)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="cta-button" onClick={this.closeMenu}>
                Get Started
              </button>
            </div>
          </div>
        </nav>
        {menuOpen && (
          <div className="menu-backdrop" onClick={this.closeMenu}></div>
        )}
      </>
    );
  }
}

export default Navbar;
