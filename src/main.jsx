import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main className="page">
      <section className="card" aria-labelledby="welcome-title">
        <div className="eyebrow">FIGMACS</div>
        <div className="title" id="welcome-title" role="heading" aria-level="1">
          Проект готов к работе
        </div>
        <p className="description">
          Минимальное React-приложение настроено и запущено через Figma Make.
        </p>
        <div className="status">
          <span className="status-dot" aria-hidden="true" />
          Bootstrap подключён
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
