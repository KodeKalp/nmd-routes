
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const HeaderWithCSS = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <div className="logo">Company Logo</div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/team" className="nav-link">Team</a>
            <a href="/blog" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button" 
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="mobile-nav">
             <a href="/" className="nav-link">Home</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/team" className="nav-link">Team</a>
            <a href="/blog" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
        )}
      </div>
      
      {/* CSS Styles */}
      <style jsx>{`
        .header {
          background-color: #2563eb;
          color: white;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        
        .logo {
          font-size: 1.25rem;
          font-weight: bold;
        }
        
        .desktop-nav {
          display: none;
        }
        
        .nav-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .nav-link:hover {
          color: #bfdbfe;
        }
        
        .desktop-nav .nav-link {
          margin-left: 1.5rem;
        }
        
        .mobile-menu-button {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-menu-button:focus {
          outline: none;
        }
        
        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding-bottom: 1rem;
        }
        
        .mobile-nav .nav-link {
          padding: 0.5rem 0;
        }
        
        /* Media query for desktop */
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          
          .mobile-menu-button {
            display: none;
          }
          
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default HeaderWithCSS;