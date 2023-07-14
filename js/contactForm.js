document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var status = document.getElementById("submissionStatus");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(event.target);

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset();
        } else {
          response.json().then(function (data) {
            if (data.errors) {
              status.innerHTML = data.errors
                .map(function (error) {
                  return error.message;
                })
                .join(", ");
            } else {
              status.innerHTML =
                "Oops! There was a problem submitting your form.";
            }
          });
        }
      })
      .catch(function (error) {
        status.innerHTML = "Oops! There was a problem submitting your form.";
      });
  });
});
