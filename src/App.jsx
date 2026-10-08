import DadosContato from "./components/DadosContato";
import FotoPerfil from "./components/FotoPerfil";

export default function App(){
  return(
    <div className= "card">
      <FotoPerfil />
      <DadosContato />
    </div>
  )
}