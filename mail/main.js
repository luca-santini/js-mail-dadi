// lista mail autorizzate
var lista_iscritti = ["mario@gmail.com", "marco@gmail.com", "paolo@gmail.com"]
lista_iscritti[0] // mario@gmail.com
lista_iscritti[1] // marco@gmail.com
lista_iscritti[2] // paolo@gmail.com
// chiedere all'utente la sua email
var mail = prompt("Inserisci la tua email", "mario@gmail.com");
console.log(mail);
// rispondi all'utente se la sua mail è in lista
if (mail = "mario@gmail.com") {
    console.log("sei in lista");
}
else {
    console.log("non sei in lista");
}
