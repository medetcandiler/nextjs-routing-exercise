'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link';
import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts'

function User({ params }) {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ user, setUser ] = useState([]);
  const [ posts, setPosts] = useState();

  useEffect(() => {
    wait(1000).then(
      () => {
        const fetchingUser = async () => {
          try{
            const userData = await getUser(params.id);
            const postData = await getUserPosts(params.id);
            setUser(userData);
            setPosts(postData);
            setIsLoading(false);
          } catch(err) {
            setIsLoading(false)
          }
        }
        fetchingUser();
      }
    )

  },[])

  const wait = async (duration) => {
    return new Promise(resolve => setTimeout(resolve, duration))
  }

  if(isLoading) return (
    <div className='flex justify-center'>
      <div className='loader'></div>
    </div>
  )
  return (
    <div className='container mx-auto px-10 flex flex-col items-center text-center'>
      <h1 className='text-5xl font-bold text-slate-400'>Meet our team member {user.name}!</h1>
      <br />
      <h3> <span className='font-bold text-xl text-slate-400'>Username:</span> {user.name}</h3>
      <p><span className='font-bold text-xl text-slate-400'>Email:</span>{user.email}</p>
      <p> <span className='font-bold text-xl text-slate-400'>Address:</span> {`City: ${user.address?.city}. Street: ${user.address?.street}. Suite: ${user.address?.suite}.`}</p>
      <br />
      <a className='btn-outlined' target='_blank' href={`https://${user.website}`}>Visit {user.name} website!</a>
      <br /><br />
      <h3 className='text-4xl font-bold text-slate-400 mb-5'>All the {user.name}'s posts</h3>
      <ol className='space-y-6'>
      {posts?.map(post => (
        <li className='flex flex-col items-center space-y-2' key={post.id}>
          <h3 className='text-2xl underline'>{post.title[0].toUpperCase()}{post?.title.slice(1, post?.title.length)}</h3>
          <p className='italic w-96'>{post.body}</p>
        </li>
        ))}
      </ol>
      <br />
      <Link className='btn' href='/users'>Go back to users</Link>
      <br />
      <Link className='btn' href='/'>Go back to home page</Link>
      <br />
    </div>
  )
}

export default User;
