import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <a id="menu-toggle" href="#" className="btn btn-dark btn-lg toggle"><i className="fa fa-bars"></i></a>
        <nav id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <a id="menu-close" href="#" className="btn btn-light btn-lg pull-right toggle"><i className="fa fa-times"></i></a>
            <li className="sidebar-brand">
              <a href="#top">Головна сторінка</a>
            </li>

            <li>
                <a href="#about">Лайфхаки</a>
            </li>

            <li>
                <a href="#about">Найкрутіші місця планети</a>
            </li>
        </ul>
    </nav>

    <header id="top" className="header">
        <div className="text-vertical-center">
            <h1>Книга подорожі</h1>
            <h3>Твоє натхнення</h3>
            <br/>
            <a href="#about" className="btn btn-dark btn-lg">Далі ↓</a>
        </div>
    </header>

    <section id="about" className="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2>Подорож - це пізнання різноманіття!
                        Подорожуючи ти пізнаєш культуру інших.
                        Дізнаєшся багато нового і незвичайного.
                        Завдяки подорожі ти можеш стати більш толерантним до інших народів.
                    </h2>
                </div>
            </div>
        </div>
    </section>

    <section id="services" className="services bg-primary">
        <div className="container">
            <div className="row text-center">
                <div className="col-lg-10 col-lg-offset-1">
                    <h2>Лайфхаки</h2>
                    <hr className="small" />
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="service-item">
                                <img className="img-portfolio img-responsive" src="img/1.jpg" />
                                <h4>
                                    <strong>Підготовка</strong>
                                </h4>
                                <a href="pages/pidgotovka_do_podorozhi.html" className="btn btn-light">Читати далі</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service-item">
                                <img className="img-portfolio img-responsive" src="img/2.jpg" />
                                <h4>
                                    <strong>Пакуємо валізи</strong>
                                </h4>
                                <a href="pages/pakujemo_valizy.html" className="btn btn-light">Читати далі</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service-item">
                                <img className="img-portfolio img-responsive" src="img/3.jpg" />
                                <h4>
                                    <strong>Дорога</strong>
                                </h4>
                                <a href="pages/doroga.html" className="btn btn-light">Читати далі</a>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="service-item">
                                <img className="img-portfolio img-responsive" src="img/4.jpg" />
                                <h4>
                                    <strong>На місці</strong>
                                </h4>
                                <a href="pages/na_misci.html" className="btn btn-light">Читати далі</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <aside className="callout">
        <div className="text-vertical-center">
            <h1>Найкрутіші місця планети</h1>
        </div>
    </aside>

    <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-lg-offset-1 text-center">
                    <hr className="small" />

                    <div className="row">
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="places/1.html">
								    <h5>Сент Люсія</h5>
                                    <img className="img-portfolio img-responsive" src="img/portfolio-1.jpg" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="places/2.html">
								    <h5>Блакитна Лагуна</h5>
                                    <img className="img-portfolio img-responsive" src="img/portfolio-2.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="places/3.html">
								    <h5>Гарячі джерела Памуккале</h5>
                                    <img className="img-portfolio img-responsive" src="img/portfolio-3.jpg" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="places/41.html">
								    <h5>Національний парк Єллоустон</h5>
                                    <img className="img-portfolio img-responsive" src="img/portfolio-4.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
					    <div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="places/5.html">
								    <h5>Нойшванштайн</h5>
                                    <img className="img-portfolio img-responsive  " src="img/п1.jpg" />
                                </a>
                            </div>
                        </div>
						<div className="col-md-6">
                            <div className="portfolio-item">
                                <a href="places/6.html">
								    <h5>Мармурові печери Чилі</h5>
                                    <img className="img-portfolio img-responsive" src="img/п2.jpg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <aside className="call-to-action bg-primary">
        <div className="container">
            <div className="row" style={{ height: 15 }} />
          </div>
        </aside>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-lg-offset-1 text-center">
                <p>Kyiv, Ukraine, KNUBA</p>
                <ul className="list-unstyled">
                  <li><i className="fa fa-phone fa-fw"></i> (123) 456-7890</li>
                  <li><i className="fa fa-envelope-o fa-fw"></i> <a href="mailto:lketrin56@gmail.com">lketrin56@gmail.com</a>
                  </li>
                </ul>
                <hr className="small" />
                  <p className="text-muted">Copyright &copy; Savchenko's Travel Book</p>
              </div>
            </div>
          </div>
          <a id="to-top" href="#top" className="btn btn-dark btn-lg"><i className="fa fa-chevron-up fa-fw fa-1x"></i></a>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
