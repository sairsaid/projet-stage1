
import { useContext, useId, useRef, useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Alert, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ArticlesContext } from '../../contexts/articlesContext';
import Articles from './Form';


export default function ArticlesWithHookForm() {
 

    const [posts, setPosts] = useState([]);

    
    const ref = useRef();

    const {handleSubmit, register, formState: {errors}} = useForm();

    const onSubmit = (newPost) => {

        ref.current.reset()

        setPosts([...posts, {...newPost, id: ++posts.length  }])
    }

    useEffect(function() {

        console.log('render')


    }, [])


   
    return(
<ArticlesContext.Provider value={[posts,setPosts]}>
       <div>
       <form className="w-[90%] mx-auto my-6" ref={ref} onSubmit={handleSubmit(onSubmit)}>

        <Stack direction="column" spacing={2}>

            <TextField label="Title" error={Boolean(errors.title)} {...register('title', {required: true})} />


            <TextField
                label="Description"
                multiline
                rows={2}
                maxRows={4}
                error={Boolean(errors.description)}
                {...register('description', {required: true})}
                />

            <div className="inline-flex mx-auto justify-center">
                <Button type="submit" variant="contained">Submit</Button>
                </div>
        </Stack>

     

    </form>
    </div>
<Articles/>
{console.log(posts)}
    </ArticlesContext.Provider>
    )

}


