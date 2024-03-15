import logo from '../images/logo.png'
import Nav from './Nav';
function Header(){
    return(
    <header className="header">
        <div className='logo'>
        <img src={logo} alt="Little Lemon Logo"/>
        </div>        
        <Nav />
    </header>);
}
export default Header;