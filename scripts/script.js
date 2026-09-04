// zet een variable voor een datum
const birthday = new Date("2007-07-03");
// zet een variable om de datum van vandaag op te halen
const today = new Date();

// HTML span element met de class "age" krijgt de inhoud van de som van deze berekening
document.querySelector(".age").textContent = today.getFullYear() - birthday.getFullYear();