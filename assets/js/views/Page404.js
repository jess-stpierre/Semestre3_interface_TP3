class Page404 {

    //paramtres priver
    #application;

    /**
     * constructeur de la classe Page404 qui va initier application et appeler render
     * @param {*} application
     */
    constructor(application){

        this.#application = application;

        this.render();
    }

    /**
     * Methode qui va afficher le texte de la page 404
     */
    render(){

        this.#application.conteneurHTML.innerHTML = "";

        let gabarit = `
            <h2 data-text class="m-10 text-2xl flex justify-center items-center">Page non trouvee: Erreur 404</h2>
        `;

        this.#application.conteneurHTML.insertAdjacentHTML("beforeend", gabarit);
    }
}

export default Page404;