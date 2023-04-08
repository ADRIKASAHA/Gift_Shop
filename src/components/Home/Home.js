import Banner from "../Banner/Banner";
import Products from "../Product/Products";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
//import giftCards from "../giftCards/giftcard/Giftcard";
//import Giftcards from "../giftCards/Giftcards";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
     
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
