import Slider from "react-slick";
import React, { Component } from "react";


export default class CustomSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
<<<<<<< HEAD
      autoplay: false,
=======
      autoplay: true,
>>>>>>> main
      pauseOnHover: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll:1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mt-5">
        <Slider {...settings}>
          <div class="card  m-3 w-auto fb-card">
            <div class="card-body w-auto quote">
            I just love buying books from Flipbooks. The experience has been tremendously amazing. Please continue your service to me. Love everything about you guys.
            <p class="card-text">- Bhavana gowda</p>
          </div>
          </div>
          <div class="card  m-3 w-auto fb-card">
            <div class="card-body w-auto  quote">
            Amazing service, would surely recommend it to others.            
            <p class="card-text">- Harshitha</p>
          </div>
          </div>
          <div class="card  m-3 w-auto fb-card">
            <div class="card-body w-auto quote">
            Very comfortable with Flipbooks! Love the experience and now definitely my go to person for novels!
            <p class="card-text">- Pooja Chowdary</p>
          </div>
          </div>
          <div class="card  m-3 w-auto fb-card">
            <div class="card-body w-auto quote">
            Doing great! No complaints or suggestions. Good luck for your future           
             <p class="card-text">- Vijay Raghavan</p>
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}
