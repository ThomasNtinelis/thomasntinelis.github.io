// Your links, in one place. Leave "" to hide a link.
const PROFILE = {
  email:    "thomas.ntinelis@maastrichtuniversity.nl",
  linkedin: "https://www.linkedin.com/in/thomas-ntinelis",
  orcid:    "https://orcid.org/0009-0001-4027-6867",
  scholar:  "",   // "https://scholar.google.com/citations?user=..."
  um:       "https://cris.maastrichtuniversity.nl/en/persons/thomas-ntinelis/",
  github:   "",
  cv:       "CV_Thomas_Ntinelis.pdf"
};

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("links");
  if (list) {
    const items = [
      ["CV (pdf)", PROFILE.cv],
      ["Email", PROFILE.email && "mailto:" + PROFILE.email],
      ["LinkedIn", PROFILE.linkedin],
      ["ORCID", PROFILE.orcid],
      ["Google Scholar", PROFILE.scholar],
      ["Maastricht University profile", PROFILE.um],
      ["GitHub", PROFILE.github]
    ];
    for (const [label, href] of items) {
      if (!href) continue;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = href; a.textContent = label;
      if (!href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
      li.appendChild(a); list.appendChild(li);
    }
  }
  document.querySelectorAll("[data-cv]").forEach(a => a.href = PROFILE.cv);
});
