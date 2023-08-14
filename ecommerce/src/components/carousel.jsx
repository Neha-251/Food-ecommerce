import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import img1 from "../images/img4.jpg";
import img2 from "../images/img6.jpg";
import img3 from "../images/img7.jpg";

const Carousel1 = () => {
  return (
    <Carousel className="">
      <Carousel.Item interval={2000}>
        <div className="h-screen w-screen relative">
          <img className="h-full w-full" src={img1} alt="" />{" "}
        </div>
        <Carousel.Caption className="absolute left-0 top-2/2 text-start ">
          <h1 className="text-rose-500 text-4xl">Italian Style Spagetti</h1>
          <p className="text-teal-500 text-2xl">Have a Taste</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="h-screen w-screen">
          <img className="h-full w-full" src={img2} alt="" />{" "}
        </div>
        <Carousel.Caption className="absolute inset-x-3/4 inset-y-3/4 ">
          <h3 className="text-rose-700 text-4xl">Variety Momo</h3>
          <p className=" text-3xl">Taste the authenticity in every bite</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <div className="h-screen w-screen">
          <img className="h-full w-full" src={img3} alt="" />{" "}
        </div>
        <Carousel.Caption className="absolute inset-x-3/4 inset-y-3/4 ">
          <h3 className="text-rose-500 text-4xl">CupCakes</h3>
          <p className=" text-2xl">With a flavour of Blueberry!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousel1;
