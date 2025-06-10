// Fade in cards when they enter viewport
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: stop observing after visible
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  observer.observe(card);
});