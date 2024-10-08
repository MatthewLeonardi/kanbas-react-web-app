import { Link } from "react-router-dom";

export default function TOC() {
    return (
      <ul>
        <li>Matthew Leonardi, Section 1</li>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
        <li><Link to="https://github.com/MatthewLeonardi/kanbas-react-web-app/tree/main">Github Link</Link></li>
      </ul>
    );
  }
  