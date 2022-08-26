import { Alert, Button, Stack, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
export default function Test1() {
let location=useParams()
    const[data,setData]=useState([])
   // const [posts, setPosts] = useState([])

   const[add,setAdd]=useState({})


   
    const {register,handleSubmit,formState:{errors}}=useForm();

    const [length, setLength] = useState(0);

    /**
     * 
     */

    // const postsUpdatedAt = useMemo(() => {

    //    return posts.length === 0 ? null : new Date();
    
    // }, [posts])

    // console.log(postsUpdatedAt)



    useEffect(()=>
       async function Comment(){
await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${location.id}`)
.then((res)=>{
    setData(res.data)

})
    

}()
       
    ,[])

    
    
    function addComment(){
       
        let obj = {
            body:add.body,
        
        }
        setData([...data,obj])
    }
/*const ref =useRef()

const onSubmit =(newpost)=>{
    
   ref.current.reset()
setPosts([...posts,{...newpost,id:++posts.length}])
}*/






  return (
    <div>


<>

{/*<form className="w-[90%] mx-auto my-6" ref={ref} onSubmit={handleSubmit(onSubmit)}>

    <Stack direction="column" spacing={2}>

        <TextField name="title" label="Title"  {...register("title",{required:true})} error={Boolean(errors.title)} helperText={Boolean(errors.title) && 'ERROR'}/>
      
        <TextField
                label="Description"
                multiline
                rows={2}
                maxRows={4}
                error={Boolean(errors.description)}
                {...register('description', {required: true})}
                helperText={Boolean(errors.description) && 'ERROR'}
                />
      
 
        <div className="inline-flex mx-auto justify-center"><Button type="submit" variant="contained">Submit</Button></div>
    </Stack>

 

  </form>*/}

<div className="grid grid-cols-1 gap-4 w-[50%] m-auto my-[5%]">

    {data.length == 0 && <Alert className="col-start-2" severity="info">No posts</Alert>}

    {

        data.map((post) => (

            <div key={post.id} className='bg-lime-300 p-4 rounded-xl'>
<p>{post.id}</p>
<TextField className='bg-amber-200'
        id="outlined-name"
        label="Name"
        value={post.name}
      
      />

                <p>{post.body}</p>
            
            </div>
        ))
      
    }
 
 <TextField  name='comment' label="comment" color="secondary"  focused onChange={(e)=>setAdd({...add,body:e.target.value})}/>
 <button onClick={()=>addComment()} >ADD</button>
</div>



</>


    </div>
  )
}
