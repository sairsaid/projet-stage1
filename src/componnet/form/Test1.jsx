import { Alert, Button, Stack, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
export default function Test1() {
    let { id } = useParams()
    const [data, setData] = useState([])
     const [posts, setPosts] = useState([])
    
    



    const { register, handleSubmit, formState: { errors } } = useForm();

    const [length, setLength] = useState(0);

    /**
     * 
     */

    // const postsUpdatedAt = useMemo(() => {

    //    return posts.length === 0 ? null : new Date();

    // }, [posts])///////???

    // console.log(postsUpdatedAt)




        const ref =useRef()

    async function addComment(newComment) {
        ref.current.reset()
        await axios.post('http://localhost:5051/comment',{...newComment,postId:id})
        window.location.href='/comment/'+id
    }




    
    useEffect(() =>{
        async function Comment() {
            await axios.get(`http://localhost:5051/comment?postId=${id}`)
                .then((res) => {
                
                 
                    setData(res.data)

                })


        }Comment()

    }, [])



console.log(data);

/*function Delete(x){
    const sup=data.filter((elem,index)=>{
        return elem.id !== x
    })
  setData(sup)
}*/


async function Delete(x){
    await axios.delete(`http://localhost:5051/comment/${x}`)
.then((res)=>{
    console.log(res.status);
})
window.location.href='/comment/'+id

}

    
    const onSubmit =(newpost)=>{
        
       ref.current.reset()
    setPosts([...posts,{...newpost,id:++posts.length}])
    }






    return (
        <div>


            <>

                <form className="w-[90%] mx-auto my-6" ref={ref} onSubmit={handleSubmit(addComment)}>

    <Stack direction="column" spacing={2}>

        <TextField  label="name"  {...register("name",{required:true})} error={Boolean(errors.name)} helperText={Boolean(errors.name) && 'ERROR'}/>
      
        <TextField
                label="body"
                multiline
                rows={2}
                maxRows={4}
                error={Boolean(errors.body)}
                {...register('body', {required: true})}
                helperText={Boolean(errors.body) && 'ERROR'}
                />
      
 
        <div className="inline-flex mx-auto justify-center"><Button type="submit" variant="contained">Submit</Button></div>
    </Stack>

 

  </form>

                <div className="grid grid-cols-1 gap-4 w-[50%] m-auto my-[5%]">

                    {data.length == 0 && <Alert className="col-start-2" severity="info">No posts</Alert>}

                    {

                        data.map((post) => (

                            <div key={post.id} className='bg-lime-300 p-4 rounded-xl'>
                                <p>{post.id}</p>
                                 <h3>{post.name}</h3>
                                  <p>{post.body}</p>
                                <button className="bg-red-600 text-white py-3 px-3 table mx-auto mt-5" onClick={ ()=>Delete(post.id)}>DELET</button>
                            </div>
                        ))

                    }


                </div>



            </>


        </div>
    )
}
