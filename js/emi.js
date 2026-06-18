function calculateEMI(){

    const principal =
        parseFloat(
            document.getElementById("loanAmount").value
        );

    const annualRate =
        parseFloat(
            document.getElementById("interestRate").value
        );

    const years =
        parseFloat(
            document.getElementById("loanYears").value
        );

    if(
        isNaN(principal) ||
        isNaN(annualRate) ||
        isNaN(years) ||
        principal <= 0 ||
        annualRate <= 0 ||
        years <= 0
    ){
        alert("Please enter valid values");
        return;
    }

    const monthlyRate =
        annualRate / 12 / 100;

    const months =
        years * 12;

    const emi =
        (principal *
        monthlyRate *
        Math.pow(
            1 + monthlyRate,
            months
        )) /
        (
            Math.pow(
                1 + monthlyRate,
                months
            ) - 1
        );

    const totalAmount =
        emi * months;

    const totalInterest =
        totalAmount - principal;

    document.getElementById(
        "emiResult"
    ).textContent =
        "Monthly EMI: ₹ " +
        emi.toFixed(2);

    document.getElementById(
        "totalAmount"
    ).textContent =
        "Total Amount: ₹ " +
        totalAmount.toFixed(2);

    document.getElementById(
        "totalInterest"
    ).textContent =
        "Total Interest: ₹ " +
        totalInterest.toFixed(2);
}