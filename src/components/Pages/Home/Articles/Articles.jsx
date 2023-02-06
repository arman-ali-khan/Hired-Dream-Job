import { Link } from 'react-router-dom';
import {  FaArrowRight } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';


const Articles = () => {
  
  const [posts,setPosts] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/blogPosts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])
  console.log(posts);
  return (
    <div className="px-4 mt-10  w-full mb-8  mx-auto">
      <h2 className="text-3xl font-semibold text-center">Recent News Articles</h2>
      <p className="text-center mt-2 mb-4">Fresh job related news content posted each day.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center">
        {
          posts.map(post=>  <div key={post._id} className="w-full mt-5 rounded-md overflow-hidden border-2">
          {/* image */}
          <div className="overflow-hidden">
            <img className="w-full hover:scale-110 transition-transform h-40" src={post.image} alt="Mountain" />
          </div>
          {/* text */}
          <div className="p-4">
            <div className="flex mb-3">
              <p className="mr-5 font-bold text-gray-400   ">{post.date}</p>
              <p className="font-bold  text-gray-400  ">12 Comment</p>
            </div>
            <p className='flex gap-2 font-bold text-blue-300'>  {post.categories.map(category=><p className='capitalize '>
                {category.label}
              </p>)}</p>
            <div className="font-bold text-xl mb-2 flex gap-2">
            
              {post.title}
            </div>
            <p className="text-gray-700 text-base">
              {post.details.slice(0,140)}
            </p>
          </div>
          <div className="px-4 pb-4">
            <Link className='w-full rounded-md bg-blue-100 flex justify-center py-3' to={`/singelArticles/${post._id}`}>
            <button className="text-md font-semibold text-sky-400">Read More </button>
            </Link>
          </div>
        </div>)
        }

        
     </div>
    <div className='mt-4 flex justify-center'>
    <button className=' bg-blue-500 hover:bg-blue-700 btn-normal  text-white  flex items-center gap-3  ' > Load more articles <FaArrowRight className='text-white ' />   </button>
    </div>
    </div>
  );
};

export default Articles;