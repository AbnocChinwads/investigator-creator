const maxStatValue = 10;
const manualStatPoints = 15;

let pointsRemaining = manualStatPoints;

const allocatedPoints = {
  Strength: 0,
  Dexterity: 0,
  Intelligence: 0,
  Perception: 0,
  Resolve: 0,
  Occult: 0,
};

const occupation = {
  professor: {
    Strength: 1,
    Dexterity: 2,
    Intelligence: 5,
    Perception: 4,
    Resolve: 1,
    Occult: 2,
  },
  labourer: {
    Strength: 5,
    Dexterity: 3,
    Intelligence: 1,
    Perception: 2,
    Resolve: 4,
    Occult: 0,
  },
  detective: {
    Strength: 2,
    Dexterity: 4,
    Intelligence: 3,
    Perception: 4,
    Resolve: 2,
    Occult: 0,
  },
  fortuneTeller: {
    Strength: 0,
    Dexterity: 2,
    Intelligence: 3,
    Perception: 1,
    Resolve: 4,
    Occult: 5,
  },
};

const dropDown = document.querySelector("#occupation");

function displayStats() {
  const selectedValue = dropDown.value;

  const stats = occupation[selectedValue];
  const statDiv = document.getElementById("character-stats");
  const manualEl = document.createElement("div");
  const manualSpan = document.createElement("span");

  statDiv.textContent = "";
  manualEl.textContent = `Points left: `;
  manualSpan.textContent = `${pointsRemaining}`;
  statDiv.append(manualEl);
  manualEl.appendChild(manualSpan);

  for (const stat in stats) {
    const statEl = document.createElement("div");
    const statSpan = document.createElement("span");
    const statUpButton = document.createElement("button");
    const statDownButton = document.createElement("button");

    statEl.textContent = `${stat}: `;
    statSpan.textContent = `${stats[stat] + allocatedPoints[stat]}`;
    statUpButton.textContent = `+`;
    statDownButton.textContent = `-`;

    statUpButton.addEventListener("click", () => {
      if (stats[stat] + allocatedPoints[stat] < maxStatValue && pointsRemaining > 0) {
        allocatedPoints[stat] += 1;
        pointsRemaining -= 1;

        manualSpan.textContent = `${pointsRemaining}`;
        statSpan.textContent = `${stats[stat] + allocatedPoints[stat]}`;
      }
    });

    statDownButton.addEventListener("click", () => {
      if (allocatedPoints[stat] > 0 && pointsRemaining < manualStatPoints) {
        allocatedPoints[stat] -= 1;
        pointsRemaining += 1;

        manualSpan.textContent = `${pointsRemaining}`;
        statSpan.textContent = `${stats[stat] + allocatedPoints[stat]}`;
      }
    });

    statDiv.append(statEl);
    statEl.appendChild(statSpan);
    statEl.appendChild(statDownButton);
    statEl.appendChild(statUpButton);
  }
}

dropDown.addEventListener("change", displayStats);

displayStats();
