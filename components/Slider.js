import Slider from "react-slick";
import React, { Component } from "react";


export default class CustomSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
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
          <div>
          <div class="card fb-card">
            <div class="card-body quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit            </div>
            <p class="card-text">- Ronald Richards</p>
          </div>
          </div>
          <div>
          <div class="card fb-card">
            <div class="card-body quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit            </div>
            <p class="card-text">- Ronald Richards</p>
          </div>
          </div>
          <div>
          <div class="card fb-card">
            <div class="card-body quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit            </div>
            <p class="card-text">- Ronald Richards</p>
          </div>
          </div>
          <div>
          <div class="card fb-card">
            <div class="card-body quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit            </div>
            <p class="card-text">- Ronald Richards</p>
          </div>
          </div>
          <div>
          <div class="card fb-card">
          <div class="card fb-card">
            <div class="card-body quote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit            </div>
            <p class="card-text">- Ronald Richards</p>
          </div>
          </div>
          <br></br>
          </div>
        </Slider>
      </div>
    );
  }
}
