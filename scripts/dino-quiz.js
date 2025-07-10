  // --- Tab Switching ---

  // --- Dinosaur List ---
//   const DINOS = [
//     "Archaeopteryx","Triceratops","Stegosaurus","Velociraptor",
//     "Apatosaurus","Ankylosaurus","Spinosaurus","Pachycephalosaurus",
//     "Allosaurus","Parasaurolophus","Gallimimus","Therizinosaurus"
//   ];

  // --- Quiz Questions & Mapping ---
const QUESTIONS = [
  {
    q: "1. You’re cornered by a rampaging Triceratops. Your move:",
    choices: [
      { t: "Challenge it to a dance-off.",                    map: ["Gallimimus","Pachycephalosaurus"] },
      { t: "Offer it a bouquet of ferns as peace treaty.",      map: ["Apatosaurus","Therizinosaurus"] },
      { t: "Let out an earth-shaking roar to intimidate.",      map: ["Allosaurus","Triceratops"] },
      { t: "Slip away disguised as a mossy rock.",             map: ["Stegosaurus"] },
      { t: "Tempt it with your flashy scales for a photoshoot.", map: ["Archaeopteryx","Velociraptor"] }
    ]
  },
  {
    q: "2. You discover a time-travel portal. You emerge holding:",
    choices: [
      { t: "A velociraptor egg—do you eat it?",               map: ["Velociraptor","Spinosaurus"] },
      { t: "A knight’s helmet—wear as fashion?",               map: ["Pachycephalosaurus","Parasaurolophus"] },
      { t: "A glowing orb of dino-power—use it?",              map: ["Stegosaurus","Allosaurus"] },
      { t: "Extraterrestrial mushrooms—snack time?",            map: ["Apatosaurus","Therizinosaurus"] },
      { t: "Your own tail—does it taste like chicken?",        map: ["Gallimimus","Ankylosaurus"] }
    ]
  },
  {
    q: "3. Prehistoric talent show act:",
    choices: [
      { t: "Synchronized nest-building.",                     map: ["Triceratops","Ankylosaurus"] },
      { t: "Spitting fire (ancient spices).",                  map: ["Spinosaurus","Therizinosaurus"] },
      { t: "High-speed acrobatics.",                          map: ["Velociraptor","Gallimimus"] },
      { t: "Moss-themed melodrama.",                           map: ["Pachycephalosaurus"] },
      { t: "Roar duets with a T-Rex impersonator.",           map: ["Allosaurus","Archaeopteryx"] }
    ]
  },
  {
    q: "4. A rogue meteor is heading for your watering hole. You:",
    choices: [
      { t: "Perform a rain dance to divert it.",              map: ["Pachycephalosaurus","Parasaurolophus"] },
      { t: "Hurl your heaviest plate at it.",                 map: ["Stegosaurus","Ankylosaurus"] },
      { t: "Stare until it blinks first.",                    map: ["Allosaurus","Triceratops"] },
      { t: "Call upon ancient dino spirits.",                  map: ["Archaeopteryx","Therizinosaurus"] },
      { t: "Guzzle the watering hole to soften impact.",       map: ["Apatosaurus","Spinosaurus"] }
    ]
  },

  // NEW QUESTIONS ↓

  {
    q: "5. Aliens abduct you. You:",
    choices: [
      { t: "Negotiate with melodic calls.",                    map: ["Parasaurolophus","Pachycephalosaurus"] },
      { t: "Challenge them to horn-butting.",                  map: ["Triceratops","Allosaurus"] },
      { t: "Slip away in a feathery blur.",                   map: ["Velociraptor","Gallimimus"] },
      { t: "Show off your plated armor.",                      map: ["Stegosaurus","Ankylosaurus"] },
      { t: "Escape via underwater tunnel.",                    map: ["Spinosaurus","Apatosaurus"] }
    ]
  },
  {
    q: "6. Your ultimate dino-themed party includes:",
    choices: [
      { t: "Volcanic fireworks at dusk.",                     map: ["Therizinosaurus","Spinosaurus"] },
      { t: "All-you-can-eat fern buffet.",                     map: ["Apatosaurus","Parasaurolophus"] },
      { t: "Rock concert with tail-smashing drums.",           map: ["Allosaurus","Velociraptor"] },
      { t: "Feather couture runway.",                         map: ["Archaeopteryx","Gallimimus"] },
      { t: "Live armor demonstration.",                       map: ["Ankylosaurus","Stegosaurus"] }
    ]
  },
  {
    q: "7. Your signature dance move:",
    choices: [
      { t: "Tail whip tornado.",                              map: ["Ankylosaurus","Triceratops"] },
      { t: "Majestic wing flap.",                             map: ["Archaeopteryx","Parasaurolophus"] },
      { t: "Spine shimmy spotlight.",                         map: ["Stegosaurus","Pachycephalosaurus"] },
      { t: "Lightning sprint spins.",                         map: ["Gallimimus","Velociraptor"] },
      { t: "Claw-click percussion.",                          map: ["Therizinosaurus","Allosaurus"] }
    ]
  },
  {
    q: "8. You rock this dino accessory:",
    choices: [
      { t: "Spiked necklace.",                                map: ["Ankylosaurus","Allosaurus"] },
      { t: "Feathered cap.",                                  map: ["Archaeopteryx","Gallimimus"] },
      { t: "Mossy wreath crown.",                             map: ["Stegosaurus","Apatosaurus"] },
      { t: "Crystal horn charm.",                             map: ["Triceratops","Pachycephalosaurus"] },
      { t: "Aqua fin band.",                                   map: ["Spinosaurus","Velociraptor"] }
    ]
  },
  {
    q: "9. Your dream ride partner is:",
    choices: [
      { t: "Aerial buddy on the wing.",                       map: ["Archaeopteryx","Parasaurolophus"] },
      { t: "Armored tank on four legs.",                       map: ["Ankylosaurus","Stegosaurus"] },
      { t: "Swift sprinter racing you.",                       map: ["Gallimimus","Velociraptor"] },
      { t: "Towering giant carrying you high.",                map: ["Apatosaurus","Allosaurus"] },
      { t: "Aquatic surfer through rapids.",                   map: ["Spinosaurus","Pachycephalosaurus"] }
    ]
  },
  {
    q: "10. If you could send a tweet across eons, you’d share:",
    choices: [
      { t: "Herd-harmony hacks.",                             map: ["Triceratops","Stegosaurus"] },
      { t: "Deep-river secrets.",                             map: ["Spinosaurus","Apatosaurus"] },
      { t: "Sky-high adventures.",                            map: ["Archaeopteryx","Parasaurolophus"] },
      { t: "Undercover hunt tips.",                           map: ["Velociraptor","Allosaurus"] },
      { t: "Armor-craft DIY guides.",                         map: ["Ankylosaurus","Pachycephalosaurus"] }
    ]
  }
];

  // --- Render Quiz Form ---
  const form = document.getElementById('dino-quiz');
  QUESTIONS.forEach((qs, i) => {
    const div = document.createElement('div');
    div.className = "quiz-question";
    const h3 = document.createElement('h3');
    h3.textContent = qs.q;
    div.appendChild(h3);
    qs.choices.forEach((c, j) => {
      const id = `q${i}_c${j}`;
      const lbl = document.createElement('label');
      lbl.innerHTML = `
        <input type="radio" name="q${i}" id="${id}" value="${j}">
        <span class="radio-mark"></span>
        ${c.t}
      `;
      div.appendChild(lbl);
    });
    form.appendChild(div);
  });

  // --- Quiz Logic ---
  document.getElementById('submit-quiz').onclick = () => {
    const scores = {};
    DINOS.forEach(d => scores[d] = 0);

    // collect answers
    let answeredAll = true;
    QUESTIONS.forEach((qs, i) => {
      const sel = form[`q${i}`].value;
      if (!sel) answeredAll = false;
      else {
        qs.choices[+sel].map.forEach(d => scores[d]++);
      }
    });
    if (!answeredAll) {
      alert("Please answer all questions!");
      return;
    }

    // pick winner(s)
    const max = Math.max(...Object.values(scores));
    const winners = Object.keys(scores).filter(d => scores[d] === max);
    const you = winners[Math.floor(Math.random() * winners.length)];
    console.log("you got "+ you);
    // show result
    const resultDiv = document.getElementById('quiz-result');
    resultDiv.innerHTML = `
      <h2>You are… <a href="dinosaurs/${you.toLowerCase()}.html"><em>${you}</em></a>!</h2>
      <a href="dinosaurs/${you.toLowerCase()}.html">
      <img src="images/${you.toLowerCase()}.png"
           alt="${you}" class="dino-image" onerror="this.src='images/placeholder.png'"></a>
      <p>Embrace your ${you} spirit today.</p>
    `;
    // switch to result view
    form.style.display = 'none';
    document.getElementById('submit-quiz').style.display = 'none';
  };

