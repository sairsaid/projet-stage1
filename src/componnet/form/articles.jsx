import { Alert } from "@mui/material";
import { useContext, useState } from "react";
import { ArticlesContext } from "../../contexts/articlesContext";



export default function Articles() {

 const [posts,setPosts] = useContext(ArticlesContext)




 

    return (

       
       

        <div className="grid grid-cols-3">

        {posts.length == 0 && <Alert className="col-start-2" severity="info">No posts</Alert>}

        {

            posts.map((post) => (

                <div key={post.id}>

                    <h2 className='text-2xl'>{post.title}</h2>

                    <p>{post.description}</p>

                </div>
            ))
        }


    </div>

 
    )
}