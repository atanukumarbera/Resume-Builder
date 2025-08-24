// --- Live Update Resume Preview ---
document.getElementById("resume-form").addEventListener("input", updateResume);

function updateResume() {
  document.getElementById("out-name").innerText = document.getElementById("name").value;
  document.getElementById("out-email").innerText = document.getElementById("email").value;
  document.getElementById("out-phone").innerText = document.getElementById("phone").value;
  document.getElementById("out-summary").innerText = document.getElementById("summary").value;

  // Education
  let eduList = document.querySelectorAll(".education");
  let outEdu = document.getElementById("out-education");
  outEdu.innerHTML = "";
  eduList.forEach(e => {
    if (e.value.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = e.value;
      outEdu.appendChild(li);
    }
  });

  // Skills (checkbox + custom)
  let skillsChecked = document.querySelectorAll(".skills input:checked");
  let customSkills = document.querySelectorAll(".skill-input");
  let outSkills = document.getElementById("out-skills");
  outSkills.innerHTML = "";

  skillsChecked.forEach(s => {
    let li = document.createElement("li");
    li.innerText = s.value;
    outSkills.appendChild(li);
  });

  customSkills.forEach(cs => {
    if (cs.value.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = cs.value;
      outSkills.appendChild(li);
    }
  });

  // Experience
  let expList = document.querySelectorAll(".experience");
  let outExp = document.getElementById("out-experience");
  outExp.innerHTML = "";
  expList.forEach(e => {
    if (e.value.trim() !== "") {
      let li = document.createElement("li");
      li.innerText = e.value;
      outExp.appendChild(li);
    }
  });
}

// --- Add More Education ---
function addEducation() {
  let div = document.createElement("div");
  div.className = "edu-entry";
  div.innerHTML = '<input type="text" class="education" placeholder="Degree / Institution">';
  document.getElementById("education-section").appendChild(div);
}

// --- Add More Experience ---
function addExperience() {
  let div = document.createElement("div");
  div.className = "exp-entry";
  div.innerHTML = '<input type="text" class="experience" placeholder="Job Title / Company">';
  document.getElementById("experience-section").appendChild(div);
}

// --- Add More Skills ---
function addSkill() {
  let div = document.createElement("div");
  div.innerHTML = '<input type="text" class="skill-input" placeholder="Enter a skill">';
  document.getElementById("custom-skills").appendChild(div);
}

// --- Clear Form ---
function clearForm() {
  document.getElementById("resume-form").reset();
  document.getElementById("resume-output").innerHTML = `
    <h3 id="out-name"></h3>
    <p id="out-email"></p>
    <p id="out-phone"></p>
    <h4>Profile Summary</h4>
    <p id="out-summary"></p>
    <h4>Education</h4>
    <ul id="out-education"></ul>
    <h4>Skills</h4>
    <ul id="out-skills"></ul>
    <h4>Experience</h4>
    <ul id="out-experience"></ul>
  `;
}
