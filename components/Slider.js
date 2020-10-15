import Slider from "react-slick";
import React, { Component } from "react";


export default class CustomSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      className: "center",
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
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
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
      <div className="mt-5 slider">
        <Slider {...settings}>
          <div class="card fb-card ml-3">
            <div class="card-body quote">
            I just love buying books from Flipbooks. The experience has been tremendously amazing. Please continue your service. Love everything about you guys. <p class="card-text">- Bhavana Gowda</p>
          </div>
          </div>
          <div class="card fb-card">
            <div class="card-body quote">
            Amazing service, would surely recommend it to others. <p class="card-text">- Harshitha</p>
          </div>
          </div>
          <div class="card fb-card">
            <div class="card-body quote">
            Very comfortable with Flipbooks! Love the experience and now definitely my go to person for novels!
            <p class="card-text">- Pooja Chowdary</p>
            </div>
          </div>
          <div class="card fb-card">
            <div class="card-body quote">
            Doing great! No complaints or suggestions. Good luck for your future
            <p class="card-text">- Vijay Raghavan</p>
            </div>
          </div>
          <br></br>
        </Slider>
      </div>
    );
  }
}
