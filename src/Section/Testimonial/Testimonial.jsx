import React, {Component} from 'react'
import './Testimonial.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"
// const Testimonial = () => {
//   return (
    
    // <section className='testimonial'>
    //     <div className='testimonial-row col-12 container'>
    //     <h2 className='title-testimonial'>Testimonial</h2>
    //     <p>Berbagai review positif dari para pelanggan kami</p>
    //     </div>
    // </section>

    
//   )
// }
// export default Testimonial
class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      className: "slider variable-width",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [ 
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
       {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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

      <div className='section-slider' id='Testimonial'>
            <section className='testimonial'>
              <div className='testimonial-row col-12 container'>
              <h2 className='title-testimonial'>Testimonial</h2>
              <p>Berbagai review positif dari para pelanggan kami</p>
              </div>
          </section>
        <Slider ref={c => (this.slider = c)} {...settings}>
          <div style={{ width: 600 }}>
            <div className='slider-row border d-flex'>
                <div className='col-3 img-col d-flex'>
                      <img src="asset/images/img_photo.png" alt="" />
                </div>
                <div className='col-9 text-col text-slider'>
                  <img src="asset/images/icon_rate.png" alt="" />
                  <p className='fw-bold'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <p>John Dee 32, Bromo</p>

                </div>
              </div>
          </div>
          <div>
          <div className='slider-row border d-flex'>
                <div className='col-3 img-col'>
                      <img src="asset/images/img_photo.png" alt="" />
                </div>
                <div className='col-9 text-col text-slider'>
                  <img src="asset/images/icon_rate.png" alt="" />
                  <p className='fw-bold'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <p>John Dee 32, Bromo</p>

                </div>
              </div>
          </div>
          <div>
          <div className='slider-row border d-flex'>
                <div className='col-3 img-col'>
                      <img src="asset/images/img_photo.png" alt="" />
                </div>
                <div className='col-9 text-col text-slider'>
                  <img src="asset/images/icon_rate.png" alt="" />
                  <p className='fw-bold'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <p>John Dee 32, Bromo</p>

                </div>
              </div>
          </div>
          <div>
          <div className='slider-row border d-flex'>
                <div className='col-3 img-col'>
                      <img src="asset/images/img_photo.png" alt="" />
                </div>
                <div className='col-9 text-col text-slider'>
                  <img src="asset/images/icon_rate.png" alt="" />
                  <p className='fw-bold'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                  <p>John Dee 32, Bromo</p>

                </div>
              </div>
          </div>
        </Slider>
        <div className='btn-slider'>
          <button className='rounded-circle btn-right me-2'onClick={this.previous}> <FaAngleLeft/></button>
          <button className='rounded-circle btn-left ms-2'onClick={this.next}> <FaAngleRight/></button>
          </div>
      </div>
    );  
  }
}

export default Testimonial
