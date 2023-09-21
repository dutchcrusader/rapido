const versie = navigator.appVersion;
const tekst = "Je gebruikt browserversie: ";
function toonVersie(){
document.getElementById('output').innerHTML = tekst + versie;
}