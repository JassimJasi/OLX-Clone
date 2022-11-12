import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../Store/Context';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const history = useHistory()
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)
  const date = new Date()
  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId:user.uid,
          createdAt:date.toDateString()
        })
        alert('Product add')
        history.push('/')
      })
    })
  }
  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="fname"
            name="Name"
            defaultValue="John"
          />
          <br />
        <label>Category:</label>
        <br/>
        <select
          name="Category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="input" id="fname"
        > <option >Select Category</option>
         <option value="Cars">Cars</option>
              <option value="Motorcycle">Motorcycle</option>
              <option value="Mobile Phones">Mobile Phone</option>
              <option value="For Sale:Houses & Apartments">For Sale:Houses & Apartments</option>
              <option value="Scooters">Scooters</option>
              <option value="Commercial & Other Vehicles">Commercial & Other Vehicles</option>
              <option value="For Rent:Houses & Apartments">For Rent:Houses & Apartments</option>
        </select>
        <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input className="input"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="fname"
            name="Price" />
          <br />
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : ""}></img>
          <br />
          <input onChange={(e) => {
            setImage(e.target.files[0])
          }} type="file" />
          <br />
          <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
