# Research Log

## 3 November 2026 - Iterating over a JavaScript object

I was attempting to iterate over the occupation object, but I couldn't remember the exact for loop I needed.
I searched Google for "iterate over object" and got the [MDN page for for...in loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in).
Following the structure then I initially used my stats object from inside my event listener,
but during experimentation for some reason I switched to using the original occupation object.
This caused an unexpected output in the console log where it displayed `[object Object]`,
as I was now referencing the entire object and not the individual characteristic values I wanted.
Once I realised the error and went back to iterating over the stats object it displayed correctly in the logs.
