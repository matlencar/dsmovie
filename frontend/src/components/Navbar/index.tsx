import { ReactComponent as GitHubIcon } from '../../assets/img/github.svg'
import './style.css';

function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/matlencar" target="_blank" rel="noreferrer">
                        <div className = "dsmovie-contanct-container">
                            <GitHubIcon />
                            <p className = "dsmovie-contact-link">/Matlencar</p>
                        </div>    
                    </a>
                </div>
            </nav>
        </header>
    )

}

export default Navbar;