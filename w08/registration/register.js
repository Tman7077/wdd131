import { addParticipant, submitForm } from "./templates.js";

let numParticipants = 1;
document.getElementById("add").addEventListener("click", () => {numParticipants = addParticipant(numParticipants)});
document.getElementById("registrationForm").addEventListener("submit", (e) => {submitForm(e, numParticipants)});