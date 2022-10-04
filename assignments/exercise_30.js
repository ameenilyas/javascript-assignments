const users = ["admin", "kabeer", "ameen", "salar"];

for (let i = 0; i < users.length; i++) {
  if (users[i] == "admin") {
    console.log(`hello ${users[i]}, would you like to see some thing?`);
  } else {
    console.log(`hello ${users[i]}, thank you for login again`);
  }
}
