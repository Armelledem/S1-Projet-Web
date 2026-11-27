async function nouveauChat() {
  const reponse = await fetch("https://api.thecatapi.com/v1/images/search");
  const donnees = await reponse.json();
  document.getElementById("chat").src = donnees[0].url;
}

nouveauChat();

const likes = [];

document.getElementById("non").onclick = nouveauChat;

document.getElementById("oui").onclick = () => {
  likes.push(document.getElementById("chat").src);
  nouveauChat();
};







let a = "bonjour"
let b = "hello"
let c = "salut"

function concat(a,b,c) {
    console.log(a+b+c)
}

let array = [45,13,72,4,-2,10]

function tri(array){
    const resultat = array
        .filter(n => n >= 10)
        .sort((a, b) => a - b)
    console.log(resultat)
}

tri(array)
concat (a,b,c)

