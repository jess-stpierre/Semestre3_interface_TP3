
//imports
import page from "page";
import Accueil from "./views/Accueil.js";
import Footer from "./components/Footer.js";
import Sources from "./views/Sources.js";
import Page404 from "./views/Page404.js";

class Application {

    // paramtres priver
    #vueActuelle;
    #conteneurHTML;

    /**
     * Constructeur qui sert comme routeur grace a Page!
     */
    constructor() {
        this.#conteneurHTML = document.querySelector("[data-application]");

        page(
          "/",
          function () {
            this.#vueActuelle = new Accueil(this);
            this.#vueActuelle.render();
            this.setFooter();
          }.bind(this)
        );

        page("/sources", function () {
            this.#vueActuelle = new Sources(this);
            this.setFooter();
        }.bind(this));

        page("/*", function () {
            this.#vueActuelle = new Page404(this);
            this.setFooter();
        }.bind(this));

        page();
    }

    /**
     * Ajout un footer au bas de la page
     */
    setFooter(){
        new Footer();
    }

    /**
     * Retourne le conteneur HTML qu'on va utiliser dans notre application
     */
    get conteneurHTML() {
        return this.#conteneurHTML;
    }
}

export default Application;