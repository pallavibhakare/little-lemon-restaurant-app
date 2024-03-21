import Logo from '../images/Logo.svg'
import Nav from './Nav';
function Header(){
    return(
    <header className="header">
        <div className='logo'>
        <img src={Logo} alt="Little Lemon Logo"/>
        </div>        
        <Nav />
    </header>);
}
export default Header;