import { React, useEffect, useState }  from "react";
import createClient from "../Client"; 
import { useParams } from "react-router-dom";

const PostDetail=() => {
    const[post, setPost] = useState([]);
    const { postId } = useParams();
    
   
    useEffect(() => {
        createClient.fetch(`*[_type == 'post' && _id == "${postId}"]{
            title,
            "caption": poster.caption,
            description,
            "imageUrl": poster.asset->url
        }`).then((data) => {
            
            setPost(data[0]);
        }).catch(console.error);
    }, [postId]);
    console.log(post);
    return (
       
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={post.imageUrl}></img>
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest">{post.caption}</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{post.title}</h1>
                    
                        <p class="leading-relaxed">{post.description}</p>
                    </div>
                </div>
            </div>
        </section>
        
    );
}
export default PostDetail;