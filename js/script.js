document.getElementById("orderForm").addEventListener("submit", function(e){
    e.preventDefault();

    // Clear errors
    document.querySelectorAll(".error").forEach(e => e.innerText = "");

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;

    // Name validation
    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    // Email validation
    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if(!email.includes("@")){
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    }

    // Product validation
    if(product === ""){
        document.getElementById("productError").innerText = "Please select a product";
        valid = false;
    }

    // Quantity validation
    if(quantity === "" || quantity <= 0){
        document.getElementById("quantityError").innerText = "Enter a valid quantity";
        valid = false;
    }

    // If valid
    if(valid){
        document.getElementById("successMsg").style.display = "block";

        // Reset form
        document.getElementById("orderForm").reset();
    }

});