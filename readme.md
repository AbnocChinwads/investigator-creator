# Investigator Creator

## Project Overview

This project is a character creator for an eldritch horror/Call of Cthulhu inspired game.
It will create a character sheet through the use of stat points, choosing an occupation, and adding a character name.
These are interacted with in the creator with a name input, an occupation dropdown selection to seed starting attributes, and buttons to allocate points to individual attributes (attributes cannot manually be taken above 10, and any above will trigger a warning rather than creating the character sheet).
There is also a randomise button that will randomly choose an occupation from the dropdown and randomly assign the points for you.
Both of these allow the create investigator button to pull the information from the creator and build a character card that is displayed on the screen.
The app is intended to allow a character with a stat block to be created.

## Features

- [x] Select an occupation
- [x] Display the selected occupation's starting characteristics
- [x] Manually allocate additional characteristic points
- [x] Randomise point allocation and occupation choice
- [x] Display the final investigator's characteristics
- [x] Form validation checks

## How To Run

There are multiple ways to run the project:

- You can go to the [Github pages link](https://abnocchinwads.github.io/investigator-creator/)

- You can download the files and run them locally:
    1. Install python3 - instructions for you OS can be found [here](https://www.python.org/downloads/)
    2. Copy the repository URL (https://github.com/AbnocChinwads/investigator-creator.git) from GitHub.
    3. Open your terminal/command prompt (either within your IDE or on your machine).
    4. Run `git clone https://github.com/AbnocChinwads/investigator-creator.git`

    - If you use the GitHub CLI you can instead run: `gh repo clone AbnocChinwads/investigator-creator`

    5. Navigate to the directory `cd investigator-creator`
    6. In your IDEs terminal type `python3 -m http.server 8000` (on Linux) `py -m http.server 8000` (on Windows) 
        - the port number doesn't have to be 8000; it just needs to be an available port. 8000 is commonly used for local development.
    --> In your browser open a new tab and go to `localhost:8000`

## How To Use

1. Enter your name into the `Investigator Name` input.
2. Select an occupation.
3. Assign the 15 stat points available into the 6 characteristics.

(Alternatively, you can hit the randomise button)

4. Hit `Create Investigator` button.
--> Character sheet will appear beneath the character creation card.

## Initial Design Decisions

I decided to use objects to make it easier to refer to characteristics by name rather than tracking array positions.
The occupation's stats and assigned stats will also be stored as separate objects, to allow the user to switch between occupations whilst creating the character to see what each option offers without having to lose the user's point allocations.
I follow an iterative design philosophy, where I get the project to a usable level and then work on making the display more user friendly.

## Implementation Decisions

I made the displayStats() function so that if I change how the characteristics are displayed later in the project, I only have to look in one place and change it there.

Initially when adding a stat point through manual allocation I had it call displayStats(), this was unnecessary work as it deleted and recreated each characteristic element on every stat allocation, but it was the initial working implementation. I then added a span to separate the number, to allow me to update just the number directly.

I initially had the characteristic elements dynamically created in JavaScript, but I've moved them out to make it easier to add CSS classes (whether custom or from a library) to the elements. Which doesn't actually change how easy or difficult it is to add/change CSS classes, it just avoids unnecessary DOM recreation and simplifies the updates. In the future this could be switched back to dynamic creation so that new stats can be added within the objects and get displayed automatically with the same css rules as all other stats.

## Testing

### Manual testing of the points limitation 

This was performed by adding points below the limit to one of the stats and then switching to an occupation that would bring that stat above the limit
for example (starting on the Professor occupation): 
1. add enough points to Strength to bring it to 9
2. switch to the Labourer occupation to bring that stat above 10
3. click the `Create Investigator` button
--> this will cause an error message to appear (in this case "strength exceeds 10 please reduce it")

### Manual testing of validation/warning messages

This was performed by:
- not inputting a name, which then produced the validation message "Please give your Investigator a name"
- leaving any amount of manual points unnallocated produces the validation message "You still have points to spend"

### Manual testing of randomisation

This was performed by pressing the randomise button (this does not insert a random name, however).
I was testing the randomise button didn't cause an infinite loop when it was assigning stats to each characteristic, if the characteristic was at the max value. The loop terminated correctly when characteristics reached their maximum values.
I also tested this by setting all but one characteristic to 10 (which is the maximum value) and then pressed the randomise button. This used as many points as it could and then terminated the loop.

## Known Limitations & Future Improvements

This project does not currently allow saving of the created characters, or exporting of the character data.
Allowing this would improve usability as it would allow the user to have permanent access to the character, the user could currently take a screenshot of the completed character sheet if they wished to have permanent access until these features were added.