import axios from "axios";

async function getData(id) {
  const user = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);

  const posts = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const result = Object.assign(user.data, posts.data)
  console.log(result);
}
export default getData;
