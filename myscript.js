function validateForm() {
    console.log("validateForm function called");
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var email = document.getElementById("email").value;
        var phoneNo = document.getElementById("num").value;

        if (firstName == "") {
            alert("Please fill in the First Name field....");
            return false;
        }

        if (lastName == "") {
            alert("Please fill in the Last Name field....");
            return false;
        }

        if (email== "") {
            alert("Please fill in the E-mail Number field....");
            return false;
        }

        if (phoneNo  == "") {
            alert("Please fill in the Phone number field....");
            return false;
        }

        return true;
    }