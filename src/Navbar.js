// import image from './menuu.png';

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>The Colorlib Blog</h1>
            <div className="links">
                <a href ='/'>Home</a>
                <a href ='/memories'>Memories</a>
                <a href ='login'>Login</a>
            </div>
        </nav>
    );
}

export default Navbar;