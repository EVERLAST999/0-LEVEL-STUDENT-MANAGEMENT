const form = document.getElementById("registrationForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const classLevel = document.getElementById("classLevel").value;

  if (!fullName || !email || !phone || !classLevel) {
    showMessage("Tafadhali jaza sehemu zote muhimu.", "error");
    return;
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    showMessage("Tafadhali weka barua pepe sahihi.", "error");
    return;
  }

  if (!/^[0-9+\-\s]{10,15}$/.test(phone)) {
    showMessage("Namba ya simu si sahihi.", "error");
    return;
  }

  showMessage("Usajili umetumwa kikamilifu. Tutawasiliana nawe hivi karibuni.", "success");
  form.reset();
});

function showMessage(message, type) {
  formMessage.textContent = message;
  formMessage.className = `form-message ${type}`;
}