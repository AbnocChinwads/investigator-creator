# Investigator Creator

## Project Overview

This project is a character creator for an eldritch horror/Call of Cthulhu inspired game.
It will create a character sheet through the use of stat points.
These are interacted with in the creator with buttons to allocate points to individual attributes, and an occupation/class to select to seed starting attributes.
The app is intended to allow a character with a stat block to be created.

## Features

- [x] Select an occupation
- [x] Display the selected occupation's starting characteristics
- [ ] Manually allocate additional characteristic points
- [ ] Randomise point allocation
- [ ] Display the final investigator's characteristics

## Initial Design Decisions

I decided to use objects to make it easier to refer to characteristics by name rather than tracking array positions.
The occupation's stats and assigned stats will also be stored as separate objects, to allow the user to switch between occupations whilst creating the character to see what each option offers without having to lose the user's point allocations.

## Implementation Decisions

I made the displayStats() function so that if I change how the characteristics are displayed later in the project, I only have to look in one place and change it there. 