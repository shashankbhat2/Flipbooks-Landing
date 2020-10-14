import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import CustomHead from '../components/Head'


const about = () => {
    return(
        <>
        <CustomHead title="Flipbooks | About" description="Flipbooks delivers best in condition second hand books to your home anywhere in Bangalore at low prices"></CustomHead>
        <NavBar></NavBar>
        <div className="container container-fluid mt-4 about-container">
            <h1 className="head">About Us</h1>
            <div className="row">
            <div className="col-md-12">
            <img src="static/uc.svg" className="img-fluid under-construction" alt="under-construction"></img>
            </div>
            <div className="col-md-12">
            <h1 className="error-text">Sorry, This page is under construction</h1>
            <h4 className="error-text mt-0 tagline">Till we finish this, Happy Reading!</h4>
            </div>
            </div>
        </div>
        <Footer></Footer>
        </>

    )
}

export default about;