document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // detiene el envío

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    let errores = [];

    if (nombre.value.trim() === "") {
      errores.push("El nombre no puede estar vacío.");
    }

    if (!email.value.includes("@")) {
      errores.push("El correo debe contener '@'.");
    }

    if (mensaje.value.length < 10) {
      errores.push("El mensaje debe tener al menos 10 caracteres.");
    }

    if (errores.length > 0) {
      alert("⚠️ Errores detectados:\n\n" + errores.join("\n"));
    } else {
      alert("✅ Formulario enviado correctamente.");
      form.submit(); // podés dejarlo si querés usar Formspree igual
    }
  });
});
