async function getQuotes() {
    let url = 'resources/text.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
let htmlText = document.getElementById("json-data")
async function quotesPrint() {
    var quotes = await getQuotes();
    let data = ''
    Object.keys(quotes).forEach(key =>{
        console.log(quotes[key].length)
        quotes[key].forEach(entry =>{
            data += `<pre>${JSON.stringify(entry,undefined,"\t")}<pre>`
            
        })
    })
    // htmlText.innerHTML = JSON.stringify(quotes, undefined, 2);
    htmlText.innerHTML = data;

}
quotesPrint()