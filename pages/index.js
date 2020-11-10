import NavBar from '../components/Navbar'
import CustomHead from '../components/Head'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade'
import CustomSlider from '../components/Slider'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>
    <CustomHead description="Flipbooks delivers best in condition second hand books to your home anywhere in Bangalore at low prices"></CustomHead>
    <NavBar></NavBar>
    <a href="https://wa.me/message/MUR7NZNPZANQC1" class="float" id="wa" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>  
    <div className="container-lg container-fluid hero">
        <div class="row">
            <div className="col-lg-5 col-sm-10">
            <Zoom>
            <p className="hero-content">Fall in <strong className="bold"> love </strong> with reading <strong className="bold">books</strong></p>
            </Zoom>
            <p className="hero-content-2">
            Get your favourite book at half the price, delivered to your home and enjoy reading!
            </p>
            <a type="button" class="btn btn-primary mt-3" href="https://docs.google.com/forms/d/e/1FAIpQLScm_g2kjwpGBhjyAjqD4uttzFu59Lf9KH3L5vu2sBPouFbRpw/viewform" >Order Now</a>
            </div>  
            <div className="col-lg-3 col-sm-5">
            <Fade>
            <img src="static/hero.svg" className="hero-img" alt="Hero Image"></img>
            </Fade>
            </div>  
        </div>
      </div>
    <div className="why bg"> 
      <h3 className="title">Why order from Flipbooks?</h3>
      <div class="container mt-5">
      <div className="row" id="Why">
      <div className="col-lg-2">
        <Zoom>
        <img src="static/map.svg"  alt="map"  className="map"></img>
        </Zoom>
      </div>
      <div className="col-lg-9">
        <div className="hw-content mt-4">
          <h3>Get books from anywhere in Bangalore</h3>
          <p className="hw-text">          Used books are available only in specific areas of Bengaluru. <br className="break"></br> With Flipbooks, get used books delivered to your table!</p>
        </div>
      </div>
      </div>
      </div>
      </div>
      <div className="why bg2 mt-0">
      <div class="container">
      <div className="row" id="Why">
      <div className="col-lg-5">
        <div className="hw-content-2">
        <div className="col-lg-3 none">
          <img src="static/discount.svg"  alt="discount" className="discount"></img>
        </div>
          <h3 className="mt-5">Buy books with huge discounts</h3>
          <p className="hw-text">          Low on budget?
          No Problem!
          with Flipbooks
          get used text books 
          with discounts upto 
          50% on MRP!</p>
        </div>
        <div className="col-lg-3 all">
          <Zoom>
          <img src="static/discount.svg" alt="discount" className="discount"></img>
          </Zoom>
        </div>
        </div>
      </div>
      </div>
      </div>
      <div className="why bg3 mt-0 mb-4"> 
      <div class="container">
      <div className="row" id="Why">
      <div className="col-lg-2">
        <Zoom>
        <img src="static/del.svg" alt="delivery"  className="del"></img>
        </Zoom>
      </div>
      <div className="col-lg-9">
        <div className="hw-content">
          <h3>Delivered in less than 2 days!</h3>
          <p className="hw-text">No Ebooks or PDFs to 
          Read? Get your books 
          delivered within 
          2-5 days!</p>
        </div>
      </div>
      </div>
      </div>
      </div>  
      <h3 className="title">How Flipbooks works?</h3>
      <div className="container mt" id="How">
      <div class="card  hw-card">
        <div class="card-body">
        <div class="media">
        <img src="static/plus.svg" class=" icons mr-3" alt="..."/>
        <div class="media-body">
          <h5 class="mt-0 how-text mt-4">Fill this <a href="https://docs.google.com/forms/d/e/1FAIpQLScm_g2kjwpGBhjyAjqD4uttzFu59Lf9KH3L5vu2sBPouFbRpw/viewform">form</a> with the book info
          <br></br>or call us @ <a href="tel:+91 7348955431">7348955431</a> or <a href="tel:+91 9686233329">9686233329</a></h5>
        </div>
      </div>
      </div>
      </div>
      <div class="card  hw-card mt-4">
        <div class="card-body">
        <div class="media">
        <img src="static/wa.svg" class="icons mr-3" alt="..."/>
        <div class="media-body">
          <h5 class="mt-0 how-text mt-4">Get your order info and tracking on Whatsapp or Call</h5>
        </div>
      </div>
        </div>
      </div>
      <vr></vr>
      <div class="card  hw-card mt-4">
        <div class="card-body">
        <div class="media">
        <img src="static/book.svg" class="icons mr-3" alt="..."/>
        <div class="media-body">
          <h5 class="mt-0 how-text mt-4">Your book will be delivered in 
fab condition in 2-3 days!</h5>
        </div>
      </div>
      </div>
      </div>
      </div>
      <p className="payment">You can pay us using <strong>Paytm, PhonePe or Google Pay</strong></p>
      <div className="container mb-5 feedback">
        <div class="fbtitle">
        <h3>What our Users say :</h3>
        </div>
        <CustomSlider></CustomSlider>
      </div>
      <div className="container container-fluid banner">
          <h2 className="order">So why wait? <br></br>Order your book now!</h2>
          <a type="button" class="btn btn-primary o-btn" href="https://docs.google.com/forms/d/e/1FAIpQLScm_g2kjwpGBhjyAjqD4uttzFu59Lf9KH3L5vu2sBPouFbRpw/viewform" >Order Now</a>
      </div>
      <Footer></Footer>
    </>
  )
}
