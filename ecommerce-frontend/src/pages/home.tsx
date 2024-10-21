import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCarthandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="1234"
          name="Macbook"
          price={1000}
          stock={4}
          handler={addToCarthandler}
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
