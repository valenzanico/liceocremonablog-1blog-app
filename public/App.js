import Home from './Home.js';//import all app pages
import Privacypolicy from './Privacypolicy.js';
import Article from './c-articolo/Articolo.js';
import Offlinearticle from './offlinepage/Offlinearticle.js';
import Readoffline from './offlinepage/read/Readoffline.js';

function route(component, pathnamee) {
    //questa funzione reindirizza ogni componente al corretto url
    //router function, redirect every component to rhe right url
    if (window.location.pathname === "/"+pathnamee) {
        component();};
}

function App() {//app main function
    route(Home, "");//route index
    route(Privacypolicy, "privacypolicy");//route privacy policy
    route(Article, "leggiarticolo");//route reader
    route(Offlinearticle, "offlinearticle");//route offline article index
    route(Readoffline, "readoffline")//route offline reader
}

App();