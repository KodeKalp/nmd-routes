import React, { useEffect, useState } from 'react'

import ProfileCard from '../Components/ProfileCard'
import "./Blog.css"

const Blog = () => {
    const [posts, setPost] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => setPost(json))
                console.log("posts: ", posts)
            }
            catch (err) {
                console.log("err", err)
            };
        };
        fetchPosts();
        console.log(posts)


    }, []);

    return (
        <div>
            blogs
            {
                posts.map(post => (

                    <ProfileCard imgURL="https://dummyimage.com/600x400/000/fff"
                        title={post.title}
                        desc={post.body} />
                ))
            }
        </div>
    )
}

export default Blog
