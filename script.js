function toggleSection(section) {
    const ul = section.querySelector('ul');
    if (ul.style.display === "block") {
      ul.style.display = "none";
    } else {
      ul.style.display = "block";
    }
  }
  