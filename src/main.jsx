import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import oporaHeaderLogo from "./assets/opora-header-logo.png";
import oporaFooterLogo from "./assets/opora-footer-logo.png";
import chairmanPhoto from "./assets/sergey-pakreev.webp";
import conferencePhoto from "./assets/business-conference.webp";
import "./styles.css";

const benefits = [
  ["01", "Нужные контакты", "Предприниматели, эксперты и\u00A0партнёры, которые помогают решать задачи без холодного поиска."],
  ["02", "Поддержка в сложном", "Практический опыт сообщества и\u00A0помощь в\u00A0поиске решения при проверках и\u00A0спорных ситуациях."],
  ["03", "Новые возможности", "Совместные проекты, клиенты, развитие компетенций и\u00A0выход за\u00A0пределы одной отрасли."],
  ["04", "Репутация", "Участие в\u00A0профессиональном сообществе — сигнал надёжности для партнёров и\u00A0клиентов."],
  ["05", "Быть услышанным", "Диалог с\u00A0властью через общественные советы, рабочие группы и\u00A0общую позицию бизнеса."],
  ["06", "Закрытый чат", "Быстрый вопрос коллегам, обмен опытом, поиск контакта или предложение сотрудничества."],
];

const events = [
  { date: "12", month: "НОЯ", title: "Завтрак с Уполномоченным", tag: "Закрытый разбор", text: "Проверки, давление, типовые ошибки и\u00A0подготовка сильной позиции." },
  { date: "19", month: "НОЯ", title: "Маркетплейсы и локальные производители", tag: "Комитет торговли", text: "Практическая встреча об\u00A0упаковке, логистике и\u00A0цифровых полках." },
  { date: "27", month: "НОЯ", title: "Форум «ФОКУС27»", tag: "Большое событие", text: "Партнёрские сессии, выставка местных производителей и\u00A0повестка региона." },
];

const structure = {
  bureau: {
    title: "Бюро защиты",
    lead: "Решаем проблему до того, как она станет критичной.",
    text: "Первичная консультация для членов отделения, маршрутизация к\u00A0экспертам и\u00A0профильным институтам. Обращайтесь при первом сигнале: проверке, требовании, блокировке счёта или давлении контрагента.",
  },
  committees: {
    title: "Отраслевые комитеты",
    lead: "Экспертиза тех, кто работает в той же реальности.",
    text: "Торговля и\u00A0ритейл, промышленность, строительство и\u00A0ЖКХ, АПК и\u00A0туризм, IT и\u00A0цифровизация. Здесь формируется рабочая повестка и\u00A0запускаются совместные проекты.",
  },
  voice: {
    title: "Голос во власти",
    lead: "Представляем позицию бизнеса там, где принимаются решения.",
    text: "Члены отделения входят в\u00A0общественные советы при УФНС, УФАС, профильных министерствах и\u00A0Общественную палату Псковской области.",
  },
};

