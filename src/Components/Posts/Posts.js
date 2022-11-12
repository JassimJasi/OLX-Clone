import React,{useState,useEffect,useContext} from 'react';
import {useHistory} from 'react-router-dom'
import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostContext';
import {AllPostContext} from '../../Store/AllPostContext'
import './Post.css';

function Posts({product,index}) {
const {firebase} = useContext(FirebaseContext)
const [products,setProducts] = useState([])
const history = useHistory()
const {setPostDetails} = useContext(PostContext)
const { setAllPost} = useContext(AllPostContext)

useEffect(()=>{
  firebase.firestore().collection('products').get().then((snapshot)=>{
    let allPost = snapshot.docs.map((product)=>{
      return {
        ...product.data(),
        id:product.id,
      }
    })
    
    setProducts(allPost);
    setAllPost(allPost);
  })
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [setAllPost])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map(product=>{

          return <div className="card" onClick={()=>{
            setPostDetails(product)
            history.push('/view')
          }}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAt}</span>
            </div>
          </div>
          })
            
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
        {products.map(product=>{

          
          return <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              <span className="kilometer">{product.category}</span>
              <p className="name"> {product.name}</p>
            </div>
            <div className="date">
              <span>{product.createdAT}</span>
            </div>
          </div>
      })

        }
        </div>
      </div>
    </div>
  );
}

export default Posts;
