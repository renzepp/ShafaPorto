/* app.js -urutan: render project > chart skills > smooth scroll > init */

/* 1. Render kartu project dari PROJECTS (data/projects.js) */
function renderProject(p) {
  const badges = p.tech.map(t => `<span class="tech-badge">${t}</span>`).join('');
  const links = p.links.map(l => l.url
    ? `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`
    : `<a class="is-disabled" aria-disabled="true">${l.label}</a>`
  ).join('');
  return `
    <article class="project-card">
      <span class="project-tag">${p.tag}</span>
      <h3>${p.title}</h3>
      ${p.course ? `<p><strong>Course:</strong> ${p.course}</p>` : ''}
      <p>${p.description}</p>
      <div class="tech-stack">${badges}</div>
      <div class="project-note"><strong>${p.noteLabel}:</strong> ${p.note}</div>
      <div class="project-links">${links}</div>
    </article>`;
}

function renderProjects() {
  ['personal', 'academic'].forEach(category => {
    const box = document.getElementById(`projects-${category}`);
    if (box) box.innerHTML = PROJECTS.filter(p => p.category === category).map(renderProject).join('');
  });
}

/* 2. Radar chart skills */
function initSkillsChart() {
  const canvas = document.getElementById('skillsChart');
  if (!canvas || typeof Chart === 'undefined') return;
  
  // Ambil warna primary dari CSS variable
  const brand = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  
  new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['Python', 'ML/AI', 'Data Analysis', 'Mathematics', 'Problem Solving', 'Communication'],
      datasets: [{
        label: 'Proficiency',
        data: [85, 80, 82, 90, 88, 85],
        borderColor: brand,
        backgroundColor: brand + '1A',
        borderWidth: 2,
        pointBackgroundColor: brand,
        pointBorderColor: '#fff',
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { r: { beginAtZero: true, max: 100, ticks: { stepSize: 20 } } }
    }
  });
}

/* 3. Smooth scroll (href="#" saja = kembali ke atas) */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const id = a.getAttribute('href');
      const target = id.length > 1 ? document.querySelector(id) : null;
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* 4. Init */
document.getElementById('year').textContent = new Date().getFullYear();
renderProjects();
initSkillsChart();
initSmoothScroll();
