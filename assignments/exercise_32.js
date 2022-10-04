const user_name = ["asia", "salar", "bilal", "umair", "ameen"];
const new_user_name = ["ayan", "salar", "bilal", "umair"];

const available_users = new_user_name.forEach((user) => {
  if (user_name.includes(user)) {
    console.log(`user already exist ${user}`);
  } else {
    console.log(`user name available ${user}`);
  }
});
