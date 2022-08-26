import { createContext } from "react";


const values = {

     posts: [],
   
     setPosts: () => {}
}

export const ArticlesContext =  createContext(values);
