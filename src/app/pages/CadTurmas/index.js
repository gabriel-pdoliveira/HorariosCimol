import { Link } from "react-router-dom";
export function CadTurmas() {

  function getTurma() {
    var nameTurma=document.getElementById("nameTurma").value
    alert("Turma "+nameTurma+" adicionada!")
  }



    return (
      <div className="container">
        <div className="head">
          <Link to="/home">Voltar</Link>
          <h1>CadTurmas</h1>
        </div>
        <div className="cadTurma">
          <input type="text" id="nameTurma" placeholder="Digite a turma" />
          <button id="addTurma" onClick={getTurma}>Adcionar Turma</button>
        </div>
      </div>
    );
  }