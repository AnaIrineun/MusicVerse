  import { BrowserRouter, Route, Routes } from "react-router-dom";

  import Sobremim from "./paginas/Sobremim";
  import Inicio from "./paginas/Inicio";
  import Menu from "./componentes/menu";

  function App() {

    return (
      <BrowserRouter>

        <Menu/>

        <Routes>

          <Route path="/" element={<Inicio/>}/>
          <Route path="/Sobremim" element={<Sobremim/>}/>
          <Route path="*" element={<div>Página não encontrada</div>}/>
        </Routes>
        
      </BrowserRouter>
    );
  }

  export default App;
