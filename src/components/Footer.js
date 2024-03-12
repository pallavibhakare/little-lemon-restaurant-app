import logo from '../images/logo.jpg'
const Footer = () => {
    return(
        <>
            <div>
                <img src={logo} alt="Little Lemon" />
                <ul>
                    <h6>Doormat Navigation</h6>
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
            <div>
                <h5>Contact</h5>
                <address>123 Main Street</address>
                <h6>Phone:123 456 6789</h6>
                <h6>Email: contactlittlelemon@gmail.com</h6>
            </div>
        </>
    );
};
export default Footer;