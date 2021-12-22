import { useLocation } from "react-router-dom";
import { ShowContext } from "./Context";
import { useContext } from "react";
import { logged } from "./Context";
export default function Header({ onBtnAdd, onBtnLogin }) {
  //style={{ backgroundColor: "green" }}
  const location = useLocation();
  const showAdd = useContext(ShowContext);
  const islogged = useContext(logged);
  return (
    <div>
      <header className="header">
        <h1>Task Traker App</h1>
        {location.pathname === '/' && <button
          className="btn"
          style={{ backgroundColor: "green" }}
          onClick={onBtnAdd}
        >
          {showAdd ? "Close" : "Add"}
        </button>}
        {islogged ? "" : <button className="btn" onClick={onBtnLogin}>Login</button>}
      </header>
    </div>
  );
}
