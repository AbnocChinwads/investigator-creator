const maxStatValue = 10;
const manualStatPoints = 15;

let pointsRemaining = manualStatPoints;

const allocatedPoints = {
  strength: 0,
  dexterity: 0,
  intelligence: 0,
  perception: 0,
  resolve: 0,
  occult: 0,
};

const occupation = {
  professor: {
    strength: 1,
    dexterity: 2,
    intelligence: 5,
    perception: 4,
    resolve: 1,
    occult: 2,
  },
  labourer: {
    strength: 5,
    dexterity: 3,
    intelligence: 1,
    perception: 2,
    resolve: 4,
    occult: 0,
  },
  detective: {
    strength: 2,
    dexterity: 4,
    intelligence: 3,
    perception: 4,
    resolve: 2,
    occult: 0,
  },
  fortuneTeller: {
    strength: 0,
    dexterity: 2,
    intelligence: 3,
    perception: 1,
    resolve: 4,
    occult: 5,
  },
};

const dropDown = document.querySelector("#occupation");

function displayStats() {
  const stats = occupation[dropDown.value];
  const manualSpan = document.getElementById("manual-points");

  manualSpan.textContent = `${pointsRemaining}`;

  for (const stat in stats) {
    const statSpan = document.getElementById(`${stat}-stat`);

    console.log(statSpan);

    statSpan.textContent = `${stats[stat] + allocatedPoints[stat]}`;
  }
}

function setupStatButtons() {
  for (const stat in allocatedPoints) {
    const statUpButton = document.getElementById(`${stat}-up-button`);
    const statDownButton = document.getElementById(`${stat}-down-button`);

    statUpButton.addEventListener("click", () => {
      const stats = occupation[dropDown.value];

      if (
        stats[stat] + allocatedPoints[stat] < maxStatValue &&
        pointsRemaining > 0
      ) {
        allocatedPoints[stat] += 1;
        pointsRemaining -= 1;

        displayStats();
      }
    });

    statDownButton.addEventListener("click", () => {
      if (allocatedPoints[stat] > 0 && pointsRemaining < manualStatPoints) {
        allocatedPoints[stat] -= 1;
        pointsRemaining += 1;

        displayStats();
      }
    });
  }
}

dropDown.addEventListener("change", displayStats);

setupStatButtons();
displayStats();
