function log() {
  let username = document.forms["login"]["username"].value;
  let password = document.forms["login"]["password"].value;
  console.log(username);
  console.log(password);

  username = username.padEnd(25, " ");
  password = password.padEnd(25, " ");
  let data = username + "$" + password;
  let loginFlag = 0;

  console.log("data: " + data)

  for (let i = 0; i < users.data.length; i++) {
    console.log("users: " + users.data[i])
    if (users.data[i] == data) {
      loginFlag = 1;
      console.log(loginFlag);
      return true;
    }
  }
  console.log(loginFlag);
  return false;
}

let users = {
  data: ["start"];
  d: 2
};

function sign() {
  let username = document.forms["signin"]["username"].value;
  let password1 = document.forms["signin"]["password1"].value;
  let password2 = document.forms["signin"]["password2"].value;

  const pattern = /( )|(\$)/ig;

  let signFlag = 0;
  let regexFlag = 0;
  let usernameFlag = 0;
  let passwordFlag = 0;

  if (
    pattern.test(username) == true ||
    pattern.test(password1) == true ||
    pattern.test(password2) == true
  ) {
    regexFlag = 1;
    console.log("regexFlag: " + regexFlag);
  }

  username = username.padEnd(25, " ");

  for (let i = 0; i < users.data.length; i++) {
    if (users.data[i].slice(0, 25) == username) {
      usernameFlag = 1;
    }
  }

  if (usernameFlag == 0) {
    if (password1 != password2) {
      passwordFlag = 1;
    }
  }

  if (passwordFlag + usernameFlag + regexFlag == 0) {
    password1 = password1.padEnd(25, " ");
    users.data.push(username + "$" + password1);
    signFlag = 1;
    console.log("0: " + users.data[1]);
    return true;
  }
  console.log(signFlag);
  return false;
}
