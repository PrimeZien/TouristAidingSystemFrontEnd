import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { SiOpenstreetmap } from "react-icons/si";
import { Link } from "react-router-dom";
import "./ImageGallery.css";

function TopLocation(props) {
  // const [categories, setCategories] = useState(allCategoriesLink);
  const [menuItems, setMenuItems] = useState(props.dataList);
  // setMenuItems(locationData);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="card-list">
        {menuItems.slice(0, props.visibleValue).map((items) => {
          const { id, category, image, title, link1, link2, text } = items;
          return (
            <Link to={`/location/${id}`}>
              <div data-aos="fade-up" className="img-card">
                <div className="title text-left">
                  <h4>{title}</h4>
                </div>

                <img src={image} alt="" className="img-location hover-zoom" />

                <div className="i text-center">
                  <h1 id="hover-title">{title}</h1>
                  <SiOpenstreetmap
                    id="hover-title-icon"
                    style={{ color: "white", fontSize: "35" }}
                  ></SiOpenstreetmap>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default TopLocation;
