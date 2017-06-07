var quotes = [
'\x22Train brain yourself to let go of everything you fear to lose.\x22', 

'\x22Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.\x22', 

'\x22Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.\x22',

'\x22Always pass on what you have learned.\x22',
    
'\x22PATIENCE YOU MUST HAVE my young padawan\x22'];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
 
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}