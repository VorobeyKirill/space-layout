import './App.scss';

function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo-container">
          <img className="header__logo--planet" src={require("./assets/icons/logo-planet.svg").default} alt="Planet logo" />
          <img className="header__logo--text" src={require("./assets/icons/logo-text.svg").default} alt="GO text logo" />
        </div>
        <input id="header-menu" className="header__menu-input" type="checkbox" />
        <label className="header__menu-toggle" htmlFor="header-menu"></label>
        <nav className="header__navigation">
          <a href="#" className="header__link--home">Home</a>
          <a href="#" className="header__link--products">Products</a>
          <a href="#" className="header__link--cart"></a>
        </nav>
      </header>

      <main className="main">
        <section className="banner">
          <h2 className="banner__title">
            Discover the vast<br />expanses of <span className="banner__title--subtext">space</span>
          </h2>
          <p className="banner__text">
            Where the possibilities are <span className="banner__text--subtext">endless!</span>
          </p>
          <button className="banner__button">Learn more</button>
        </section>
        <section className="offers">
          <h6 className="offers__title">Offers</h6>
          <div className="offers__grid">
            <div className="offers__card offers__card--1">
              <h3 className="card__title">Move the borders of reality!</h3>
              <p className="card__text--long">Go on a space adventure - it's possible with us!</p>
              <p className="card__text--short">Go on a space adventure</p>
              <button className="card__button">Learn more</button>
            </div>
            <div className="offers__card offers__card--2">
              <h3 className="card__title">Space is not just stars and planets</h3>
              <p className="card__text--long">Go on a space adventure</p>
              <p className="card__text--short">it is a majestic journey to</p>
              <button className="card__button">Learn more</button>
            </div>
            <div className="offers__card offers__card--3">
              <h3 className="card__title">For those who dream of stars </h3>
              <p className="card__text">Our offer: make your dream come true</p>
              <button className="card__button">Learn more</button>
            </div>
            <div className="offers__card offers__card--4">
              <h3 className="card__title">Fulfill your fantastic dreams</h3>
              <p className="card__text">Space has never been so close</p>
              <button className="card__button">Learn more</button>
            </div>
          </div>
        </section>
        <section className="info">
          <h3 className="info__title">Embark on a space journey</h3>
          <input id="info__input" className="info__input" type="checkbox" />
          <p className="info__text">Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>
          <label className="info__button" htmlFor="info__input">Read more</label>
        </section>
      </main>

      <footer className="footer">
        <img className="footer__image" src={require("./assets/icons/footer-rocket.svg").default} alt="rocket" />
        <p className="footer__text">Exciting space adventure!</p>
      </footer>
    </>
  );
}

export default App;
