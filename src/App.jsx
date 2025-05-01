
// import './App.css' 

import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Blogs from './components/blogs/blogs'


function App()  { 
const [bookmarked,setBookmarked] = useState([]);
const [readingCount, setReadingCount]=useState(0);

const handleBookMark = (blog) => {
  const newTime = readingCount + blog.reading_time ;
  setReadingCount(newTime);
  setBookmarked([...bookmarked,blog])
}

const handleMarkAsRead = (time,id) => {
 
 
//  console.log(id);
handleRemoveFromBookmark(id)

}

const handleRemoveFromBookmark = (id) =>{ 
  const remainingBookMark = bookmarked.filter((mark) => mark.id !== id);
  setBookmarked(remainingBookMark)
}


console.log(readingCount)

// console.log(bookmarked)
  // const handleBookMark = (blog) => {
  //   console.log(blog)
  // }

  
return ( 
    <>
      
    
      <Navbar></Navbar>
     
      <div className="main-container flex text-center ">
        <div className="left-container w-[70%]">
        
          <Blogs handleBookMark={handleBookMark} handleMarkAsRead= {handleMarkAsRead}></Blogs>
        </div>
        
        <div className="right-container w-[30%]  ">
          <h1>Saved Items: {readingCount}</h1> 
          <h1>Bookmarked count:{bookmarked.length} </h1>

          {
            bookmarked.map((marked) => <p key={marked.id} className='bg-red-600 p-2 shadow m-2 text-white'>{marked.title}</p>)
          }
        </div>
      </div>

    </>
  )
}

export default App 
