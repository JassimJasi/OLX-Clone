import React,{useContext} from 'react'
import "./dynamicPosts.css"
import {AllPostContext} from "../../Store/AllPostContext" ;
import {Link} from "react-router-dom";
import PostCards from '../PostCards/PostCards';

function DynamicPosts({category}) {
    
    const {allPost}=useContext(AllPostContext)
    console.log(allPost);
    let displayCards=allPost.filter((post)=>post.category===category).map((product,index)=>{return(
      <PostCards product={product} index={index} key={index} />
      )});
    console.log('card',displayCards);
      
    
    return (<>
     { category!=="null" && <div>
            <div className="moreView">
        <div className="heading">
          <span>{category}</span>
         <Link to="./viewmore"> <span>View more</span> </Link>
        </div> 
        <div className="cards">{displayCards}</div>
      </div>
        </div> } 
        </>
   )
}

export default DynamicPosts
