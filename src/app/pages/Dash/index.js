import { Link } from "react-router-dom";
export function Dash() {
    return (
      <div className="container">
        <h1>Horarios Cadastrados</h1>
        <Link to="/cadTurmas">CadTurmas</Link>
        <Link to="/cadHorarios">CadHorarios</Link>
      </div>
    );
  }
