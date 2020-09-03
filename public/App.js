import Home from './Home.js';
import Privacypolicy from './Privacypolicy.js';
import Article from './c-articolo/Articolo.js';
import Offlinearticle from './offlinepage/Offlinearticle.js';
import Readoffline from './offlinepage/read/Readoffline.js';

function route(component, pathnamee) {
    //questa funzione reindirizza ogni componente al corretto url
    if (window.location.pathname === "/"+pathnamee) {
        component();};
}

function App() {
    route(Home, "");
    route(Privacypolicy, "privacypolicy");
    route(Article, "leggiarticolo");
    route(Offlinearticle, "offlinearticle");
    route(Readoffline, "readoffline")
}

export default App;