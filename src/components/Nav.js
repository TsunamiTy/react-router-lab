import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className='nav'>
            <Link to='/'>
                <h3>iStocks</h3>
            </Link>
            <Link to='/stocks'>
                <h5>Stocks</h5>
            </Link>
            <Link to='/about'>
                <h5>About</h5>
            </Link>
        </div>
    );
};

export default Nav;