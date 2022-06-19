import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./Carousel.css";

function Carousel(props) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: props.slidesToShowScroll,
    slidesToScroll: props.slidesToShowScroll,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [menuItems, setMenuItems] = useState(props.dataList);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container">
        <h2
          data-aos="flip-up"
          className="text-center"
          style={{
            color: "black",
            paddingTop: "0px",
            marginTop: "25px",
            fontSize: "28px",
          }}
        >
          {props.heading}
        </h2>
        <p
          data-aos="flip-up"
          className="text-center"
          style={{ color: "black", marginTop: "-25px" }}
        >
          {props.subHeading}
        </p>
        <Slider {...settings}>
          {menuItems.map((items) => {
            const { id, src, title, description } = items;
            return (
              <div data-aos="fade-right" className="col-md-3 mb-3">
                <div className="card im" style={{ marginTop: "15px" }}>
                  <img
                    className="card img-fluid w-100 hover-shadow"
                    alt="100%x280"
                    src={src}
                  />
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Carousel;
