
//imports
import { animate, stagger, cubicBezier } from "animejs";

class Sources {

    //paramtres priver
    #application;

    /**
     * Constructeur de la classe Sources, va initier application et appeler render
     * @param {*} application
     */
    constructor(application){

        this.#application = application;

        this.render();
    }

    /**
     * Methode qui va afficher et inserer notre HTML ajoutant des animations pour la page sources.
     */
    render(){

        this.#application.conteneurHTML.innerHTML = "";

        let gabarit = `
                    <div class='text-opacity-100 flex-col place-self-center min-w-1/2 m-20 p-5 bg-amber-950 hover:bg-black text-white
                     opacity-100 border-black border-2 rounded-md'>
                        <h2 data-text class="mb-10 text-2xl flex justify-center items-center">Sources de données et
                        librairies utilisées</h2>
                        <p data-text class="mb-5"><b>Les données vient de : </b>
                            <a class="underline hover:text-amber-700" href="https://kitsu.docs.apiary.io/#">kitsu.io</a> et <a class="underline hover:text-amber-700" href="https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank">kitsu.io/api/edge/anime</a></p>
                        <p data-text class="mb-3"><b>Les librairies utilisées sont : </b>
                            <ul>
                                <li data-text> - Moment </li>
                                <li data-text> - PageJs </li>
                                <li data-text> - Vite </li>
                                <li data-text> - AnimeJs </li>
                                <li data-text> - TailwindCSS </li>
                                <li data-text> - Font-Awesome </li>
                                <li data-text> - ToastrJs </li>
                            </ul>
                        </p>
                    </div>
                `;

        this.#application.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);

        animate(this.#application.conteneurHTML, {
            opacity: [0, 1],
            scale: [0, 1.1, 1],
            delay: stagger(300),
            duration: 1000,
            ease: cubicBezier(0.7, 0.1, 0.5, 0.9),
        });

        const text = this.#application.conteneurHTML.querySelectorAll("[data-text]");

        animate(text, {
            opacity: [0, 1],
            delay: stagger(500),
            duration: 1000,
        });
    }

}

export default Sources;