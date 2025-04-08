// components/Footer.js

function Footer() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
            <div className="leftSection">
              <h3 className="heading">🍦 SweetTreats Ice Cream Co.</h3>
              <p className="tagline">Scooping joy one cone at a time.</p>
            </div>
  
            <div className="rightSection">
              <div className="links">
                <a href="/about" className="link">About Us</a>
                <a href="/menu" className="link">Menu</a>
                <a href="/contact" className="link">Contact</a>
              </div>
  
              <div className="socialLinks">
                <a href="https://facebook.com" className="socialLink">Facebook</a>
                <a href="https://instagram.com" className="socialLink">Instagram</a>
                <a href="https://twitter.com" className="socialLink">Twitter</a>
              </div>
            </div>
          </div>
  
          <div className="bottom">
            <p className="copy">© 2025 SweetTreats Ice Cream Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  