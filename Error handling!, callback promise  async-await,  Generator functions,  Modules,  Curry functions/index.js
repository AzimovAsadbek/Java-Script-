let promise = fetch("https://jsonplaceholder.typicode.com/users");
// promise.then(res => res.json()).then(res => res).catch(error => error);

const login = async () => {
  console.log("started");
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  res = await res.json()
  try {
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  console.log("finished");
};
login();
