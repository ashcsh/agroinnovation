"use client"

import axios from 'axios';
import {useEffect, useState} from "react"
export default function Clientpage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await axios.get(
            `https://graph.facebook.com/115982314760197/feed?fields=id,message,created_time,full_picture,permalink_url&access_token=EAAKW9WvxJKEBALzDIA82gKsXbMG7M2zZBmwYNpZBMpaQ0ESq8lxMvDgdWXDwCMZBlTD1p5PTZANZCLoXrjmbZC2YgHDEz2knSXvWcJTCrPZBGGZCm4tYqtnPj7CPWPaFX5BXKjucOYuZC19GWxyqpnK5JL3ckbcI8T2WQd8uDSploH2HCPsHdrWoNUJAfVqE5wnnnatt3mWPPLiZChmzbdGJAP`
          );
          setPosts(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPosts();
    }, []);
    console.log(posts)

  
    if (posts.length === 0) {
      return <div>Loading posts...</div>;
    }
  return (
    <div>
       {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.message}</h1>
          <p>Created on: {post.created_time}</p>
          <img src={post.full_picture} alt="Post Image" /> 
           <a href={post.permalink_url}>Link to post</a>
        </div>
      ))}
    </div>
  )
}
