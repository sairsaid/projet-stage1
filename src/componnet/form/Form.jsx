
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Alert, Button } from '@mui/material';


export default function Articles() {


    const [posts, setPosts] = useState([]);

    const [errors, setErrors] = useState([]);


    const findError = (field) => errors.some(e => e === field);

    const onSubmit = (e) => {

        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        const entries = Array.from(formData.entries());

        const newErrors = entries.filter(([, v]) => !!!v).map(([k]) => k);

        setErrors(newErrors);

        const post = Object.fromEntries(formData.entries());

        if (newErrors.length > 0) return;

        setPosts([...posts, { ...post, id: ++posts.length }]);

        form.reset();

    }


    return (

        <>

            <form className="w-[90%] mx-auto my-6" onSubmit={onSubmit}>

                <Stack direction="column" spacing={2}>

                    <TextField name="title" label="Title" error={findError('title')} />


                    <TextField
                        label="Description"
                        name="description"
                        multiline
                        rows={2}
                        error={findError('description')}
                        maxRows={4} />

                    <div className="inline-flex mx-auto justify-center"><Button type="submit" variant="contained">Submit</Button></div>
                </Stack>



            </form>

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



        </>
    )




}


