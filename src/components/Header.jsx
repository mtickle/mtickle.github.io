
function Header() {
    return (
        <header className="header">
            <h1>Mike Tickle</h1>
            <nav className="nav">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#community">Community Service</a>
                <a href="#military">Military Service</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#music">Music</a> {/* <-- ADD THIS LINK */}
            </nav>
        </header>
    );
}

export default Header;