const DINOS = [
  "Allosaurus","Ankylosaurus","Apatosaurus","Archaeopteryx",
  "Gallimimus","Pachycephalosaurus","Parasaurolophus",
  "Spinosaurus","Stegosaurus","Therizinosaurus","Triceratops",
  "Velociraptor"
];

// Load nav and THEN attach behaviors
fetch("nav.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("main-nav").innerHTML = html;

    // Tab click behavior
    document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab, .panel').forEach(el => el.classList.remove('active'));
        tab.classList.add('active');
        const target = tab.dataset.tab;
        document.getElementById(target)?.classList.add('active');
      });
    });

    // Dino dropdown handler
    const select = document.getElementById("dino-select");
    if (select) {
      select.addEventListener("change", async (event) => {
        event.preventDefault();
        const url = select.value;
        if (url === "#" || !url.endsWith(".html")) {
          console.log("invalid selection in dino dropdown");
          return;
        }

        // Switch to dino tab
        document.querySelectorAll('.tab, .panel').forEach(el => el.classList.remove('active'));
        document.querySelector('[data-tab="dino"]')?.classList.add('active');
        document.getElementById("dino-info")?.classList.add('active');

        try {
          const res = await fetch(url);
          const html = await res.text();
          const bodyContent = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
          document.getElementById("dino-content").innerHTML = bodyContent;
        } catch (err) {
          console.error("Failed to load dinosaur page:", err);
          document.getElementById("dino-content").innerHTML = "<p>Failed to load dino destiny.</p>";
        }
        // Optional: reset dropdown so it doesn't auto-trigger again
        select.value = "#";

      });
    }
  });