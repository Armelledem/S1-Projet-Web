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





