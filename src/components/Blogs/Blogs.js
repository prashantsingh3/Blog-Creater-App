import "./Blogs.css"

function Blogs(props) {

    console.log(props.blog)
    
    

    return (
      <div >
       
        <div className="blog_clr">
            <h1>Today's Blog</h1>
        {props.blog.map((element,i)=><div key={i} className="each_blog">
            <h3  style={{color:"red"}}>{element.title}</h3>
            <p >{element.description}</p>

            <button className="button-7" onClick={()=>props.onDeleteBlogHandler(i)}>Delete This Blog</button>

        </div>)}  
         
        </div>
        
      </div>
    );
  }
  
  export default Blogs;
  