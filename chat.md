why did we add a function?
because this way, the form can reference this code that we want to run.a
like.. watch this

try clicking the button

So, if we didn't have the function...
The code ends up running right away.oooh i seeee is handlesubmit a thing? not madeup?
it's made up
this'll work too xD uggh this is where i get confused at x D but im getting it i guess

it's just like...
think of this function as a person who does something. this person has to have a name.
then in the HTML, you're just telling it who to reach out to when they submit
so when do we know when to put something inside the value and when not to
what do you mean, value?
ohhh. yeah um.
so sometimes, when the HTML goes to reach out to that person,
they need to bring with them some kind of information. like, hey here's
the event information that just happened. or something.

another example is that alert() call I put on line 4.
that's a function that triggers the browser dialog. but it
needs to know what to display in the dialog. so I give it the string "Heyyyy".
okay i kinda get it but we can continue x D
okay :D

Oh yeah, do you know how to open devtools
inside the terminal right? no, the browser.
yes
awesome. do me a favor, while you're in devtools, press Esc.a
yeah and then do you see the Console tab? at the bottom.
yes
you already have it open up top, so that's why the bottom is minimized.
anyways, let's see if you extracted the value correctly.


                                       v      this string references the HTML code.
let longUrl = document.getElementById("long-url");
but you can leave the variable name without dash, because JS doesn't allow dash for var names.

Is that confusing? no, .  knew that but second guessed myself. ahh okay. you're good!

you're defining a variable called longUrl and using it below,
but the html element is still called "long-url" so you need the dash when referencing
the html.

I think it's confusing lol.
you know what a variable is, the variable is only used in JS.

// like this?
//nuh uh like dis
//this tells javascript where to get its info from linking our objects
// yeah this makes sense, let's do it this way. It's effectively the same i think?
// but this is slightly more efficient.


//oh it works now ^^ woohoo :DDD 


    //so it goes here? yes!
// nice, now save this JSON to local storage.
    // make sure to use JSON.stringify(), because local storage can only store strings.

    // nice! now let's submit the form again, and then check localStorage in devtools.
    // devtools > application > local storage > "shortenedUrls"
    // yeah it's there! even after refresh, it should stay there
