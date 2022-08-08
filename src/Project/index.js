import prod1 from "./images/prod-1.jpg";
import prod2 from "./images/prod-2.jpg";
import prod3 from "./images/prod-3.jpg";
import prod4 from "./images/prod-4.jpg";
import prod5 from "./images/prod-5.jpg";
import prod6 from "./images/prod-6.jpg";
import prod7 from "./images/prod-7.jpg";
import prod8 from "./images/prod-8.jpg";

import "./sass/styles.sass";

function Project() {
  return (
    <div>
      <header className="header">
        <div className="header-top">
          <div className="header-top-container">
            <div className="store-info-container">
              <span>
                <i className="fas fa-phone">(61) 99999-0000</i>
              </span>
              <span>
                <i className="fas fa-envelope">electrum@email.com</i>
              </span>
              <span>
                <i className="fas fa-map-marker-alt">Rua Teste, 1234</i>
              </span>
            </div>
            <div className="header-user-top-menu">
              <span>
                <i className="fas fa-dollar sign"></i> <a href="/">BRL</a>
              </span>
              <span>
                <i className="fas fa-user"></i> <a href="/">Minha conta</a>
              </span>
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="main-header-container">
            <a href="/">
              Electrum <i className="fas fa-bolt"></i>
            </a>
            <form action="" id="search*form">
              <input type="text" id="search" placeholder="Busque aqui"></input>
              <input
                type="submit"
                className="btn btn-half"
                value="Pesquisar"
              ></input>
            </form>
            <div className="header-actions-menu">
              <div className="wishlist-container">
                <span className="qty">0</span>
                <i className="far fa-heart"></i>
                <a href="/">Favoritos</a>
              </div>
              <div className="header-cart-container">
                <span className="qty">0</span>
                <i className="fas fa-shopping-cart"></i>
                <a href="/">Carrinho</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Promoções</a>
              </li>
              <li>
                <a href="/">Notebooks</a>
              </li>
              <li>
                <a href="/">Celulares</a>
              </li>
              <li>
                <a href="/">Câmeras</a>
              </li>
              <li>
                <a href="/">Acessórios</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="banners">
        <div className="banner" id="banner-1">
          <div className="banner-cover"></div>
          <div className="banner-content">
            <h2>Promoção de Notebooks</h2>
            <a href="/">
              Ver Mais <i className="fas fa-arrow-circle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="banner" id="banner-2">
        <div className="banner-cover"></div>
        <div className="banner-content">
          <h2>Lançamento de Acessórios</h2>
          <a href="/">
            Ver Mais <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="banner" id="banner-3">
        <div className="banner-cover"></div>
        <div className="banner-content">
          <h2>Câmeras Potentes</h2>
          <a href="/">
            Ver Mais <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
      <div className="products-grid">
        <h2>Produtos Novos</h2>
        <div className="product-grid-container">
          <div className="products-grid-card">
            <span className="label new">New</span>
            <img src={prod1} alt="Produto 1" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products-grid-card">
            <span className="label new">New</span>
            <img src={prod2} alt="Produto 2" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products-grid-card">
            <span className="label new">New</span>
            <img src={prod3} alt="Produto 3" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products-grid-card">
            <span className="label new">New</span>
            <img src={prod4} alt="Produto 4" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
        </div>
      </div>
      <div className="deal-container">
        <div className="deal-container-content">
          <div className="deal-container-content-timer">
            <div className="deal-container-timer">
              <span className="deal-container-timer-time">02</span>
              <span className="deal-container-timer-word">Dias</span>
            </div>
            <div className="deal-container-timer">
              <span className="deal-container-timer-time">12</span>
              <span className="deal-container-timer-word">Horas</span>
            </div>
            <div className="deal-container-timer">
              <span className="deal-container-timer-time">25</span>
              <span className="deal-container-timer-word">Minutos</span>
            </div>
            <div className="deal-container-timer">
              <span className="deal-container-timer-time">33</span>
              <span className="deal-container-timer-word">Segundos</span>
            </div>
          </div>
          <h2 className="deal-container-content-title">
            Promoção de Fone Gamer
          </h2>
          <p className="deal-container-content-subtilte">
            Toda a linha gamer com 50% de desconto
          </p>
          <button className="btn">Comprar Agora</button>
        </div>
      </div>
      <div className="products-grid">
        <h2>Mais Vendidos</h2>
        <div className="product-grid-container">
          <div className="products-grid-card">
            <span className="label hot">Hot</span>
            <img src={prod5} alt="Produto 5" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products-grid-card">
            <span className="label hot">Hot</span>
            <img src={prod6} alt="Produto 6" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products-grid-card">
            <span className="label hot">Hot</span>
            <img src={prod7} alt="Produto 7" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
          <div className="products-grid-card">
            <span className="label hot">Hot</span>
            <img src={prod8} alt="Produto 8" />
            <p className="category">Categoria</p>
            <h3 className="product-name">Nome do Produto</h3>
            <p className="product-price">R$ 124,90</p>
            <div className="rating-box">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <button className="btn">Comprar</button>
          </div>
        </div>
      </div>
      <div className="newslatter-container">
        <h2>
          Assine a nossa <span>Newsletter</span>
        </h2>
        <form action="">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite o seu e-mail"
          />
          <input type="submit" className="btn btn-half" value="Assinar" />
        </form>
      </div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-top-about">
            <h3>Sobre nós</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
              repellat nesciunt eius dolores nulla, atque suscipit rem voluptate
              dignissimos accusamus sit quo non architecto ducimus culpa,
              numquam sunt odit aspernatur?
            </p>
            <p>
              <i className="fas fa-location-arrow"></i>{" "}
              <a href="/">Rua Teste, 1234</a>
            </p>
            <p>
              <i className="fas fa-phone"></i> <a href="/">(61) 99999-0000</a>
            </p>
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="/">electrum@email.com</a>
            </p>
          </div>
          <div className="footer-top-categories">
            <h3>Categorias</h3>
            <ul>
              <li>
                <a href="/">Promoções</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Headsets</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">PC Gamer</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Câmeras</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Mouse e Teclado</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-information">
            <h3>Informações</h3>
            <ul>
              <li>
                <a href="/">Sobre Nós</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Entre em contato</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Política de privacidade</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Pedidos e devoluções</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Termos e condições</a>
              </li>
            </ul>
          </div>
          <div className="footer-top-menu">
            <h3>Menu</h3>
            <ul>
              <li>
                <a href="/">Minha Conta</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Carrinho</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Lista de Desejos</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Rastrear Pedido</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
            <div className="footer-bottom-payments">
                <i className="fab fa-cc-mastercard"></i>
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-diners-club"></i>
                <i className="fab fa-cc-amazon-pay"></i>
                <i className="fab fa-cc-apple-pay"></i>
            </div>
            <p>Copyright &copy; 2021 - Electrum </p>

        </div>
      </footer>
    </div>
  );
}

export default Project;
