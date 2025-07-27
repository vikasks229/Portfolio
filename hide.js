document.addEventListener("contextmenu", (e) => e.preventDefault());
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show-on-scroll');
      observer.unobserve(entry.target); // Only animate once
    }
  });
});

const animatedSections = document.querySelectorAll(
  '#project1, #project2, #project3, #rock-paper-game-project4, #currency-converter-project-5, #TicTacToe-project-6, #skills, #education'
);

animatedSections.forEach(section => {
  observer.observe(section);
});
