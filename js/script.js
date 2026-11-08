const maxStatValue = 10;
const manualStatPoints = 15;

let pointsRemaining = manualStatPoints;

// Separation of manual and occupation points preserves the user's input when switching occupations
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
const randomiseButton = document.getElementById("randomise-character");
const resetButton = document.getElementById("reset-points");
const investigatorForm = document.getElementById("investigator-form");
const warningEl = document.getElementById("warning-messages");
const pointsWarningEl = document.getElementById("points-warning");
const nameInput = document.getElementById("investigator-name");

function displayStats() {
  const stats = occupation[dropDown.value];
  const manualSpan = document.getElementById("manual-points");

  pointsWarningEl.classList.toggle(
    "d-block",
    pointsRemaining > 0 && investigatorForm.classList.contains("was-validated"),
  );

  manualSpan.textContent = `${pointsRemaining}`;

  for (const stat in stats) {
    const statSpan = document.getElementById(`${stat}-stat`);

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

function resetStats() {
  for (const stat in allocatedPoints) {
    allocatedPoints[stat] = 0;
  }

  pointsRemaining = manualStatPoints;

  displayStats();
}

function randomiseStats() {
  const statNames = Object.keys(allocatedPoints);
  resetStats();

  const randomOccupation =
    dropDown.options[Math.floor(Math.random() * dropDown.options.length)];

  dropDown.value = randomOccupation.value;

  const stats = occupation[dropDown.value];

  /*
    The extra condition stops an infinite loop
    when there are points still to allocate
    but the stats have reached maxStatValue
  */
  while (
    pointsRemaining > 0 &&
    statNames.some((stat) => stats[stat] + allocatedPoints[stat] < maxStatValue)
  ) {
    const randomStat = statNames[Math.floor(Math.random() * statNames.length)];

    if (stats[randomStat] + allocatedPoints[randomStat] < maxStatValue) {
      allocatedPoints[randomStat] += 1;
      pointsRemaining -= 1;
    }
  }

  displayStats();
}

function validateName() {
  if (nameInput.value.trim() === "") {
    nameInput.setCustomValidity("Please give your Investigator a name");
  } else {
    nameInput.setCustomValidity("");
  }
}

function createInvestigator() {
  const name = document.getElementById("investigator-name").value.trim();
  const selectedOccupation = dropDown.selectedOptions[0].text;
  const stats = occupation[dropDown.value];
  const finalStats = {};

  for (const stat in stats) {
    finalStats[stat] = stats[stat] + allocatedPoints[stat];
  }

  if (pointsRemaining > 0) {
    return;
  }

  for (const stat in finalStats) {
    if (finalStats[stat] > maxStatValue) {
      warningEl.innerHTML = `<p class="text-capitalize text-warning card-text text-center">${stat} exceeds ${maxStatValue}</p><p class="text-capitalize text-warning card-text text-center">please reduce it</p>`;
      return;
    }
  }

  warningEl.textContent = "";

  const investigatorEl = document.getElementById("investigator-sheet");

  investigatorEl.innerHTML = `
    <div class="card mt-4">
      <div class="card-header">
        <h3 id="generated-investigator-name" class="mb-0 text-center"></h3>
      </div>

      <div class="card-body">
        <p class="card-text text-center">
          Occupation: ${selectedOccupation}
        </p>

        <div class="row row-cols-2 row-cols-sm-3 g-2">
          ${Object.entries(finalStats)
            .map(
              ([key, value]) => `
              <div class="col">
                <div class="border rounded p-2 text-center">
                  <div class="text-body-secondary">
                    ${key}
                  </div>
                  <div class="fs-4 fw-semibold text-capitalize">
                    ${value}
                  </div>
                </div>
              </div>
            `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  const generatedNameEl = investigatorEl.querySelector(
    "#generated-investigator-name",
  );

  generatedNameEl.textContent = name;
}

dropDown.addEventListener("change", displayStats);
nameInput.addEventListener("input", validateName);
randomiseButton.addEventListener("click", randomiseStats);
resetButton.addEventListener("click", resetStats);
investigatorForm.addEventListener("submit", (event) => {
  event.preventDefault();
  investigatorForm.classList.add("was-validated");
  displayStats();
  validateName();

  if (!investigatorForm.checkValidity()) {
    return;
  }

  createInvestigator();
});

setupStatButtons();
displayStats();
