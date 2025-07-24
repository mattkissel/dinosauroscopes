  // 🔥 Inject Love Language AFTER content is loaded
const loveLanguages = {
  "Carnivore": "You like your lovers like you like your prey. Meaty. You like to provide meat to your loved one(s). Also, lovely plumage",
  "Omnivore": "You go both ways.",
  "Nest making": "You are a great homemaker and enjoy time nestled up with loved ones.",
  "Stargrazer": "You enjoy grazing the fields and watching the stars. No gifts required—just some meteor watching and chill.",
  "Ruts for Butts": "Love is an active display. You roar, fight off rivals, and dance like nobody’s watching (except your mate).",
  "Quality Time": "The meteor comes for us all. You savor every moment with loved ones because in the end, that's what matters."
};

const dinoLoveMap = {
  "Allosaurus": "Carnivore",
  "Ankylosaurus": "Quality Time",
  "Apatosaurus": "Stargrazer",
  "Archaeopteryx": "Nest making",
  "Gallimimus": "Omnivore",
  "Pachycephalosaurus": "Omnivore",
  "Parasaurolophus": "Nest making",
  "Spinosaurus": "Quality Time",
  "Stegosaurus": "Ruts for Butts",
  "Therizinosaurus": "Stargrazer",
  "Triceratops": "Ruts for Butts",
  "Velociraptor": "Carnivore"
};



const dinoRomancePairs = [
  ["Allosaurus", "Velociraptor", "You both enjoy the chase and keep your eye on the prize."],
  ["Allosaurus", "Therizinosaurus", "Both ferocious in your own right— even your nails match."],
  ["Allosaurus", "Spinosaurus", "Big eaters with bigger hearts."],

  ["Velociraptor", "Archaeopteryx", "Aerial grace meets swift tactics."],
  ["Velociraptor", "Gallimimus", "You thrive in chaotic, flirty speed bursts."],

  ["Therizinosaurus", "Apatosaurus", "A mutual love of herb bonds you."],
  ["Therizinosaurus", "Gallimimus", "Light-footed playfulness helps you both loosen up."],

  ["Spinosaurus", "Stegosaurus", "Mutual back displays attract curious glances—and emotional surprises."],

  ["Triceratops", "Stegosaurus", "Comparing whose spikes are longer has a surprisingly sweet appeal."],
  ["Triceratops", "Pachycephalosaurus", "You might butt heads, but you're mutual protectors in love and life."],
  ["Triceratops", "Ankylosaurus", "Shared values of loyalty and protection bind you together."],

  ["Stegosaurus", "Pachycephalosaurus", "Tiny head meets big head—opposites tumble into love."],

  ["Pachycephalosaurus", "Ankylosaurus", "Bold head-butts rouse and amuse a strong defense."],

  ["Parasaurolophus", "Gallimimus", "Laughter blends with wild rhythm. You both have strong ties to your herd."],
  ["Parasaurolophus", "Archaeopteryx", "Melodic calls cause the heart to flutter."],
  ["Parasaurolophus", "Apatosaurus", "Gentle giants sharing peaceful snacks. Deep breaths and tranquil vibes"],

  ["Spinosaurus", "Ankylosaurus", "No one believes this pairing could work, but it does."],

  ["Archaeopteryx", "Apatosaurus", "Airy mystery meets grounded chill. You're a mood symphony."],
];