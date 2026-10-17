const localStorageKey = "shortenedUrls";
const longUrl = document.getElementById("long-url");
const urlList = document.getElementById("urlList");
const errorMessage = document.getElementById("errorMessage")

async function handleSubmit(event) {
    // prevent the page from automatically refreshing
    event.preventDefault();
    errorMessage.textContent = "";
    if (longUrl.value.trim() === "") {
        errorMessage.textContent = "Please enter a link to shorten.";
        return;
    } if (!longUrl.value.startsWith("http")) {
        errorMessage.textContent = "Your link needs to start with http:// or https://";
        return;
    } if (!response.ok) {
         errorMessage.textContent = "Bitly couldn't shorten that link. Check it and try again.";
    return;
    }
    // grab what's currently in local storage
    let fromLocalStorage = localStorage.getItem(localStorageKey);
    // if nothing in local storage, default it to an empty JSON object string
    if (fromLocalStorage == null || fromLocalStorage == '') fromLocalStorage = '{}';
    // parse data from local storage into JSON
    const parsedUrlList = JSON.parse(fromLocalStorage);

    // Make an API call to bitly
    const response = await fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "long_url": longUrl.value
        })
    })

    // get the link from the API response
    const responseData = await response.json();
    const shortenedUrl = responseData.link;

    // add the newly submitted long URL and shortened URL to the object from local storage
    parsedUrlList[longUrl.value] = shortenedUrl;

    // save the newly updated JSON back into local storage
    localStorage.setItem(localStorageKey, JSON.stringify(parsedUrlList));

    // refresh the URL list in the page
    refreshUrlList();
}

function refreshUrlList() {
    // grab what's currently in local storage
    let fromLocalStorage = localStorage.getItem(localStorageKey);
    // if nothing in local storage, default it to an empty JSON object string
    if (fromLocalStorage == null || fromLocalStorage == '') fromLocalStorage = '{}';
    // parse data from local storage into JSON
    const parsedUrlList = JSON.parse(fromLocalStorage);

    // get a list of the entries from local storage
    const parsedLongUrls = Object.keys(parsedUrlList);
    // convert the data into HTML text (li elements)
    const liStrings = parsedLongUrls.map(longUrlKey => {
        return `<li><div>${longUrlKey}</div><div>${parsedUrlList[longUrlKey]}</div></li>`
    });

    // put the li elements into the ul
    urlList.innerHTML = liStrings.join('');
}

// refresh the URL list in the page
refreshUrlList(); 