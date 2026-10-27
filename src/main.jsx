import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import oporaLogo from "./assets/opora-logo.svg";
import "./styles.css";

const benefits = [
  ["01", "Нужные контакты", "Предприниматели, эксперты и партнёры, которые помогают решать задачи без холодного поиска."],
  ["02", "Поддержка в сложном", "Практический опыт сообщества и помощь в поиске решения при проверках и спорных ситуациях."],
  ["03", "Новые возможности", "Совместные проекты, клиенты, развитие компетенций и выход за пределы одной отрасли."],
  ["04", "Репутация", "Участие в профессиональном сообществе — сигнал надёжности для партнёров и клиентов."],
  ["05", "Быть услышанным", "Диалог с властью через общественные советы, рабочие группы и общую позицию бизнеса."],
  ["06", "Закрытый чат", "Быстрый вопрос коллегам, обмен опытом, поиск контакта или предложение сотрудничества."],
];

const events = [
  { date: "12", month: "НОЯ", title: "Завтрак с Уполномоченным", tag: "Закрытый разбор", text: "Проверки, давление, типовые ошибки и подготовка сильной позиции." },
  { date: "19", month: "НОЯ", title: "Маркетплейсы и локальные производители", tag: "Комитет торговли", text: "Практическая встреча об упаковке, логистике и цифровых полках." },
  { date: "27", month: "НОЯ", title: "Форум «ФОКУС27»", tag: "Большое событие", text: "Партнёрские сессии, выставка местных производителей и повестка региона." },
];

const structure = {
  bureau: {
    title: "Бюро защиты",
    lead: "Решаем проблему до того, как она станет критичной.",
    text: "Первичная консультация для членов отделения, маршрутизация к экспертам и профильным институтам. Обращайтесь при первом сигнале: проверке, требовании, блокировке счёта или давлении контрагента.",
  },
  committees: {
    title: "Отраслевые комитеты",
    lead: "Экспертиза тех, кто работает в той же реальности.",
    text: "Торговля и ритейл, промышленность, строительство и ЖКХ, АПК и туризм, IT и цифровизация. Здесь формируется рабочая повестка и запускаются совместные проекты.",
  },
  voice: {
    title: "Голос во власти",
    lead: "Представляем позицию бизнеса там, где принимаются решения.",
    text: "Члены отделения входят в общественные советы при УФНС, УФАС, профильных министерствах и Общественную палату Псковской области.",
  },
};

