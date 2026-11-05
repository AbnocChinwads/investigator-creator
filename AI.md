# AI Usage

## Tools Used

- ChatGPT
- GitHub Copilot (for commit messages)

## How It Was Used

I have used ChatGPT as an interactive programming tutor and code-review assistant. I have written the application code myself, using ChatGPT to reason through implementation approaches, explain unfamiliar concepts, help debug problems and as a search engine that doesn't require specific search terms for when I don't remember a JavaScript concept or don't know what I need in the moment.

It has also provided code examples to help me understand, and suggested solutions to specific problems where I've presented it with the bugged code, which I've then evaluated and incorporated where appropriate.

For example:

1. ChatGPT suggested the initial use of dynamically created HTML in the JavaScript, which I implemented and tested but ultimately decided that it was better to hardcode the elements and use IDs to update the numbers in the spans.

2. When I had concerns over an infinite while loop, I asked ChatGPT for a solution as I couldn't recall a way to add an iteration over the object to check against the two conditions I needed to (pointsRemaining above 0 and stats less than maxStatValue), it suggested .some(), which I used as it is a good way to check whether at least one characteristic can still accept a point.

## Verification

After adding the .some() check to the while loop, I altered the stats on the first occupation in the list to all match the max value allowed. After doing so I manually tested the randomise button to make sure it didn't allocate any points but also to ensure the loop didn't run indefinitely. Both tests passed so I then moved to changing one of the values to below the max value whilst keeping the others at max, I then manually tested the randomise button again and it again succeeded in not looping infinitely, whilst also only assigning as many points were allowed by the max value.