const faqs = [
  ["Сколько стоит членство?", "Вступительный взнос — 10 000 ₽ единоразово, членский взнос — 10 000 ₽ в\u00A0год."],
  ["Кто может вступить?", "Предприниматели старше 18 лет, индивидуальные предприниматели, юридические лица и\u00A0общественные объединения, разделяющие цели организации."],
  ["Можно сначала прийти на мероприятие?", "Да. Вы можете познакомиться с\u00A0отделением и\u00A0посетить открытое мероприятие до\u00A0принятия решения о\u00A0вступлении."],
  ["Я самозанятый. Могу вступить?", "Да, если вы соответствуете требованиям Устава и\u00A0разделяете цели организации."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [activeStructure, setActiveStructure] = useState("bureau");
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.classList.add("menu-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div className="progress" />
      <header className="header">
        <a className="logo" href="#top" aria-label="ОПОРА Псков — на главную">
          <img className="header-logo" src={oporaHeaderLogo} alt="ОПОРА РОССИИ" />
        </a>
        <nav className={`nav ${menuOpen ? "nav--open" : ""}`} id="header-navigation" aria-label="Основная навигация">
          <a href="#structure" onClick={() => setMenuOpen(false)}>Об организации</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Новости</a>
          <a href="#events" onClick={() => setMenuOpen(false)}>Мероприятия</a>
          <a href="#structure" onClick={() => setMenuOpen(false)}>Защита бизнеса</a>
          <a href="#join" onClick={() => setMenuOpen(false)}>Обратиться в&nbsp;Бюро</a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
          <a className="nav-join" href="#join" onClick={() => setMenuOpen(false)}>Вступить</a>
        </nav>
        <button className={`menu-toggle ${menuOpen ? "menu-toggle--open" : ""}`} type="button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} aria-controls="header-navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
        </button>
        <a className="button button--small" href="#join">Вступить</a>
      </header>
      <button className={`menu-backdrop ${menuOpen ? "menu-backdrop--visible" : ""}`} type="button" aria-label="Закрыть меню" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} />

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-beam" aria-hidden="true" />
          <div className="hero-signal" aria-hidden="true">
            <span />
            <span />
            <span />
            <i />
          </div>
          <div className="hero-copy">
            <div className="hero-title" role="heading" aria-level="1">
              <span>Сильный бизнес.</span>
              <span><em>Сильный регион.</em></span>
            </div>
            <div className="hero-bottom">
              <p className="hero-lead">Объединяем предпринимателей Псковской области, чтобы вместе расти, защищать интересы и&nbsp;влиять на&nbsp;будущее региона.</p>
              <div className="hero-actions">
                <a className="button button--white" href="#join">Стать частью сообщества <Arrow /></a>
                <a className="text-link text-link--light" href="#benefits">Как это работает ↓</a>
              </div>
            </div>
          </div>
          <div className="hero-pillars" aria-label="Основные направления">
            <span>Сообщество</span>
            <span>Экспертиза</span>
            <span>Влияние</span>
          </div>
          <div className="hero-foot">
            <span>Псковское региональное отделение</span>
            <span className="scroll-note">ОПОРА РОССИИ</span>
          </div>
        </section>

        <section className="metrics" aria-label="О сообществе в цифрах">
          <div><b>350+</b><span>предпринимателей<br />в&nbsp;орбите отделения</span></div>
          <div><b>12</b><span>отраслевых<br />направлений</span></div>
          <div><b>40+</b><span>деловых событий<br />ежегодно</span></div>
          <div><b>24</b><span>партнёра и&nbsp;института<br />развития</span></div>
        </section>

        <section className="manifesto section">
          <figure className="chairman-photo">
            <img src={chairmanPhoto} alt="Сергей Владимирович Пакреев, председатель Псковского регионального отделения «ОПОРЫ РОССИИ»" />
          </figure>
          <div className="manifesto-copy">
            <blockquote>
              «Мы не&nbsp;продаём членство. Мы собираем вокруг стола людей, которым важно, чтобы в&nbsp;Псковской области бизнесу было <em>проще работать, расти и&nbsp;быть услышанным</em>».
            </blockquote>
            <div className="signature">
              <div>
                <b>Председатель Псковского регионального отделения</b>
                <strong>Пакреев Сергей Владимирович</strong>
              </div>
              <a className="round-link" href="#join" aria-label="Обсудить участие"><Arrow /></a>
            </div>
          </div>
        </section>

        <section className="benefits section" id="benefits">
          <div className="section-head">
            <div>
              <div className="section-title" role="heading" aria-level="2">Не список привилегий,<br />а <em>рабочая среда</em></div>
            </div>
            <p>Три опоры превращаются в&nbsp;конкретный результат: контакт, защиту, клиента, решение и&nbsp;доступ к&nbsp;возможностям.</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(([number, title, text]) => (
              <article className="benefit-card" key={number}>
                <div className="benefit-icon" aria-hidden="true">{number === "01" ? "●—●" : number === "02" ? "◇" : number === "03" ? "↗" : number === "04" ? "✦" : number === "05" ? "◎" : "///"}</div>
                <div className="card-title" role="heading" aria-level="3">{title}</div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="federal">
          <div className="federal-content">
            <div className="federal-title" role="heading" aria-level="2">Вся страна — на расстоянии <em>одного контакта</em></div>
            <p>Псковское отделение — часть федеральной сети «ОПОРЫ РОССИИ». Находите партнёров, поставщиков и&nbsp;экспертов через доверенное предпринимательское сообщество.</p>
            <div className="federal-stats">
              <div><b>1 шаг</b><span>до&nbsp;нужного контакта</span></div>
              <div><b>0</b><span>лишних посредников</span></div>
            </div>
            <a className="button button--white" href="#join">Войти в&nbsp;сеть <Arrow /></a>
          </div>
          <div className="federal-visual" aria-hidden="true">
            <div className="federal-number"><b>80+</b><span>регионов<br />в&nbsp;одной сети</span></div>
            <svg className="network-lines" viewBox="0 0 600 600" fill="none">
              <path d="M78 416L181 303L293 369L386 224L528 128" />
              <path d="M181 303L233 153L386 224L468 414L293 369L142 502" />
              <path d="M233 153L347 82L528 128" />
              <circle cx="78" cy="416" r="7" />
              <circle cx="181" cy="303" r="7" />
              <circle cx="293" cy="369" r="7" />
              <circle cx="386" cy="224" r="7" />
              <circle cx="528" cy="128" r="7" />
              <circle cx="233" cy="153" r="7" />
              <circle cx="347" cy="82" r="7" />
              <circle cx="468" cy="414" r="7" />
              <circle cx="142" cy="502" r="7" />
            </svg>
            <span className="network-pulse" />
          </div>
        </section>

        <section className="events section" id="events">
          <div className="section-head">
            <div>
              <div className="section-title" role="heading" aria-level="2">Где сообщество<br /><em>встречается лично</em></div>
            </div>
            <p>Без формальных докладов. Встречаемся, чтобы разбирать задачи и&nbsp;запускать новые связи.</p>
          </div>
          <div className="event-layout">
            <figure className="event-photo">
              <img src={conferencePhoto} alt="Участники деловой конференции слушают выступление" />
              <figcaption>Живой диалог вместо формальностей</figcaption>
            </figure>
            <div className="event-list">
              {events.map((event) => (
                <article className="event-card" key={event.date}>
                  <div className="event-date"><b>{event.date}</b><span>{event.month}</span></div>
                  <div>
                    <div className="event-title" role="heading" aria-level="3">{event.title}</div>
                    <p>{event.text}</p>
                  </div>
                  <a href="#join" aria-label={`Записаться: ${event.title}`}><Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="structure section" id="structure">
          <div className="section-title section-title--light" role="heading" aria-level="2">Точки входа,<br />а не оргштатная таблица</div>
          <div className="structure-tabs" role="tablist" aria-label="Направления работы">
            {Object.entries(structure).map(([key, item]) => (
              <button className={activeStructure === key ? "active" : ""} key={key} onClick={() => setActiveStructure(key)} role="tab" aria-selected={activeStructure === key}>
                {item.title}
              </button>
            ))}
          </div>
          <div className="structure-panel" role="tabpanel">
            <div className="panel-lead">{structure[activeStructure].lead}</div>
            <p>{structure[activeStructure].text}</p>
            <a className="text-link text-link--light" href="#join">Обсудить задачу <Arrow /></a>
          </div>
        </section>

        <section className="stories section" id="faces">
          <div className="section-head">
            <div>
              <div className="section-title" role="heading" aria-level="2">Что меняется<br /><em>после вступления</em></div>
            </div>
          </div>
          <div className="story-grid">
            <article><p>«Стал быстрее решать вопросы с&nbsp;проверками. Важно, что есть к&nbsp;кому обратиться до&nbsp;кризиса».</p><b>— Индивидуальный предприниматель, Псков</b></article>
            <article className="story-dark"><p>«Через комитет нашли подрядчика и&nbsp;партнёра по&nbsp;поставкам в&nbsp;другой регион».</p><b>— Производственная компания, Псковская область</b></article>
            <article><p>«Получили обратную связь до&nbsp;того, как изменение ударило по&nbsp;бизнес-модели».</p><b>— Сервисный бизнес, Великие Луки</b></article>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div>
            <div className="section-title" role="heading" aria-level="2">Коротко<br /><em>и по делу</em></div>
            <p className="faq-intro">Если ответа нет — напишите. Поможем разобраться до&nbsp;подачи заявления.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{question}</span><b>{openFaq === index ? "−" : "+"}</b>
                </button>
                <div className="faq-answer"><p>{answer}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="join section" id="join">
          <div className="join-copy">
            <div className="join-title" role="heading" aria-level="2">Ваш бизнес.<br />Ваш голос.<br /><em>Ваша опора.</em></div>
            <p>Оставьте вопрос — мы поймём вашу задачу и&nbsp;подскажем следующий шаг.</p>
          </div>
          <form className="join-form" onSubmit={submit}>
            {sent ? (
              <div className="success" role="status">
                <span>✓</span>
                <div className="form-title" role="heading" aria-level="3">Вопрос принят</div>
                <p>Менеджер отделения свяжется с&nbsp;вами в&nbsp;рабочее время.</p>
                <button type="button" onClick={() => setSent(false)}>Отправить ещё один вопрос</button>
              </div>
            ) : (
              <>
                <div className="form-title" role="heading" aria-level="3">Расскажите о вашей задаче</div>
                <label>ФИО<input required placeholder="Иван Петров" /></label>
                <div className="form-row">
                  <label>Телефон<input required type="tel" placeholder="+7 900 000-00-00" /></label>
                  <label>Электронная почта<input type="email" placeholder="name@company.ru" /></label>
                </div>
                <label>Задача обращения
                  <select defaultValue="">
                    <option value="" disabled>Выберите вариант</option>
                    <option>Вступление в&nbsp;отделение</option>
                    <option>Консультация Бюро защиты</option>
                    <option>Участие в&nbsp;мероприятии</option>
                    <option>Партнёрство и&nbsp;сотрудничество</option>
                  </select>
                </label>
                <label>Сообщение<textarea rows="3" placeholder="Коротко опишите задачу" /></label>
                <div className="consent-options">
                  <label className="consent-option">
                    <input type="checkbox" required />
                    <span>Принимаю условия <a href="#">Политики конфиденциальности</a></span>
                  </label>
                  <label className="consent-option">
                    <input type="checkbox" required />
                    <span>Даю разрешение на&nbsp;<a href="#">обработку персональных данных</a></span>
                  </label>
                </div>
                <button className="button button--submit" type="submit">Отправить вопрос <Arrow /></button>
              </>
            )}
          </form>
        </section>
      </main>

      <footer className="footer" id="contacts">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#top" aria-label="ОПОРА РОССИИ — на главную">
              <img src={oporaFooterLogo} alt="ОПОРА РОССИИ" />
            </a>
            <p>Место силы для предпринимателей Псковской области: сообщество, экспертиза, защита и&nbsp;влияние.</p>
          </div>
          <nav className="footer-column" aria-label="События">
            <strong>События</strong>
            <a href="#events">Новости</a>
            <a href="#events">Мероприятия</a>
            <a href="#benefits">Проекты</a>
          </nav>
          <nav className="footer-column" aria-label="Предпринимателям">
            <strong>Предпринимателям</strong>
            <a href="#structure">Комитеты</a>
            <a href="#join">Вступить</a>
            <a href="#structure">Бюро по&nbsp;защите прав</a>
            <a href="#faq">Вопрос-ответ</a>
          </nav>
          <nav className="footer-column" aria-label="Об организации">
            <strong>Об организации</strong>
            <a href="#structure">Структура организации</a>
            <a href="#structure">Представительство в&nbsp;органах власти</a>
            <a href="#faces">Лица псковской «ОПОРЫ»</a>
            <a href="#events">Пресса о&nbsp;нас</a>
            <a href="https://opora.ru/about/" target="_blank" rel="noreferrer">Документы</a>
          </nav>
          <div className="footer-column footer-contacts">
            <strong>Контакты</strong>
            <a href="mailto:oporarossii.pskov@mail.ru">oporarossii.pskov@mail.ru</a>
            <a href="tel:+78112700075">+7 (8112) 70-00-75</a>
            <address>180020, г. Псков,<br />ул. Советская, д. 25,<br />пом. 1001</address>
            <span>Пн–Пт 9:00–18:00<br />(обед 13:00–14:00)</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Псковское региональное отделение «ОПОРЫ РОССИИ»</span>
          <div>
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Согласие на&nbsp;обработку персональных данных</a>
            <a href="https://opora.ru/" target="_blank" rel="noreferrer">Федеральная организация <Arrow /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
