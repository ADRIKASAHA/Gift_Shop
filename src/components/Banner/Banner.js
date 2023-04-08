import oneImage from "../Assets/images/one.png";
import twoImage from "../Assets/images/two.png";
import threeImage from "../Assets/images/three.png";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img src={threeImage} className="w-full" alt="" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={twoImage} className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={oneImage} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
