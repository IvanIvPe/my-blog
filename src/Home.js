import { useState } from "react";

const Home = () => {
    const [blogs, setBlogPosts] = useState([
        { id: 1, title: "First Post", content: "This is the content of the first post.", author: "Alice", id: 1 },
        { id: 2, title: "Second Post", content: "This is the content of the second post.", author: "Bob", id: 2 },
        { id: 3, title: "Third Post", content: "This is the content of the third post.", author: "Charlie", id: 3 },
    ]);

    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author }</p>

                </div>
            ))}
        </div>
    );
}

export default Home;