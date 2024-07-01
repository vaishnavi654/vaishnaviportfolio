document.addEventListener('DOMContentLoaded', function() {
  typeWriterEffect("I am Badam Vaishnavi", 100, "typewriter");
});

function typeWriterEffect(text, speed, elementId) {
  let i = 0;
  const target = document.getElementById(elementId);
  function typeWriter() {
      if (i < text.length) {
          target.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }
  typeWriter();
}


function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      section.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

function toggleDetails(detailsId) {
  const details = document.getElementById(detailsId);
  details.classList.toggle('active');
}
