import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__form form">
          <h3 className="form__title">
            Подпишитесь на нашу рассылку и узнавайте об акция быстрее
          </h3>
          <div className="form__email">
            <input
              type="email"
              placeholder="Введите ваш e-mail"
              className="footer__email-input"
            />
            <button className="foorm__button">Отправить</button>
          </div>
          <p>Интернет магазин автозапчастей</p>
        </div>

        <div className="footer__nav ">
          <ul className="footer__nav-list">
            <h3 className="nav__title">Информация</h3>
            <li>
              <a href="#!">О компании</a>
            </li>
            <li>
              <a href="#!">Контакты</a>
            </li>
            <li>
              <a href="#!">Реквизиты</a>
            </li>
            <li>
              <a href="#!">Магазины</a>
            </li>
          </ul>

          <ul className="footer__nav-list">
            <h3 className="nav__title">Сервисный центр</h3>
            <li>
              <a href="#!">Доставка и самовывоз</a>
            </li>
            <li>
              <a href="#!">Оплата</a>
            </li>
            <li>
              <a href="#!">Возврат-обмен</a>
            </li>
            <li>
              <a href="#!">Новости</a>
            </li>
          </ul>

          <ul className="footer__nav-list">
            <h3 className="nav__title">Интернет-магазин</h3>
            <li>
              <a href="#!">Доставка и самовывоз</a>
            </li>
            <li>
              <a href="#!">Оплата</a>
            </li>
            <li>
              <a href="#!">Возврат-обмен</a>
            </li>
            <li>
              <a href="#!">Новости</a>
            </li>
          </ul>

          <ul className="footer__nav-list">
            <li>
              <a href="#!">Акции</a>
            </li>
            <li>
              <a href="#!">Договор оферты</a>
            </li>
            <li>
              <a href="#!">Политика обработки</a>
            </li>
            <li>
              <a href="#!">персональных данных</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
