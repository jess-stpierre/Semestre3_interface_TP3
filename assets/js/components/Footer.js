
//imports
import moment from "moment";

class Footer {

    // paramtres priver
    #conteneurHTML;

    /**
     * Constructeur pour la class Footer qui trouve le conteneur pour le footer et declenche la methode render
     */
    constructor(){

        this.#conteneurHTML = document.querySelector("[data-footer]");

        this.render();
    }

    /**
     * Cet method va ajouter notre footer au bas de chaque page html
     */
    render(){
        let gabarit = `
            <div class='bg-amber-700 w-full p-5 flex justify-center fixed bottom-0'>
            <h2 class="text-md flex justify-start items-center">&copy; ${moment().format("YYYY")}, Tout droit Reserver. Jessica St-Pierre Gagne pour un projet educatif</h2>
            </div>
        `;

        this.#conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    }
}

export default Footer;