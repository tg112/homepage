document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector(".submit-btn");
  btn.textContent = "Sent!";
  btn.disabled = true;
  btn.style.backgroundColor = "#4b4b4b";
  e.target.reset();
});
