
import './App.css';
import Blogs from './components/Blogs/Blogs';
import NewBlogs from './components/NewBlogs/NewBlogs';
import {useState} from 'react'

function App() {

  let DUMMY_DATA = [{
    
    title:"Entrepreneurship - Types of Entrepreneurship",
    description: "Entrepreneurship is the creation or extraction of economic value. With this definition, entrepreneurship is viewed as change, generally entailing risk beyond what is normally encountered in starting a business, which may include other values than simply economic The road to entrepreneurship is often a treacherous one filled with unexpected detours, roadblocks and dead ends. There are lots of sleepless nights, plans that don’t work out, funding that doesn’t come through and customers that never materialize. It can be so challenging to launch a business that it may make you wonder why anyone willingly sets out on such a path. ",
    

},
{
   
    title:"The Impact of Software Engineers in the Society",
    description: "A life without Google, Facebook, Windows, Amazon, and smartphones—this is a world that seems almost unthinkable today. Technology has transformed society, but how much have software engineers contributed to that?In a few decades, the abilities of computers and the benefits they bring to society have more than just doubled. Keep reading this article to understand the role software engineers play in this technological and societal advancement."

},
{
    
    title:"What is Data Science?",
    description: "A data scientist's duties can include developing strategies for analyzing data, preparing data for analysis, exploring, analyzing, and visualizing data, building models with data using programming languages, such as Python and R, and deploying models into applications.Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge and insights from noisy, structured and unstructured data, and apply knowledge from data across a broad range of application domains.Already, demand is high, salaries are competitive, and the perks are numerous – which is why Data Scientist has been called “the most promising career” by LinkedIn and the “best job in America” by Glassdoor.",
    

},
{
    id: 'e4',
    title:"How the Internet Has Changed Everyday Life",
    description: "The Internet has turned our existence upside down. It has revolutionized communications, to the extent that it is now our preferred medium of everyday communication. In almost everything we do, we use the Internet. Ordering a pizza, buying a television, sharing a moment with a friend, sending a picture over instant messaging. Before the Internet, if you wanted to keep up with the news, you had to walk down to the newsstand when it opened in the morning and buy a local edition reporting what had happened the previous day. But today a click or two is enough to read your local paper and any news source from anywhere in the world, updated up to the minute.",
    

}];


const [blogs,setBlogs] = useState( DUMMY_DATA);


const addBlogHandler = (oneBlog)=>{
  const updatedBlog=[oneBlog, ...blogs];
  setBlogs(updatedBlog);
};

const deleteBlogHandler = (index)=>{
  const newArr = blogs;
 const newArrSecond = newArr.filter((element, i)=> i!== index)

 setBlogs(newArrSecond)



};


  return (
    <div className="App">
      <h1>Blog Creater App</h1>
      <NewBlogs onAddBlogHandler={addBlogHandler}/>
      <Blogs onDeleteBlogHandler={deleteBlogHandler}  blog={blogs}/>
    </div>
  );
}

export default App;
