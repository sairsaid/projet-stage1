import React, { useEffect, useState } from 'react'
import logo1 from '../assets/images/img bg.jpg'
import logo2 from '../assets/images/burger1.jpg'
import logo3 from '../assets/images/Desserts.jpg'
import logo4 from '../assets/images/sandwich.jpg'

import { Link } from 'react-router-dom'
export default function Article() {

 
  const [fullData, setFullData] = useState([]);

  const [data, setData] = useState([]);

  const max = 10;

  const itemsNumberPerLoading = 3;

  const isOver = max === data.length

  const currentItemsNumber = data.length

const modulo = max % itemsNumberPerLoading

const rest = max - data.length

  function loadMore() {
  
const add = fullData.slice (currentItemsNumber , rest>3 ? currentItemsNumber + itemsNumberPerLoading : currentItemsNumber + modulo)
 
  setData([...data,...add])
     /**
      * limit = 20
      * we be add  3 elements per loading since data length is less than limit
      * once limit - data > 3, we must use modulo instead of 3
      * 
      */

       
  }

  const loadLess = () => {
     
     const removedItems = [...data].splice(currentItemsNumber - itemsNumberPerLoading, itemsNumberPerLoading);

     const newItems = data.filter((item) => {

      return removedItems.indexOf(item) === -1;
     } )

     setData(newItems);
       
  }


  useEffect(() => { 

    async function fetchData() {
      let res = await fetch("http://localhost:5051/posts")
      let json = await res.json();
      
      setFullData(json);

      setData(json.slice(0, itemsNumberPerLoading))
    }
    fetchData();

   }, [])
  return (
    <div>
      <div>
        <img src={logo1} className='w-full h-500'></img>
      </div>
      <h1 className='text-center font-bold text-6xl py-4 text-lime-700 '>Menu</h1>
      <section className='grid grid-cols-3 gap-4 w-[90%] m-auto'>

        {

          data.map(elem =>
          (
            <article key={elem.id}>
              <img src={logo2}></img>
              <h2>{elem.title}</h2>
              <h3>prix: 10£</h3>
              <p>{elem.body} </p>
              <div className='my-5 text-center'>
              <Link to={`/comment/${elem.id}`} className='bg-sky-300 py-3 px-4 '>See comment</Link>
              </div>
            </article>
          ))

        }


      </section>

      <button onClick={loadMore} className="bg-red-600 text-white py-3 px-3 table mx-auto mt-5">Load more</button>

      <button onClick={loadLess} className="bg-red-600 text-white py-3 px-3 table mx-auto mt-5">Load less</button>



    </div>
  )
}
