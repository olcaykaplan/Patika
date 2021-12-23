const myPosts = [
  {
    title: "Title 1",
    content:
      "Content 1  " +
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas repellat, quam quidem fugiat dolore quaerat in corporis enim accusantium laudantium voluptates praesentium eligendi corrupti voluptatibus ipsam ratione veritatis. Cupiditate, totam.",
    publishDate: "12/22/2021",
  },
  {
    title: "Title 2",
    content:
      "Content 2  " +
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, at vero, enim a quidem debitis fuga qui nesciunt blanditiis nobis numquam aut minima doloribus rem optio saepe ducimus quaerat iste!",
    publishDate: "12/23/2021",
  },
];
const today = new Date().toDateString();

const readPosts = (posts) => {
  var read = "";
  posts.forEach((post) => {
    let { title, content, publishDate } = post;
    read += `${title} (${new Date(publishDate).toDateString()})\n------------------- \n `;
    read += `${content}  \n`;
    read += "--------------------------------------------- \n \n";
  });
  console.log(read);
};

const addPost = ({ title, content, publishDate = today }) => {
    console.log("Adding new post...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      myPosts.push({ title, content, publishDate });
      resolve(myPosts)
    }, 2000);
  });
};

const postProcess = async (post) => {
  await addPost(post);
  console.log("Post added successfully!");
  readPosts(myPosts);
};

let post = {
  title: "Title 3",
  content:
    "Content 3  " +
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita tempora laborum illum blanditiis officia est nesciunt optio quam, harum cumque. Soluta ex blanditiis consequatur perspiciatis officia. Ab, maxime modi.",
};
postProcess(post);
