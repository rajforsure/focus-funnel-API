const API_URL = "/funnels";

const funnelList = document.getElementById("funnelList");
const form = document.getElementById("funnelForm");
const nameInput = document.getElementById("name");
const stageInput = document.getElementById("stage");
const statusInput = document.getElementById("status");

async function fetchFunnels() {
  const res = await fetch(API_URL);
  const data = await res.json();
  funnelList.innerHTML = "";
  data.forEach(funnel => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${funnel.name}</strong> - ${funnel.stage} (${funnel.status})
      <button onclick="deleteFunnel('${funnel._id}')">❌</button>
    `;
    funnelList.appendChild(li);
  });
}

form.addEventListener("submit", async e => {
  e.preventDefault();
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: nameInput.value,
      stage: stageInput.value,
      status: statusInput.value,
    }),
  });
  form.reset();
  fetchFunnels();
});

async function deleteFunnel(id) {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  fetchFunnels();
}

fetchFunnels();
