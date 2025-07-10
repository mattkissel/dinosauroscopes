function getToday() {
      return new Date().toISOString().split("T")[0];
    }

    async function getHoroscopes() {
      document.getElementById("loading").style.display = "block";
      const today = getToday();
      document.getElementById("today").textContent = `Today is ${today}`;

      const savedDate = localStorage.getItem("dinoDate");
      const savedData = localStorage.getItem("dinoHoroscopes");

      if (savedDate === today && savedData) {
        render(JSON.parse(savedData));
        document.getElementById("loading").style.display = "none";
        console.log("saved data " + savedData);
        return;
      }

      

        try {
            document.getElementById("loading").style.display = "block";
            const prompt = `
                Generate a JSON object for dinosaur horoscopes dated ${today}.
                Each horoscope should reflect experiences that dinosaur species might have today.
                If today is Friday, focus on dinosaur romance.
                Use these keys: ${DINOS.join(", ")}.
                Return only valid JSON, e.g.:
                {
                "date": "${today}",
                "Tyrannosaurus Rex": "You may find unexpected companionship near the watering hole.",
                ...
                }
                `.trim();

            // 1) call puter.js
            const aiResp = await puter.ai.chat(prompt, { model: "gpt-4.1-nano" });

            console.log(aiResp);
            // 2) pull out the actual chat text
              // New extraction logic for puter.js shape
            const text = aiResp.message?.content
                ?? aiResp.content
                ?? (typeof aiResp === "string" ? aiResp : null);

            if (!text) {
                throw new Error("Unexpected AI response: " + JSON.stringify(aiResp));
            }

            // 3) turn into JSON
            const jsonData = JSON.parse(text.trim());

            // 4) cache + render
            localStorage.setItem("dinoHoroscopes", JSON.stringify(jsonData));
            localStorage.setItem("dinoDate", getToday());
            render(jsonData);
        }
        catch (err) {
            console.error("Failed to generate horoscopes", err);
        }
        finally {
            document.getElementById("loading").style.display = "none";
        }

    }

    function render(data) {
      const container = document.getElementById("horoscope-container");
      container.innerHTML = "";
      DINOS.forEach(dino => {
        const message = data[dino] || "🦕 No prophecy available.";
        const div = document.createElement("div");
        div.className = "dino";
        div.innerHTML = `<h2><a href="dinosaurs/${dino.toLowerCase()}.html">${dino}</a></h2><p>${message}</p>`;
        container.appendChild(div);
      });
    }

    getHoroscopes();