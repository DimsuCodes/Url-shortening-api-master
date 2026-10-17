# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Preview](#preview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Running it locally](#running-it-locally)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Preview

![Preview of the Shortly URL shortener application](./screenshot.png)

**Design reference**

Desktop preview:

![Desktop preview](<./designs/desktop-preview (2).jpg>)

Desktop design:

![Desktop design](<./designs/desktop-design (3).jpg>)

Mobile design:

![Mobile design](<./designs/mobile-design (1).jpg>)

### Links

- Solution URL: [https://github.com/DimsuCodes/Url-shortening-api-master](https://github.com/DimsuCodes/Url-shortening-api-master)
- Live Site URL: [https://preeminent-lokum-3348d1.netlify.app/](https://preeminent-lokum-3348d1.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow with media queries
- Vanilla JavaScript (`fetch`, `async`/`await`, `localStorage`)
- [Bitly API](https://dev.bitly.com/) - to shorten the links
- [Poppins](https://fonts.google.com/specimen/Poppins) - Google Fonts
- [Netlify](https://www.netlify.com/) - for deployment

### Running it locally

1. Clone the repository.
2. Create a file named `config.js` in the project folder with your own Bitly access token:
   ```js
   const apiKey = 'YOUR_BITLY_TOKEN';
   ```
   `config.js` is listed in `.gitignore` so the token never gets committed.
3. Open `index.html` with a local server such as the VS Code Live Server extension.

### What I learned

- **JSON.** I learned that JSON is the format APIs use to send and receive data. I sent a JSON body to the Bitly API with `JSON.stringify`, then read the response with `response.json()` and pulled out the `link` key from the object. I also used `JSON.parse` and `JSON.stringify` to store my list of links in `localStorage`.

- **Keeping secrets out of Git.** My first request to the Bitly API failed with a `403 Forbidden`. The cause was a placeholder left in the token (angle brackets inside the quotes). While fixing it, I learned to move the token into a separate `config.js` file that is ignored by Git, so it isn't pushed to GitHub.
- **Reading data from an API.** I used `fetch` with `async`/`await` to send a POST request and read the JSON response, then saved the results to `localStorage` so the list is saved even after a refresh.
- **Form validation.** The form shows a message when the box is empty or the link doesn't start with `http`.
- **Layout with Flexbox.** I used Flexbox to put the hero text and image side by side and to switch the form and result cards from stacked to a row on larger screens.

```js
errorMessage.textContent = "";
if (longUrl.value.trim() === "") {
    errorMessage.textContent = "Please enter a link to shorten.";
    return;
}
```

### Continued development

- Style the remaining sections (feature cards, "Boost your links" banner, footer) and add a desktop layout.
- Add a Copy button for each shortened link.
- Add `try`/`catch` error handling for network failures.
- Move the API call to a small backend so the token isn't visible in the browser.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/) - reference for `fetch`, `localStorage` and Flexbox.
- [Bitly API documentation](https://dev.bitly.com/) - how to shorten links and what each response code means.
- [Frontend Mentor](https://www.frontendmentor.io/) - the challenge brief and design files.

## Author

- GitHub - [@DimsuCodes](https://github.com/DimsuCodes)

## Acknowledgments

Thanks to my instructor and Jeremy Ma for the help and the encouragement to build more hands-on projects.
