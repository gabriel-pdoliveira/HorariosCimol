import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CadTurmas, SingIn, CadHorario, Dash } from "../pages";

export const Rota = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SingIn/>}/>
                <Route path="/cadTurmas" element={<CadTurmas/>}/>
                <Route path="/cadHorarios" element={<CadHorario/>}/>
                <Route path="/home" element={<Dash/>}/>
            </Routes>
        </BrowserRouter>
    )
}