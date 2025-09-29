const searchBox = document.getElementById("searchBox");
  const products = document.querySelectorAll("#productList .box");

  searchBox.addEventListener("keyup", function () {
    const searchText = this.value.toLowerCase();

    products.forEach(product => {
      const title = product.querySelector(".title").textContent.toLowerCase();
      const desc = product.querySelector(".desc").textContent.toLowerCase();

      // check if searchText matches any of them
      if (title.includes(searchText) || desc.includes(searchText)) {
        product.style.display = "block"; // show
      } else {
        product.style.display = "none";  // hide
      }
    });
  });

//   form vlidtion

function validateForm() {
      let inputs = document.querySelectorAll("#signupForm input");
      let valid = true;

      inputs.forEach(input => {
        if (input.value.trim() === "") {
          input.classList.add("error");
          valid = false;
          setTimeout(() => input.classList.remove("error"), 500); // remove after shake
        }
      });

      if (valid) {
        alert("User signed up");
      }
    }

    