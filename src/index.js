const passwordReminder = function (pass) {
  let message = "";
  if (pass == "password") {
    message = "Password is incorrect";
  } else if (pass == "incorrect") {
    message = "Try again";
  } else if (pass == "again") {
    message = "Please try again later";
  } else if (pass == "again later") {
    message = "   .... \n (┬┬﹏┬┬) \n   .... \n";
  } else {
    message = "Input Your password";
  }
  return message;
};
module.exports = passwordReminder;
