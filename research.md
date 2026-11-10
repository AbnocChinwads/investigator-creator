# Research Log

## 3 November 2026 - Iterating over a JavaScript object

I was attempting to iterate over the occupation object, but I couldn't remember the exact for loop I needed.
I searched Google for "iterate over object" and got the [MDN page for for...in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).
Following the structure then I initially used my stats object from inside my event listener,
but during experimentation for some reason I switched to using the original occupation object.
This caused an unexpected output in the console log where it displayed `[object Object]`,
as I was now referencing the entire object and not the individual characteristic values I wanted.
Once I realised the error and went back to iterating over the stats object it displayed correctly in the logs.

## 4 November 2026 - Randomising characteristic points

I wanted to add a button that would randomly allocate the user's manual stat points across each characteristic, without exceeding the limit I've set for them.
Within this I found a question on Stack Overflow that showed how to [pick a random property from a JavaScript object](https://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object)
I initially used a for...in loop inside a while loop, intending for it to finish when all the points were allocated, but sometimes the points would drop below zero because the inner loop would continue executing after the last point was used.
After discovering this is what was happening I removed the inner loop.
I then didn't want the while to loop infinitely if somehow all stats were at or near the max value with points left to spend, for which I checked with ChatGPT for a solution to this concern as I didn't know what to google, it then suggested using .some().
Having used this once before in a private project it made sense, so I added a check to prevent the infinite loop using .some().

## 10 November 2026 - Adapting Bootstrap's colour mode switch

I prefer viewing pages and apps in dark mode, but understand some users prefer to view in light mode. Having built a [dark mode switch](https://github.com/AbnocChinwads/dark-mode-switch) before, I updated it from Bootstrap 4 to Bootstrap 5.3 using the colour-mode toggler from the current Bootstrap documentation as the base, and adapted it to work with a switch rather than a button group.
I removed the button event handling and changed it to switch event handling.