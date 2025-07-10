import fs   from 'fs';
import path from 'path';
import fetch from 'node-fetch';

const dinosaurs = [
  "Tyrannosaurus Rex","Triceratops","Stegosaurus","Velociraptor",
  "Brachiosaurus","Ankylosaurus","Spinosaurus","Pachycephalosaurus",
  "Dilophosaurus","Allosaurus","Iguanodon","Carnotaurus"
];

async function main() {
  const today  = new Date().toISOString().split('T')[0];
  const prompt = `
Generate a JSON object for dinosaur horoscopes dated ${today}.

All of the horoscopes should have content related to the dinosaur and things
that could happen to it on the course of a day. On friday the horoscopes should
be about the lovelife of the dinosaur.
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

  const { choices } = await res.json();
  const text        = choices[0].message.content.trim();
  const data        = JSON.parse(text);

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