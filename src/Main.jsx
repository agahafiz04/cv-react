import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./main.css";

export function Header() {
  return (
    <header>
      <h1>CV Generator</h1>
      <p>CV Generator Can Create Your Profile With Ease</p>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p>
        Copyright @agahafiz <i className="devicon-github-original colored"></i>
      </p>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>
);
