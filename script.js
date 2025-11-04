const form = document.getElementById('studentForm');
const table = document.getElementById('studentTable');

// Load students from localStorage
function loadStudents() {
  const data = JSON.parse(localStorage.getItem('students') || '[]');
  table.innerHTML = '';
  data.forEach((s, i) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.roll}</td>
      <td>${s.class}</td>
      <td>${s.section}</td>
      <td class="actions">
        <button class="btn-danger" onclick="removeStudent(${i})">Delete</button>
      </td>
    `;
    table.appendChild(tr);
  });
}

// Add new student
form.addEventListener('submit', e => {
  e.preventDefault();

  const id = document.getElementById('sid').value.trim();
  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const cls = document.getElementById('class').value;
  const section = document.getElementById('section').value;

  if (!id || !name || !roll || !cls || !section) return;

  const data = JSON.parse(localStorage.getItem('students') || '[]');
  data.push({ id, name, roll, class: cls, section });
  localStorage.setItem('students', JSON.stringify(data));

  form.reset();
  loadStudents();
});

// Delete student
function removeStudent(index) {
  const data = JSON.parse(localStorage.getItem('students') || '[]');
  data.splice(index, 1);
  localStorage.setItem('students', JSON.stringify(data));
  loadStudents();
}

// Initialize
loadStudents();
