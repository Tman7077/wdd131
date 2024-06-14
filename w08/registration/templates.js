export function addParticipant(numParticipants) {
    numParticipants++;
    document.getElementById("add").insertAdjacentHTML("beforebegin",
        `<section class="participant${numParticipants}">
            <p>Participant ${numParticipants}</p>
            <div class="item">
                <label for="fname${numParticipants}"> First Name<span>*</span></label>
                <input id="fname${numParticipants}" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
                <label for="activity${numParticipants}">Activity #<span>*</span></label>
                <input id="activity${numParticipants}" type="text" name="activity" />
            </div>
            <div class="item">
                <label for="fee${numParticipants}">Fee ($)<span>*</span></label>
                <input id="fee${numParticipants}" type="number" name="fee" />
            </div>
            <div class="item">
                <label for="date${numParticipants}">Desired Date <span>*</span></label>
                <input id="date${numParticipants}" type="date" name="date" />
            </div>
            <div class="item">
                <p>Grade</p>
                <select>
                    <option selected value="" disabled selected></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="5">5th</option>
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                    <option value="11">11th</option>
                    <option value="12">12th</option>
                </select>
            </div>
        </section>`
    )
    return numParticipants;
};
export function submitForm(e, numParticipants) {
    e.preventDefault();
    document.getElementById("registrationForm").classList.add("hidden");
    document.getElementById("summary").insertAdjacentText("afterbegin",
        "Thank you " + document.getElementById("adult_name").value + " for registering. "
        + "You have registered " + numParticipants + " participant" + (numParticipants == 1 ? "" : "s") + " "
        + "and owe $" + [...document.querySelectorAll("[id^=fee]")].reduce((prevTotal, curElement) => prevTotal + parseFloat(curElement.value), 0) + " in fees.");
};