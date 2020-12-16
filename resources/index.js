async function getQuotes() {
    let url = 'resources/text.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
let htmlText = document.getElementById("json")
async function quotesPrint() {
    var quotes = await getQuotes();

    htmlText.innerHTML = JSON.stringify(quotes, undefined, "\t");

}
quotesPrint()