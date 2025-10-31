
function Footer() {
    return (
        <footer className="footer">
            <p>
                <a
                    href="https://www.linkedin.com/in/your-profile-url" // <-- ADD YOUR LINKEDIN URL
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                &bull;
                <a
                    href="https://github.com/mtickle"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
            </p>
            <p>&copy; {new Date().getFullYear()} Mike Tickle. All rights reserved.</p>
        </footer>
    );
}

export default Footer;