# Investigator Creator

## Project Overview

This project is a character creator for an eldritch horror/Call of Cthulhu inspired game.
It will create a character sheet through the use of stat points.
These are interacted with in the creator with buttons to allocate points to individual attributes, and an occupation/class to select to seed starting attributes.
The app is intended to allow a character with a stat block to be created.

## Planned Features

- Occupations that set initial stats
- A handful of manually assigned stat points
- Randomise button

## Initial Design Decisions

I decided to use objects to make it easier to refer to characteristics by name rather than tracking array positions.
The occupation's stats and assigned stats will also be stored as separate objects, to allow the user to switch between occupations whilst creating the character to see what each option offers without having to lose the user's point allocations.
