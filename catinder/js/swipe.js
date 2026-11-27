
async function nouveauChat() {

    const reponse = await fetch(
        "https://api.thecatapi.com/v1/images/search"
    );

    const donnees = await reponse.json();

    document.getElementById("chat").src = donnees[0].url;
}

// On récupère un premier chat dès l'ouverture de la page
nouveauChat();


// Tableau qui contient les chats aimés
const likes = [];


// Bouton passer
document.getElementById("non").onclick = nouveauChat;


// Bouton aimer
document.getElementById("oui").onclick = () => {

    likes.push(document.getElementById("chat").src);

    nouveauChat();

};
