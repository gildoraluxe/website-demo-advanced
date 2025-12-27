function handleForm(formId){
  const form = document.getElementById(formId);
  form.addEventListener("submit", e => {
    e.preventDefault();
    const leads = JSON.parse(localStorage.getItem("leads")) || [];
    leads.push({
      name: form.querySelector("#name").value,
      email: form.querySelector("#email").value,
      message: form.querySelector("#message").value
    });
    localStorage.setItem("leads", JSON.stringify(leads));
    alert("Message sent. We'll be in touch.");
    form.reset();
  });
}

handleForm("contactForm");
handleForm("propertyForm");
