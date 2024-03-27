import React from "react";
import { useEffect, useState } from "react";
import createClient from "../Client";
import Carousel from "../components/Slider";


const staicSlider = [
    "title 1",
    "title 2",
    "title 3",
    "title 4",
    "title 5",
    "title 6",
    "title 7"
]


export default function Home(){
    const[postData, setPost] = useState(null);

    useEffect(() => {
        console.log('post');
        createClient.fetch(`*[_type == 'post']{
            title,
            _id,
            'imageUrl': poster.asset->url,
            poster,
            _ref
        }`).then((data) => setPost(data))
        .catch(console.error);
    },[])

    const handleChange = (e, index) =>{
        const updatePost = [...postData];
        updatePost[index].title = e.target.value;
        setPost(updatePost);
    }
    const handleSendToSanity = async (id, updatedTitle) => {
        try {
            // Send data to Sanity
            await createClient
            .patch(id)
            .set({ title: updatedTitle })
            .commit();
          console.log('Data sent to Sanity successfully');
          // Optionally, reset form fields or show success message
        } catch (error) {
          console.error('Error sending data to Sanity:', error.message);
        }
      };

    return (
        <div>
            <div className="titleBar"><h1>Home</h1></div>
            {/* <div className="pad-35-25"><Carousel items={postData ? postData.map(post => post.title) : []} /></div> */}
            {/* <div className="pad-35-25"><Carousel items={staicSlider} /></div> */}
            <div className="pad-35-25"><Carousel /></div> 
            {/* {Array.isArray(postData) && postData.map((post, index) => (
                <div key={index}>
                    <h1>{post.title}</h1>
                    <input type="text" value={post.title} onChange={(e) =>handleChange(e, index)}></input>
                    <button onClick={(e)=>handleSendToSanity(post._id, post.title)}>Send to Sanity</button>
                </div>
                
            ) )} */}
           
             
         
        </div>
        
    );
}