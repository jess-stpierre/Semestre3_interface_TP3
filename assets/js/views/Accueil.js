
//imports
import { animate, stagger, cubicBezier } from "animejs";
import toastr from "toastr";

class Accueil {

    // paramtres priver
    #application;

    /**
     * Constructeur de la classe Accueil, vas initier le paramtre application
     * @param {*} application
     */
    constructor(application){

        this.#application = application;
    }

    /**
     * Methode render qui sert a afficher du contenu, dans notre cas, vas appeler la methode rechercherAnime
     */
    render(){
        this.rechercherAnime();
    }

    /**
     * Methode async qui va chercher tous les anime dans notre base de donnees et les affiche chaqu'une avec une animation.
     */
    async rechercherAnime(){

        try {
            const requete = await fetch('https://kitsu.io/api/edge/anime?page[limit]=20&sort=popularityRank', {
            });

            const reponse = await requete.json();

            if(reponse.ok === false || requete.ok === false) throw new Error("Une erreur est survenue durant la requete du database");
            else {
                toastr.success('Les données de la database ont ete recuperer avec succes!', 'Succes', {timeOut: 10000})
            }

            this.#application.conteneurHTML.innerHTML = "";

            let gabarit = "<div class='p-5 grid grid-cols-3 gap-3'>";
            reponse.data.forEach(function (anime) {
            gabarit += `
                    <div class="flex flex-col gap-4 p-5 bg-amber-950 hover:bg-black text-white basis-1/3 opacity-0
                    border-black border-2 rounded-md" data-anime>
                        <h2 class="text-white text-2xl font-bold mr-4">
                            ${anime.attributes.canonicalTitle}
                        </h2>
                        <h3>
                            <b> Moyenne de Classement: </b> ${anime.attributes.averageRating}
                        </h3>
                        <div class="flex gap-4">
                            <img class="border-black border-2 mask-cover mx-auto block h-100 rounded-md sm:mx-0 sm:shrink-0" src="${anime.attributes.posterImage.small}" alt="Illustration de ${anime.attributes.canonicalTitle}">
                            <span>
                            <b> Description en anglais du anime : </b> ${anime.attributes.synopsis}
                            </span>
                        </div>

                    </div>`;
            });
            gabarit += "</div>";

            this.#application.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);

            const anime = this.#application.conteneurHTML.querySelectorAll("[data-anime]");

            animate(anime, {
                opacity: [0, 1],
                scale: [0.5, 1],
                delay: stagger(200),
                duration: 700,
                ease: cubicBezier(0.7, 0.1, 0.5, 0.9),
            });
        }
        catch (erreur){
            toastr.error(erreur);
        }
    }
}

export default Accueil;