function sumNumbers() {
  let result = 1 + 1;

  if (result == 2) {
    successCallback();
  } else {
    errorCallback();
  }
}

function successCallback() {
  console.log("Yeah! Number2!");
}

function errorCallback() {
  console.log("Oops! Something went wrong.");
}

sumNumbers();
