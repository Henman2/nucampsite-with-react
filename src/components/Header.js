import { Navbar, NavbarBrand } from 'reactstrap';
import nucampLogo from '../app/assets/img/logo.png';

const Header = ()=>{
    return(
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <img src={nucampLogo} alt='nucamp logo' />
            </NavbarBrand>
    </Navbar>
    )
}

export default Header;