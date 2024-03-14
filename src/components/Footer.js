import logo from '../images/logo.png'
const Footer = () => {
    return(
        <footer>
            <div>
                <img src={logo} alt="Little Lemon" />
            </div>
            <div className='doorNav'>
                 <h5>Doormat Navigation</h5>
                <ul>            
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Reservations</a>
                    </li>
                    <li>
                        <a href="/">Order Online</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </div>
            <div className='address'>
                <h5>Contact</h5>
                <address>123 Main Street</address>
                <h6>Phone:123 456 6789</h6>
                <h6>Email: contactlittlelemon@gmail.com</h6>
            </div>
            <div className='socials'>
                <h5>Social Media Links</h5>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
};
export default Footer;