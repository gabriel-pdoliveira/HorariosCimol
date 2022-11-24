import { Link } from "react-router-dom";
export function CadHorario() {
  return (
    <div className="container">
      <div className="head">
        <Link to="/home">Voltar</Link>
        <h1>CadHorarios</h1>
      </div> 
      <div>
        <select name="cursos" id="cursos">
          <option value="">Cursos</option>
          <option value="">Design</option>
          <option value="">Eletro</option>
          <option value="">Elo</option>
          <option value="">Info</option>
          <option value="">Mab</option>
          <option value="">Mec</option>
          <option value="">Mov</option>
          <option value="">Qui</option>
        </select>
        <select name="turmas" id="turmas">
          <option value="">Turmas</option>
        </select>
      </div>
      <div className="cadhorario">
        <div className="turnos">
          <h5>Manhã</h5>
          <input type="text" placeholder="1° período" />
          <input type="text" placeholder="2° período" />
          <input type="text" placeholder="3° período" />
          <input type="text" placeholder="4° período" />
          <input type="text" placeholder="5° período" />
        </div>
        <div className="turnos">
          <h5>Tarde</h5>
          <input type="text" placeholder="1° período" />
          <input type="text" placeholder="2° período" />
          <input type="text" placeholder="3° período" />
          <input type="text" placeholder="4° período" />
          <input type="text" placeholder="5° período" />
        </div>
      </div>
      <button id="save">Salvar</button>
    </div>
  );
}