const faqs = [
  ["Сколько стоит членство?", "Вступительный взнос — 10 000 ₽ единоразово, членский взнос — 10 000 ₽ в год."],
  ["Кто может вступить?", "Предприниматели старше 18 лет, индивидуальные предприниматели, юридические лица и общественные объединения, разделяющие цели организации."],
  ["Можно сначала прийти на мероприятие?", "Да. Вы можете познакомиться с отделением и посетить открытое мероприятие до принятия решения о вступлении."],
  ["Я самозанятый. Могу вступить?", "Да, если вы соответствуете требованиям Устава и разделяете цели организации."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [activeStructure, setActiveStructure] = useState("bureau");
  const [openFaq, setOpenFaq] = useState(0);
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <div className="progress" />
      <header className="header">
        <a className="logo" href="#top" aria-label="ОПОРА Псков — на главную">
          <img className="logo-mark" src={oporaLogo} alt="" />
          <span className="logo-copy"><strong>ОПОРА РОССИИ</strong><b>Псковское отделение</b></span>
        </a>
        <nav className="nav" aria-label="Основная навигация">
          <a href="#benefits">Польза</a>
          <a href="#events">События</a>
          <a href="#structure">Структура</a>
          <a href="#faq">Вопросы</a>
        </nav>
        <a className="button button--small" href="#join">Вступить <Arrow /></a>
      </header>

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
              <p className="hero-lead">Объединяем предпринимателей Псковской области, чтобы вместе расти, защищать интересы и влиять на будущее региона.</p>
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
          <div><b>350+</b><span>предпринимателей<br />в орбите отделения</span></div>
          <div><b>12</b><span>отраслевых<br />направлений</span></div>
          <div><b>40+</b><span>деловых событий<br />ежегодно</span></div>
          <div><b>24</b><span>партнёра и института<br />развития</span></div>
        </section>

        <section className="manifesto section">
          <blockquote>
            «Мы не продаём членство. Мы собираем вокруг стола людей, которым важно, чтобы в Псковской области бизнесу было <em>проще работать, расти и быть услышанным</em>».
          </blockquote>
          <div className="signature">
            <div className="avatar">ОП</div>
            <div><b>Председатель регионального отделения</b><span>«ОПОРА РОССИИ» · Псков</span></div>
            <a className="round-link" href="#join" aria-label="Обсудить участие"><Arrow /></a>
          </div>
        </section>

        <section className="benefits section" id="benefits">
          <div className="section-head">
            <div>
              <div className="section-title" role="heading" aria-level="2">Не список привилегий,<br />а <em>рабочая среда</em></div>
            </div>
            <p>Три опоры превращаются в конкретный результат: контакт, защиту, клиента, решение и доступ к возможностям.</p>
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
            <p>Псковское отделение — часть федеральной сети «ОПОРЫ РОССИИ». Находите партнёров, поставщиков и экспертов через доверенное предпринимательское сообщество.</p>
            <div className="federal-stats">
              <div><b>1 шаг</b><span>до нужного контакта</span></div>
              <div><b>0</b><span>лишних посредников</span></div>
            </div>
            <a className="button button--white" href="#join">Войти в сеть <Arrow /></a>
          </div>
          <div className="federal-visual" aria-hidden="true">
            <div className="federal-number"><b>80+</b><span>регионов<br />в одной сети</span></div>
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
            <p>Без формальных докладов. Встречаемся, чтобы разбирать задачи и запускать новые связи.</p>
          </div>
          <div className="event-layout">
            <figure className="event-photo">
              <img src="https://images.unsplash.com/photo-1769798643237-8642a3fbe5bc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1400" alt="Участники деловой конференции слушают выступление" />
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

        <section className="stories section">
          <div className="section-head">
            <div>
              <div className="section-title" role="heading" aria-level="2">Что меняется<br /><em>после вступления</em></div>
            </div>
          </div>
          <div className="story-grid">
            <article><p>«Стал быстрее решать вопросы с проверками. Важно, что есть к кому обратиться до кризиса».</p><b>— Индивидуальный предприниматель, Псков</b></article>
            <article className="story-dark"><p>«Через комитет нашли подрядчика и партнёра по поставкам в другой регион».</p><b>— Производственная компания, Псковская область</b></article>
            <article><p>«Получили обратную связь до того, как изменение ударило по бизнес-модели».</p><b>— Сервисный бизнес, Великие Луки</b></article>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div>
            <div className="section-title" role="heading" aria-level="2">Коротко<br /><em>и по делу</em></div>
            <p className="faq-intro">Если ответа нет — напишите. Поможем разобраться до подачи заявления.</p>
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
            <p>Оставьте вопрос — мы поймём вашу задачу и подскажем следующий шаг.</p>
          </div>
          <form className="join-form" onSubmit={submit}>
            {sent ? (
              <div className="success" role="status">
                <span>✓</span>
                <div className="form-title" role="heading" aria-level="3">Вопрос принят</div>
                <p>Менеджер отделения свяжется с вами в рабочее время.</p>
                <button type="button" onClick={() => setSent(false)}>Отправить ещё один вопрос</button>
              </div>
            ) : (
              <>
                <div className="form-title" role="heading" aria-level="3">Расскажите о вашей задаче</div>
                <label>ФИО<input required placeholder="Иван Петров" /></label>
                <div className="form-row">
                  <label>Телефон<input required type="tel" placeholder="+7 900 000-00-00" /></label>
                  <label>Email<input type="email" placeholder="name@company.ru" /></label>
                </div>
                <label>Задача обращения
                  <select defaultValue="">
                    <option value="" disabled>Выберите вариант</option>
                    <option>Вступление в отделение</option>
                    <option>Консультация Бюро защиты</option>
                    <option>Участие в мероприятии</option>
                    <option>Партнёрство и сотрудничество</option>
                  </select>
                </label>
                <label>Сообщение<textarea rows="3" placeholder="Коротко опишите задачу" /></label>
                <button className="button button--submit" type="submit">Отправить вопрос <Arrow /></button>
                <small>Нажимая кнопку, вы соглашаетесь на обработку персональных данных.</small>
              </>
            )}
          </form>
        </section>
      </main>

      <footer className="footer">
        <a className="logo logo--footer" href="#top"><img className="logo-mark" src={oporaLogo} alt="" /><span className="logo-copy"><strong>ОПОРА РОССИИ</strong><b>Псковское отделение</b></span></a>
        <p>Псковское региональное отделение<br />«ОПОРЫ РОССИИ»</p>
        <div><a href="#benefits">Польза</a><a href="#events">События</a><a href="#structure">Структура</a></div>
        <div><a href="tel:+70000000000">+7 000 000-00-00</a><a href="mailto:pskov@opora.example">pskov@opora.example</a></div>
        <span className="copyright">© 2025 · Псков</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
