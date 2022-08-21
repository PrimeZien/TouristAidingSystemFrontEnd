import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { TbArrowBarDown, TbArrowBarUp } from "react-icons/tb";
import CarouselThingsToDo from "../../Component/Carousel/Carousel";
import CarouselRecommended from "../../Component/Carousel/CarouselRecommended";
import attractionDataList1 from "../../Component/FavoriteDataList";
import Footer from "../../Component/Footer/Footer";
import AttractionPlaces from "../../Component/ImageGalleryWithDescription/ImageGalleryWithDescription";
import Navbar from "../../Component/Navbar/Navbar";
// import RecommendedDataList from "../../Component/RecommendedDataList";
import SearchBar from "../../Component/SearchBar/SearchBar";
import "./Locations.css";

function Location() {
  const [visible, setVisible] = useState(8);
  const [disableAll, setDisableAll] = useState(true);
  const [disableLess, setDisableLess] = useState(true);

  const [thingsToDoDataList, setThingsToDoDataList] = useState([]);
  const [recommendedDataList, setRecommendedDataList] = useState([]);
  const [attractionDataList, setAttractionsDataList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/activity/all-activities")
      .then((res1) => {
        setThingsToDoDataList(res1.data.body);
      })
      .catch((err1) => {
        console.log(err1);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/location/all-locations")
      .then((res2) => {
        setAttractionsDataList(res2.data.body);
      })
      .catch((err2) => {
        console.log(err2);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/public-user/location/top-locations")
      .then((res2) => {
        setRecommendedDataList(res2.data.body);
      })
      .catch((err2) => {
        console.log(err2);
      });
  }, []);

  const seeAll = () => {
    setVisible((prevValue) => {
      if (attractionDataList.length <= prevValue) {
        setDisableAll(false);
        return attractionDataList.length;
      } else {
        setDisableLess(true);
        return prevValue + 4;
      }
    });
  };

  const seeLess = () => {
    setVisible((prevValue) => {
      if (8 >= prevValue) {
        setDisableLess(false);
        return 8;
      } else {
        setDisableAll(true);
        if (prevValue === attractionDataList.length) {
          return prevValue - (attractionDataList.length % 4);
        }
        return prevValue - 4;
      }
    });
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="loaction-page">
      {console.log(attractionDataList1)}
      {console.log(attractionDataList)}
      <Navbar></Navbar>
      <h1 className="heading main-heading" style={{ "margin-top": "60px" }}>
        Places to Visit in <span className="sp-sri-lanka">Sri Lanka</span>
      </h1>
      <div className="search-bar-custom">
        <SearchBar></SearchBar>
      </div>
      <CarouselThingsToDo
        slidesToShowScroll={4}
        heading="Things To Do"
        subHeading=""
        dataList={thingsToDoDataList}
      ></CarouselThingsToDo>
      <CarouselRecommended
        slidesToShowScroll={3}
        heading="Recommended Locations"
        subHeading="Lorem ipsum dolor, sit amet consectetur adipisic."
        dataList={recommendedDataList}
      ></CarouselRecommended>
      <div
        data-aos="fade-up"
        className="container-fluid"
        style={{ backgroundColor: "#EEEEEE" }}
      >
        <div className="container-fluid fv-location">
          <div className="custom-head">
            <h1
              className="text-center"
              style={{ color: "black", paddingTop: "50px", fontSize: "28px" }}
            >
              Top Attractions in Sri Lanka
            </h1>
            <AttractionPlaces
              visibleValue={visible}
              dataList={attractionDataList}
            ></AttractionPlaces>
            <div className="text-center">
              <button
                type="button"
                class="text-center btn-see"
                onClick={seeLess}
                disabled={!disableLess}
              >
                <TbArrowBarUp></TbArrowBarUp>
              </button>
              <button
                type="button"
                class="text-center btn-see"
                onClick={seeAll}
                disabled={!disableAll}
              >
                <TbArrowBarDown></TbArrowBarDown>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 
      <AttractionPlaces
        visibleValue={visible}
        dataList={attractionDataList}
      ></AttractionPlaces>
      <button
        type="button"
        class="btn btn-dark text-center btn-see-all"
        onClick={seeAll}
      >
        See all
      </button> */}
      <Footer />
    </div>
  );
}

export default Location;
