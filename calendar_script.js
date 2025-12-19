const days = document.querySelectorAll('.day');

days.forEach(day => {
  day.addEventListener('click', () => {
    const assignment = prompt('Enter assignment name:');

    if (assignment) {
      const div = document.createElement('div');
      div.className = 'assignment';
      div.textContent = assignment;
      day.appendChild(div);
    }
  });
});
