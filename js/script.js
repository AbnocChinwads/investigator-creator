const maxStatValue = 10;
const manualStatPoints = 15;

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
  statDiv.textContent = "";

  for (const stat in stats) {
    const statEl = document.createElement("div");

    statEl.textContent = `${stat}: ${stats[stat]}`;
    statDiv.append(statEl);
  }
}

dropDown.addEventListener("change", displayStats);

displayStats();
