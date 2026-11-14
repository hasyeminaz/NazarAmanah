
const openButton = document.getElementById("openInvitation");
const invitationContent = document.getElementById("invitationContent");

openButton.addEventListener("click", function () {
  invitationContent.classList.remove("hidden");

  document.body.style.overflow = "auto";

  invitationContent.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
