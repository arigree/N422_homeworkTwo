document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");
  const displayDiv = document.getElementById("display");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    displayDiv.innerHTML = `
      <h2>Submitted Information:</h2>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `;

    form.reset();
  });
});