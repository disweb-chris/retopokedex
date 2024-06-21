import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../containers/Home";
import Contact from "../containers/Contact";
import Layout from "../components/Layout";
import Somos from "../containers/Somos";
import Pokemones from "../containers/Pokemones";
import Pokemon from "../containers/Pokemon";
import PokeFavoritos from "../containers/PokeFavoritos";
import UsarContexto from "../context/UsarContexto";


function App() {
    return ( 
        <BrowserRouter>
        <UsarContexto>
            <Layout>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/contacto" element={<Contact></Contact>}></Route>
                <Route path="/somos" element={<Somos></Somos>}></Route>
                <Route path="/pokemones" element={<Pokemones></Pokemones>}></Route>
                <Route path="/pokemones/*" element={<Pokemon></Pokemon>}></Route>
                <Route path="/favoritos/*" element={<PokeFavoritos></PokeFavoritos>}></Route>
            </Routes>
            </Layout>
        </UsarContexto>
        </BrowserRouter>
     );
}

export default App;