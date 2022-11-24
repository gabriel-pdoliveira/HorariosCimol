import { Link } from "react-router-dom";
//import firebase from "../../shared/services/firebase";
//import { addDoc, collection } from "firebase/firestore"; 


function getTurma() {
  var nameTurma=document.getElementById("nameTurma").value
  alert("Turma "+nameTurma+" adicionada!")
}

export function CadTurmas() {

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