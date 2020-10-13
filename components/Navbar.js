import link from 'next/link'

const NavBar = () => {
    return(
    // <div class="navbar-bg">
    <nav class="navbar  navbar-expand-lg navbar-light">
        <div className="container">
        <a class="navbar-brand" href="#">
            <img src="static/logo.svg"></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto mt-2">
            <li class="nav-item">
                <a class="nav-link" href="#About">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Why">Why </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#How">How</a>
            </li>
            <li class="nav-item">
                 <a type="button" class="btn btn-primary nav-btn" href="https://docs.google.com/forms/d/e/1FAIpQLScm_g2kjwpGBhjyAjqD4uttzFu59Lf9KH3L5vu2sBPouFbRpw/viewform" >Order Now</a>
            </li>
            </ul>
        </div>
        </div>
     </nav>    
    //  </div>
    )
}

export default NavBar;