import toast from "react-hot-toast";

export const getBlogs = () => {
    let blogs = [];
    let storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs) {
        blogs = JSON.parse(storedBlogs);
    }

    return blogs;
}

//save blog on bookmarks
export const saveBlogs = (blog) => {
    let blogs = getBlogs();
    const isExists = blogs.find((b) => b.id === blog.id);
    if(isExists) {
        return toast.error('Already Bookmarked');
    }
    else {
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        toast.success('Blog Bookmarked Successfully');
    }
}

//delete blog from bookmarks
export const deleteBlog = (id) => {
    let blogs = getBlogs();
    const remaining = blogs.filter((blog) => blog.id !== id);
    localStorage.setItem('blogs', JSON.stringify(remaining));
    toast.success('Blog removed from Bookmarked');
}