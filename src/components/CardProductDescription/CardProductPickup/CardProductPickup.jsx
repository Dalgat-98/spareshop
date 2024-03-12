import "./style.scss";

const CardProductPickup = () => {
  // Как будет работать компонент(что дописать?)

  // CardProductPickup в дальнейщем будет получать id продукта -
  // и список(массив) магазинов(через запрос)

  // в будущем для каждого магазина(объекта) будет массив(catalog) объектов
  // каждый объект данного массива будет содержать два значения:
  // 1 - артикул продукта/id или чтото, что будет выделять каждый продукт
  // 2 - кол-во
  // они и будут отвечать за последниее два div каждого li
  // пример:
  // catalog: [{ id: "1213412", count: 32 }, { id: "1213322", count: 21 }],

  // Временный "источник" данных для отоброжения где покупатель может забрать товар
  const shopList = [
    {
      adress: "Санкт-Петербург, ул Большая Конюшенная, д 19",
      weekdayWorkSchedule: "08:00-19:00",
      workScheduleSunday: "09:00-17:00",
      // catalog: [{ id: "1213412", count: 32 }, { id: "1213322", count: 21 }],
    },
    {
      adress: "Санкт-Петербург, ул Большая Конюшенная, д 19",
      weekdayWorkSchedule: "08:00-19:00",
      workScheduleSunday: "09:00-17:00",
      // catalog: [{ id: "1213412", count: 32 }, { id: "1213322", count: 21 }],
    },
  ];

  const pickupShopsList = shopList.map((item) => {
    return (
      <li className="pickup__shops-item">
        <div className="adres">{item.adress}</div>
        <div className="worked">
          <p>
            <span>пн-сб: </span>
            {item.weekdayWorkSchedule}
          </p>
          <p>
            <span>вс: </span>
            {item.workScheduleSunday}
          </p>
        </div>
        <div className="available">Завтра и позднее</div>
        <div className="count">Мало</div>
        <button className="pickup__shops-button">Купить</button>
      </li>
    );
  });

  return (
    <section className="pickup">
      <form className="pickup__form">
        <div className="form__options-search">
          <label for="search-shop">Магазин</label>
          <input id="search-shop" type="search" />
        </div>
        <div className="form__options-radio">
          <div>
            <input id="pickup-today" name="pickup" type="radio" value="today" />
            <label for="pickup-today">Забрать сегодня</label>
          </div>
          <div>
            <input
              id="pickup-tomorrow-later"
              name="pickup"
              type="radio"
              value="tomorrow-later"
            />
            <label for="pickup-tomorrow-later">Забрать сегодня</label>
          </div>
        </div>
      </form>
      <div className="pickup__shops">
        <div className="pickup__shops-header">
          <div className="adres">Адрес</div>
          <div className="worked">Режим работы</div>
          <div className="available">Доступно</div>
          <div className="count">Количество</div>
        </div>
        <ul className="pickup__shops-list">{pickupShopsList}</ul>
      </div>
    </section>
  );
};

export default CardProductPickup;
