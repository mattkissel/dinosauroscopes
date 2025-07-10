const fs    = require('fs');
const path  = require('path');
const fetch = require('node-fetch');

const GITHUB_TOKEN = process.env.GH_AI_TOKEN;
const MODEL_URL    = "https://api.githubcopilot.com/v1/chat/completions";

if (!GITHUB_TOKEN) {
  console.error("❌ GH_AI_TOKEN missing from environment");
  process.exit(1);
}

const dinosaurs = [
  "Tyrannosaurus Rex","Triceratops","Stegosaurus","Velociraptor",
  "Brachiosaurus","Ankylosaurus","Spinosaurus","Pachycephalosaurus",
  "Dilophosaurus","Allosaurus","Iguanodon","Carnotaurus"
];

async function generate() {
  const today = new Date().toISOString().split('T')[0];
  const prompt = `
Generate a JSON object for dinosaur horoscopes dated ${today}.
Each one should reflect events a dinosaur might experience during their day.
If today is Friday, make every horoscope about dinosaur love-life.
Use exactly these keys: ${dinosaurs.join(', ')}.
Return only valid JSON like:
{
  "date": "${today}",
  "Tyrannosaurus Rex": "Your roar may attract unexpected company.",
  ...
}
`;

  const res = await fetch(MODEL_URL, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${GITHUB_TOKEN}`,
      "Content-Type":  "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4",  // GitHub-hosted model
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
      max_tokens: 1000
    })
  });

  const text = await res.text();

  if (!res.ok) {
    console.error(`❌ HTTP ${res.status}\n${text}`);
    process.exit(1);
  }

  let content;
  try {
    const parsed  = JSON.parse(text);
    content       = parsed.choices[0].message.content.trim();
  } catch (err) {
    console.error("❌ Failed to parse response JSON", err);
    process.exit(1);
  }

  let data;
  try {
    data = JSON.parse(content);
  } catch (err) {
    console.error("❌ Failed to parse AI content:\n", content);
    process.exit(1);
  }

  // Finalize and write
  data.date = today;
  const outDir = path.join(process.cwd(), "dinosauroscopes");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  fs.writeFileSync(
    path.join(outDir, `${today}.json`),
    JSON.stringify(data, null, 2)
  );

  console.log(`✅ Generated dinosauroscopes for ${today}`);
}

generate();