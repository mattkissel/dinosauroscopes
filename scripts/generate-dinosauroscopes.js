const fs      = require('fs');
const path    = require('path');
const fetch   = require('node-fetch');

const dinosaurs = [
  "Tyrannosaurus Rex","Triceratops","Stegosaurus","Velociraptor",
  "Brachiosaurus","Ankylosaurus","Spinosaurus","Pachycephalosaurus",
  "Dilophosaurus","Allosaurus","Iguanodon","Carnotaurus"
];

async function main() {
  const today  = new Date().toISOString().split('T')[0];
  const prompt = `
Generate a JSON object for dinosaur horoscopes dated ${today}.
All horoscopes relate to the dinosaur’s daily life; on Fridays focus on love-life.
Use these keys exactly: ${dinosaurs.join(', ')}.

Only return valid JSON, for example:
{
  "date":"${today}",
  "Tyrannosaurus Rex":"…",
  …
}
  `.trim();

  const res = await fetch("https://api.puter.com/v2/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model:       "gpt-4.1-nano",
      prompt:      prompt,
      temperature: 0.8,
      max_tokens:  800
    })
  });

  const text = await res.text();

  if (!res.ok) {
    console.error(`❌ API returned HTTP ${res.status}\n${text}`);
    process.exit(1);
  }

  let data;
  try {
    // If Puter really still uses `choices[0].message.content`
    const payload = JSON.parse(text);
    const content = payload.choices?.[0]?.message?.content?.trim();
    data = JSON.parse(content);
  }
  catch (e) {
    console.error("❌ Failed to parse JSON from API response:\n", text);
    console.error(e);
    process.exit(1);
  }

  // ensure date field
  data.date = today;


  // write to /dinosauroscopes/YYYY-MM-DD.json
  const outDir = path.join(process.cwd(), "dinosauroscopes");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  fs.writeFileSync(
    path.join(outDir, `${today}.json`),
    JSON.stringify(data, null, 2)
  );

  console.log(`✅ Generated dinosauroscopes for ${today}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});



