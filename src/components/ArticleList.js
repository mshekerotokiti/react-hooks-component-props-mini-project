import React from "react";
import Article from "./Article.js";
import blogData from "../data/blog";

export default function ArticleList(){
    const posts =blogData.posts
    const article = posts.map((post) => (
        <Article 
        key= {post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
        />
    ));

    return(
        <main>{article} </main>
    )
}