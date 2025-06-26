document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.challenge-card');

  cards.forEach((card) => {
    
    // Extract the challenge number from the card's inner elements (title button IDs)
    const hintsTab = card.querySelector('[id^="hints-tab"]');
    const solutionTab = card.querySelector('[id^="solution-tab"]');
    
    if (!hintsTab || !solutionTab) return;

    // Extract the unique challenge number
    const idNumber = hintsTab.id.replace('hints-tab', '');

    const tabContent = card.querySelector('.tab-content');
    const hintsPane = card.querySelector(`#hints${idNumber}`);
    const solutionPane = card.querySelector(`#solution${idNumber}`);

    // Show Hints
    hintsTab.addEventListener('click', (e) => {
      e.stopPropagation();
      tabContent.style.display = 'block';
      hintsPane.classList.add('show', 'active');
      solutionPane.classList.remove('show', 'active');
    });

    // Show Solution
    solutionTab.addEventListener('click', (e) => {
      e.stopPropagation();
      tabContent.style.display = 'block';
      solutionPane.classList.add('show', 'active');
      hintsPane.classList.remove('show', 'active');
    });
  });

  // Global click listener only ONCE
  document.addEventListener('click', (e) => {
    const isInsideCard = e.target.closest('.challenge-card');
    
    if (!isInsideCard) {
      document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.style.display = 'none';
      });
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('show', 'active');
      });
    }
  });
});
