import { useState } from "react";
import "./Sidebar.scss";

export default function Sidebar({isOpen, onClose}) {

  const [openItem, setOpenItem] = useState(null)//state de abertura dos submenus do sidebar

  const toggleSubmenu = (item) => { //o state recebe o nome do submenu para então abri-lo
    setOpenItem(openItem === item ? null : item)
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        <div className='sidebar-header'>
        <img src="/static/images/logos/logo-preto.png" alt="Bebecê" />
          <button className="close-btn" onClick={onClose}>
          ✕
        </button>
      </div>


      <div className="sidebar-banner">
        <p>Celebration - 20 Anos</p>
        <a href="/">Conheça</a>
      </div>

        <nav>
          <ul className="menu">
            <li>Liquida</li>

            <li>
              <button className="sidebar-button" onClick={() => toggleSubmenu("sapatos")}>
                Sapatos <span>{openItem === "sapatos" ? "▲" : "▶"}</span> 
              </button>
              {openItem === "sapatos" && (
                <ul className="submenu">
                  <li>Scarpins</li>
                  <li>Mocassins</li>
                  <li>Sapatilhas</li>
                  <li>Mules</li>
                  <li>Peep Toe</li>
                  <li>Oxford</li>

                </ul>
              )}
            </li>
            <li>
              <button className="sidebar-button" onClick={() => toggleSubmenu("sandalias")}>
                Sandálias <span>{openItem === "sandalias" ? "▲" : "▶"}</span> {/*muda o icone do submenu que está aberto no momento para "▲"*/}
              </button>
              {openItem === "sandalias" && (
                <ul className="submenu">
                  <li>Rasteirinhas</li>
                  <li>Plataformas</li>
                  <li>Salto Alto</li>
                  <li>Anabelas</li>
                  <li>Tamancos</li>
                </ul>
              )}
            </li>

             <li>
              <button className="sidebar-button" onClick={() => toggleSubmenu("botas")}>
                Botas <span>{openItem === "botas" ? "▲" : "▶"}</span>
              </button>
              {openItem === "botas" && (
                <ul className="submenu">
                  <li>Coturnos</li>
                  <li>Over the Knee</li>
                  <li>Cano Curto</li>
                  <li>Cano Médio</li>
                  <li>Cano Longo</li>
                </ul>
              )}
            </li>
            <li>
              <button className="sidebar-button" onClick={() => toggleSubmenu("tenis")}>
                Tênis <span>{openItem === "tenis" ? "▲" : "▶"}</span>
              </button>
              {openItem === "tenis" && (
                <ul className="submenu">
                  <li>Casual</li>
                  <li>Chunky</li>
                  <li>Esportivo</li>
                  <li>Slip-on</li>
                  <li>Cano Alto</li>
                </ul>
              )}
            </li>

            <li className="outlet">Outlet</li>

          </ul>
        </nav>
      </aside>
    </>
  );
}
