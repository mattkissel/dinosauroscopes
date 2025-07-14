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
    q: "1. You're cornered by a rampaging Triceratops. Your move:",
    choices: [
      { t: "Challenge it to a dance-off.",                    map: ["Gallimimus", "Parasaurolophus"] },
      { t: "Offer it a bouquet of ferns as peace treaty.",      map: ["Apatosaurus","Therizinosaurus"] },
      { t: "Let out an earth-shaking roar to intimidate.",      map: ["Allosaurus", "Spinosaurus"] },
      { t: "Charge the Triceratops. You're not one to back down from a challenge.",      map: ["Triceratops", "Pachycephalosaurus"]},
      { t: "Slip away disguised as a mossy rock.",             map: ["Stegosaurus", "Ankylosaurus"] },
      { t: "Tempt it with your flashy scales for a photoshoot.", map: ["Archaeopteryx","Velociraptor"] }
    ]
  },
  {
    q: "2. You discover a time-travel portal. You emerge holding:",
    choices: [
      { t: "A T-Rex egg, it should make a nice breakfast scramble",               map: ["Velociraptor","Spinosaurus","Archaeopteryx"] },
      { t: "A knight's helmet to dress up in",               map: ["Pachycephalosaurus","Parasaurolophus"] },
      { t: "A glowing orb of dino-power, a dangerous tool Sauropod",              map: ["Allosaurus","Apatosaurus"] },
      { t: "Extraterrestrial mushrooms—snack time?",            map: ["Stegosaurus","Therizinosaurus"] },
      { t: "Your own tail - you finally caught it.",        map: ["Gallimimus","Ankylosaurus"] }
    ]
  },
  {
    q: "3. What is your prehistoric love language?",
    choices: [
      { t: "Reciting a pre-cretaceous sonnet or a sensual dance.",                     map: ["Parasaurolophus", "Gallimimus"] },
      { t: "Present your mate with the largest slab of meat",       map: ["Velociraptor"] },
      { t: "Gutteral grunts and bellows from deep in your throat",  map: ["Triceratops", "Pachycephalosaurus"] },
      { t: "Sending unsolicited tail pics.",                        map: ["Apatosaurus", "Stegosaurus"] },
      { t: "Killing off all other potential mates.",                map: ["Allosaurus","Spinosaurus"] },
      { t: "Nothing... with these nails and this back? Mates flock towards you",   map: ["Ankylosaurus","Therizinosaurus","Archaeopteryx"] }
    ]
  },
  {
    q: "4. A rogue meteor is heading for your watering hole. You:",
    choices: [
      { t: "Perform a rain dance to divert it.",                            map: ["Pachycephalosaurus","Parasaurolophus", "Gallimimus"] },
      { t: "Hurl your heaviest plate at it.",                               map: ["Stegosaurus","Ankylosaurus"] },
      { t: "Stare until it blinks first.",                                  map: ["Allosaurus","Triceratops"] },
      { t: "Call upon ancient dino spirits.",                               map: ["Archaeopteryx","Therizinosaurus"] },
      { t: "Guzzle the watering hole so none of the water goes to waste.",  map: ["Apatosaurus","Spinosaurus"] }
    ]
  },

  // NEW QUESTIONS ↓

  {
    q: "5. Jeff Goldblum abducts you onto his pleasure barge:",
    choices: [
      { t: "You go head to head with Jeff Goldblum.",                       map: ["Pachycephalosaurus","Allosaurus"] },
      { t: "Join him in the Jacuzzi.",                                      map: ["Spinosaurus"] },
      { t: "Run away as fast as you can.",                                  map: ["Velociraptor","Gallimimus","Archaeopteryx"] },
      { t: "Show him how horny you really are.",                            map: ["Parasaurolophus","Triceratops"] },
      { t: "Graze on his chest hair.",                                      map: ["Stegosaurus","Apatosaurus", "Therizinosaurus"] },
      { t: "Your armor is the only protection you'll need for this party.", map: ["Ankylosaurus"] }
    ]
  },
  {
    q: "6. You are frozen in amber and awaken in NYC 2025:",
    choices: [
      { t: "Check out a competitive goat-eating competition.",                  map: ["Allosaurus","Velociraptor", "Spinosaurus"] },
      { t: "Run for mayor, or president - after all your only competition is a bunch of other dinosaurs",                     map: ["Gallimimus","Parasaurolophus"] },
      { t: "Move to New Jersey because the rent is too damn high",              map: ["Ankylosaurus","Pachycephalosaurus"] },
      { t: "Feather couture runway.",                                           map: ["Archaeopteryx","Gallimimus"] },
      { t: "Poop in Central Park and blame it on the nearest Chihuahua",        map: ["Apatosaurus",] },
      { t: "Go to the Bronx Zoo for a feast",                                   map: ["Velociraptor","Therizinosaurus"] },
      { t: "Visit old friends in the Museum of Natural History",                map: ["Triceratops","Stegosaurus"] }
      
    ]
  },
  {
    q: "7. Your best friend Ducky, is being chased by a pack of Utahraptors, what do you do?:",
    choices: [
      { t: "Jump in front of her to protect her from attack.",                                        map: ["Ankylosaurus","Stegosaurus"] },
      { t: "You don't stand a chance, you start running alongside Ducky",                             map: ["Archaeopteryx","Gallimimus"] },
      { t: "Charge in headfirst and attack the Utahraptors.",                                         map: ["Triceratops","Pachycephalosaurus"] },
      { t: "Get on the horn and call in backup.",                                                     map: ["Parasaurolophus"] },
      { t: "You aren't concerned, as soon as the Utahraptors see you they run the other way.",        map: ["Therizinosaurus","Allosaurus","Spinosaurus"] }
    ]
  },
  {
    q: "8. What's your favorite TV show or Movie?:",
    choices: [
      { t: "Jurassic Park, the music is amazing",             map: ["Apatosaurus", "Parasaurolophus", "Velociraptor"] },
      { t: "Anything without a T-Rex.",                       map: ["Gallimimus"] },
      { t: "The Land before Time",                            map: ["Stegosaurus","Apatosaurus", "Parasaurolophus", "Triceratops"] },
      { t: "Dinosaurs.",                                      map: ["Allosaurus"] },
      { t: "Dinosaur Train - Theropod Club for life.",        map: ["Spinosaurus","Velociraptor","Allosaurus","Archaeopteryx"] },
      { t: "None, you don't like movies. They never have equal representation",                     map: ["Ankylosaurus","Pachycephalosaurus", "Therizinosaurus"] },
    ]
  },
  {
    q: "9. What was your high school clique?",
    choices: [
      { t: "Jock - top of the food chain baby.",                       map: ["Allosaurus", "Gallimimus"] },
      { t: "Theater Kid or Band Geek.",                                  map: ["Parasaurolophus","Archaeopteryx"] },
      { t: "Punk / Goth.",                          map: ["Stegosaurus", "Triceratops"] },
      { t: "Popular Kids.",                          map: ["Velociraptor"] },
      { t: "Nerd.",                                 map: ["Apatosaurus", "Pachycephalosaurus"] },
      { t: "Stoner.",                               map: ["Therizinosaurus", "Ankylosaurus"] },
      { t: "Loner.",                                map: ["Spinosaurus"] }
    ]
  },
  {
    q: "10. The meteor hits and the climate is changing, how do you cope?",
    choices: [
      { t: "Cuddle for warmth.",                             map: ["Triceratops","Parasaurolophus", "Apatosaurus"] },
      { t: "Burn my enemies for warmth.",                             map: ["Velociraptor","Archaeopteryx"] },
      { t: "The water is rising but that is where you feel most at home.",                             map: ["Spinosaurus"] },
      { t: "I take advantage of the panic, plucking the weak links lower on the food chain.",                            map: ["Allosaurus","Spinosaurus"] },
      { t: "I had been preparing for this, I shelter in my armored bunker.",                           map: ["Ankylosaurus","Stegosaurus", "Pachycephalosaurus"] },
      { t: "It's just a natural weather pattern. Eventually the dust will settle and we'll be fine",                           map: ["Velociraptor","Gallimimus", "Therizinosaurus"] },
      { t: "ACTUALLY I'm already dead, I went extinct in the Jurrassic period.",                         map: ["Allosaurus", "Stegosaurus", "Apatosaurus", "Archaeopteryx"] }
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

