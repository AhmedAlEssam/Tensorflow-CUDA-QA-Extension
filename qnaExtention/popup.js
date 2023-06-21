/////////////////////////////
const node = document.getElementById("inp");
const node2 = document.getElementById("answer");
node.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      
        fetchData(this.value)
    }
});
var passage;
var head = { Accept: 'application/json, text/plain, */*','User-Agent': '*',}
var payload;
const fetchData = async (question) => {
    ( { passage } = await chrome.storage.local.get('passage'));
    const data = { question,passage };

    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
    
      const text = await response.text();
      payload=JSON.parse(text);
      node2.innerHTML = payload.text;
}
