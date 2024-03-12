import "./style.scss";

//каттегория поиска

//Сначала создаем обьект с параметрами по фильтру, далее фильтруем все продукты
//По значениям обьекта парам и обьета продукт

const FilterControlPanel = () => {
  return (
    <section className="filter-panel">
      <form className="form">
        <h4>Параметры</h4>

        <ul className="form__list">
          <li className="form__item">
            <div className="form__title">
              <button>
                <img src="./img/icon/arrowForm.svg" alt="arrow" />
                <h3>Сезонность</h3>
              </button>
            </div>

            <div className="form__options-radio">
              <div>
                <input
                  id="season-winter"
                  name="season"
                  type="radio"
                  value="winter"
                />
                <label for="season-winter">
                  Зимние
                  <img
                    className="questionAlt"
                    src="./img/icon/question.svg"
                    alt="question"
                  />
                </label>
              </div>
              <div>
                <input
                  id="season-summer"
                  name="season"
                  type="radio"
                  value="summer"
                />
                <label for="season-summer">Летние</label>
              </div>
            </div>
          </li>

          <li className="form__item">
            <div className="form__title">
              <h3>Тип шин</h3>
            </div>

            <div className="form__options-radio">
              <div>
                <input
                  id="type-tires-all"
                  name="type-tires"
                  type="radio"
                  value="all"
                />
                <label for="type-tires-all">Все</label>
              </div>

              <div>
                <input
                  id="type-tires-studded"
                  name="type-tires"
                  type="radio"
                  value="studded"
                />
                <label for="type-tires-studded">
                  Шипованные
                  <img
                    className="questionAlt"
                    src="./img/icon/question.svg"
                    alt="question"
                  />
                </label>
              </div>

              <div>
                <input
                  id="type-tires-not"
                  name="type-tires"
                  type="radio"
                  value="not"
                />
                <label for="type-tires-not">
                  Нешипованные
                  <img
                    className="questionAlt"
                    src="./img/icon/question.svg"
                    alt="question"
                  />
                </label>
              </div>
            </div>
          </li>

          <li className="form__item">
            <div className="form__title">
              <button>
                <img src="./img/icon/arrowForm.svg" alt="arrow" />
                <h3>Цена</h3>
              </button>
            </div>

            <div className="form__options-range">{/* Дописать */}</div>
          </li>

          <li className="form__item ">
            <div className="form__item-number">
              <div className="form__title">
                <h3>
                  Диаметр
                  <img
                    className="questionAlt"
                    src="./img/icon/question.svg"
                    alt="question"
                  />
                </h3>
              </div>

              <div className="form__options-number">
                <input type="text" list="diameter-list" placeholder={"15"} />
                <datalist id="diameter-list">
                  <option value="qwe" />
                </datalist>
              </div>
            </div>
          </li>

          <li className="form__item">
            <div className="form__item-number">
              <div className="form__title">
                <h3>
                  Профиль
                  <img
                    className="questionAlt"
                    src="./img/icon/question.svg"
                    alt="question"
                  />
                </h3>
              </div>

              <div className="form__options-number">
                <input type="text" list="profile-list" placeholder={"15"} />
                <datalist id="profile-list">
                  <option value="qwe" />
                </datalist>
              </div>
            </div>
          </li>

          <li className="form__item">
            <div className="form__item-number">
              <div className="form__title">
                <h3>
                  Ширина
                  <img
                    className="questionAlt"
                    src="./img/icon/question.svg"
                    alt="question"
                  />
                </h3>
              </div>

              <div className="form__options-number">
                <input type="text" list="width-list" placeholder={"15"} />
                <datalist id="width-list">
                  <option value="qwe" />
                </datalist>
              </div>
            </div>
          </li>

          <li className="form__item">
            <div className="form__title">
              <button>
                <img src="./img/icon/arrowForm.svg" alt="arrow" />
                <h3>Бренд</h3>
              </button>
            </div>

            <div className="form__input-options">
              <input
                type="text"
                list="brand"
                placeholder={"Введите бренд шины"}
              />
              <datalist id="brand">
                <option value="qwe" />
              </datalist>
              <div className="form__options-checkbox">
                <div>
                  <input
                    id="brand-gudrich"
                    name="brand"
                    type="checkbox"
                    value="B Gudrich"
                  />
                  <label for="brand-gudrich">B Gudrich</label>
                </div>
                <div>
                  <input
                    id="brand-wridrestone"
                    name="brand"
                    type="checkbox"
                    value="Wridrestone"
                  />
                  <label for="brand-wridrestone">Wridrestone</label>
                </div>
                <div>
                  <input
                    id="brand-rarym"
                    name="brand"
                    type="checkbox"
                    value="Rarym"
                  />
                  <label for="brand-rarym">Rarym</label>
                </div>
                <div>
                  <input
                    id="brand-hide"
                    name="brand"
                    type="checkbox"
                    value="BF hide"
                  />
                  <label for="brand-hide">BF hide</label>
                </div>
              </div>
              <button className="form__button-show-more">Показать еще</button>
            </div>
          </li>

          <li className="form__item">
            <div className="form__title">
              <button>
                <img src="./img/icon/arrowForm.svg" alt="arrow" />
                <h3>Модель</h3>
              </button>
            </div>

            <div className="form__input-options">
              <input
                type="text"
                list="model"
                placeholder={"Введите модель шины"}
              />
              <datalist id="model">
                <option value="qwe" />
              </datalist>
              <div className="form__options-checkbox">
                <div>
                  <input
                    id="model-alina"
                    name="model"
                    type="checkbox"
                    value="ALINA"
                  />
                  <label for="model-alina">ALINA</label>
                </div>
                <div>
                  <input
                    id="model-bliwwas"
                    name="model"
                    type="checkbox"
                    value="BLIWWAS"
                  />
                  <label for="model-bliwwas">BLIWWAS</label>
                </div>
                <div>
                  <input
                    id="model-forcemode"
                    name="model"
                    type="checkbox"
                    value="FORCE Moode"
                  />
                  <label for="model-forcemode">FORCE Moode</label>
                </div>
                <div>
                  <input
                    id="model-icegide"
                    name="model"
                    type="checkbox"
                    value="ICE Gide"
                  />
                  <label for="model-icegide">ICE Gide</label>
                </div>
              </div>
              <button className="form__button-show-more">Показать еще</button>
            </div>
          </li>

          <li className="form__item">
            <div className="form__title">
              <h3>
                Технология
                <img
                  className="questionAlt"
                  src="./img/icon/question.svg"
                  alt="question"
                />
              </h3>
            </div>

            <div className="form__options-radio">
              <div>
                <input
                  id="technology-yes"
                  name="technology"
                  type="radio"
                  value="yes"
                />
                <label for="technology-yes">Да</label>
              </div>
              <div>
                <input
                  id="technology-not"
                  name="technology"
                  type="radio"
                  value="not"
                />
                <label for="technology-not">Нет</label>
              </div>
            </div>
          </li>

          <li className="form__item">
            <div className="form__title">
              <h3>Акции</h3>
            </div>

            <div className="form__options-action">
              <button className="action__button action__button--active">
                Sale
              </button>
              <button className="action__button action__button--active">
                New
              </button>
              <button className="action__button">Hit</button>
              <button className="action__button">Подарок</button>
            </div>
          </li>

          <li className="form__item">
            <div className="form__title">
              <button>
                <img src="./img/icon/arrowForm.svg" alt="arrow" />
                <h3>Страны</h3>
              </button>
            </div>

            <div className="form__input-options">
              <div className="form__options-checkbox">
                <div>
                  <input
                    id="country-russia"
                    name="country"
                    type="checkbox"
                    value="Россия"
                  />
                  <label for="country-russia">Россия</label>
                </div>
                <div>
                  <input
                    id="country-germany"
                    name="country"
                    type="checkbox"
                    value="Германия"
                  />
                  <label for="country-germany">Германия</label>
                </div>
              </div>
              <button className="form__button-show-more">Показать еще</button>
            </div>
          </li>
        </ul>

        <button className="form__submit">Подобрать</button>

        <button className="form__new-param">
          Дополнительные параметры
          <img src="./img/icon/arrowForm.svg" alt="arrow" />
        </button>
        <button className="form__reset">Сбросить фильтры</button>
      </form>
    </section>
  );
};

export default FilterControlPanel;
