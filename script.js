const localStorageKey = "shortenedUrls";
const longUrl = document.getElementById("long-url");


function handleSubmit(event) {
    event.preventDefault();
    
    // const url = longUrl.value; // don't worry about this now.
    

    const url={"https://www.youtube.com/watch?v=EjnuRcc_RBo&list=RDEjnuRcc_RBo&start_radio=1" : "https://bit.ly/4s4iMrz" };

    localStorage.setItem(localStorageKey, JSON.stringify(url));
}

/*
okay now we have three parts left.

I. calling the bit.ly API
  A. Did you learn about using fetch() yet?
  b. yes, but again i hardly studied it  :P
  C. no worries, it's simple. fetch() is basically used to call APIs.
  For now, let's be careful because the bit.ly API is very limited.
  Let's actually skip the bitly part until the end, okay? sure thing
II. saving to local storage --  this is done!
III. retrieving past results from local storage, and displaying on the page
  So now we need to write some code after the page loads.
  Did you learn any kind of handler function in HTML for when the page finishes loading? defer?
  Hmm maybe! If that's the case, we can just write the JS code outside of a function.
*/

// like here.
//yeah i put defer in the script link

// alright so here we need to read our JSON data from local storage.

/*
The plan here is simple.
1. Read the JSON data from local storage.
2. For each key-value pair in the JSON data, create a new element in the page that displays the long URL and the shortened URL.
*/