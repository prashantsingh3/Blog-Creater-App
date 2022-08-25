import './NewBlogs.css';
import {useState} from "react";


function NewBlogs(props) {
const[etitle, setTitle] = useState("")
const[edescription, setDescription] = useState("")


const submitHandler = (event) => {
    event.preventDefault();
    const blogData={
        title: etitle,
        description: edescription,
        
    }  ;
    props.onAddBlogHandler( blogData);
    console.log(blogData);
    setTitle('');
    setDescription('');
 
  };

    return (
      <div className="new-blog">
        

        <form onSubmit={submitHandler} >
      <div className="new-blog__controls">
        <div >
          <label>Title</label>
          <input type="text" value={etitle} onChange={(event)=>setTitle(event.target.value)} />
        </div>
        <div >
          <label>Description</label>
          <input
          id="txtbox"
            // style={{fontSize:"60pt" }}
            type="text"
            min="0.01"
            step="0.01"
          
         value={edescription} 
         onChange={(event)=>setDescription(event.target.value)}/>
        </div>
        
      </div>
      <div className="new-blog__actions">
        <button type="submit">Add New Blog</button>
      </div>
    </form>
        
      </div>
    );
  }
  
  export default NewBlogs;
  