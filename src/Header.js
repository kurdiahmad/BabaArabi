import { Link } from 'react-router-dom';


const Header = ({ title }) => {
    return (
        <header className="Header">
            <h1> <Link to='/'> {title} </Link></h1>
            <ul>
                <li><Link to='about'>من نحن؟ </Link></li>
                <li><Link to='contact'>اتصل بنا </Link></li>
                {/* <li><Link to="about">اتصل بنا</Link></li> */}
            </ul>
        </header>
    )
}

export default Header