import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Shop the Latest Trends</h1>
        <p>Find the best products at unbeatable prices.</p>
        <button className="shop-now-btn">Shop Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          alt="Shopping Banner"
        />
      </div>
    </section>
  );
};

export default Hero;
