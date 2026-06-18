function calculateAge() {

    const dobValue = document.getElementById("dob").value;

    if (!dobValue) {
        alert("Please select your date of birth");
        return;
    }

    const dob = new Date(dobValue);
    const today = new Date();

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate();

        days += previousMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("ageResult").innerHTML =
        `
        ${years} Years<br>
        ${months} Months<br>
        ${days} Days
        `;
}