import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "First Post", content: "This is the content of the first post.", author: "Alice"},
        { id: 2, title: "Second Post", content: "This is the content of the second post.", author: "Bob"},
        { id: 3, title: "Third Post", content: "This is the content of the third post.", author: "Bob"}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    return (
        <div className="home">
            <BlogList blogs= {blogs} title="All Blogs:" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;