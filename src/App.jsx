import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";

import photo1 from "./assets/photo1.jpeg";
import photo2 from "./assets/photo2.jpeg";
import photo3 from "./assets/photo3.jpeg";
import photo4 from "./assets/photo4.jpeg";
import BTS from "./assets/BTS.png";
import letter from "./assets/letters.png";
import birthdayVideo from "./assets/birthday.mp4";
import cake from "./assets/Cake.mp4";


function App() {

const [page,setPage] = useState(1);
const [blown,setBlown] = useState(false);
const [code,setCode] = useState("");
const [wish,setWish] = useState("");
const [count,setCount] = useState("");
const [showNext,setShowNext] = useState(false);


function blow(){


let number = 3;


const timer = setInterval(()=>{


setCount(number);


number--;


if(number < 0){


clearInterval(timer);


setCount("✨");


setBlown(true);



confetti({

particleCount:150,

spread:120,

shapes:["heart"],

colors:["#9b59ff","#ff69b4","#ffffff"]


});



setShowNext(true);


}


},1000);



}


function next(){

setPage(page+1);

}



return (

<div className="app">


{page===1 &&


<div className="birthday">



{/* TOP PHOTO MARQUEE */}

<div className="photo-marquee top">


<div className="photo-track">


<img src={photo1}/>

<img src={photo2}/>

<img src={photo3}/>

<img src={photo4}/>

<img src={photo1}/>

<img src={photo2}/>

<img src={photo3}/>

<img src={photo4}/>
</div>


</div>





{/* CENTER CONTENT */}


<div className="birthday-text">


<h1>
Happy Birthday 
</h1>


<p>
Wishing you endless happiness 💜✨
</p>


<div className="hearts">

💗 💗 💗

</div>



<button onClick={next}>

Next

</button>


</div>






{/* BOTTOM PHOTO MARQUEE */}


<div className="photo-marquee bottom">


<div className="photo-track reverse">


<img src={photo1}/>

<img src={photo2}/>

<img src={photo3}/>

<img src={photo4}/>

<img src={photo1}/>

<img src={photo2}/>

<img src={photo3}/>

<img src={photo4}/>

</div>


</div>



</div>

}



{page===2 &&


<div className="cakePage">


<div className="stars">

✨ ⭐ ✨ ⭐ ✨ ⭐

</div>



<h2>

{blown ? "Your wish is flying to HANGUK 💜" : "MAKE A WISH 🎂"}

</h2>




{
!blown &&

<input

className="wishBox"

placeholder="Write your wish ✨"

value={wish}

onChange={(e)=>setWish(e.target.value)}

/>

}




<div className="cakeBox">


<video

autoPlay

loop

muted

className="cake"


>


<source src={cake}/>


</video>




{
count &&

<div className="count">

{count}

</div>

}




{
blown &&

<div className="smoke">

✨ 💜 ✨

</div>

}



</div>





{
!blown &&


<button onClick={blow}>

Blow 

</button>


}





{
showNext &&


<button onClick={next}>

Next 💜

</button>


}



</div>

}



{page===3 &&

<div className="access">


<div className="lock">

🔒

</div>


<div className="popup">


<h2>
SECRET SURPRISE 💜
</h2>


<h3>
You Have No Access Here
</h3>


<p>
Checking your ARMY ID...
</p>


<div className="loading">

████████ 100%

</div>


<button onClick={next}>

Okay 💜

</button>


</div>



<img

src={BTS}

className="bts"

/>



</div>

}





{page===4 &&


<div className="password">


<div className="memory-hearts">

💜 💜 💜

</div>



<h1>

✨ A Little Memory Question ✨

</h1>



<p className="memory-text">


7 hearts...<br/>

One country...<br/>

One special day...<br/><br/>


Can you remember? 💜


</p>



<div className="small-hearts">

💜 💜 💜


</div>




<input

value={code}

onChange={(e)=>setCode(e.target.value)}

placeholder="Enter the answer"

/>





<button

onClick={()=>{


if(code==="613")

next();


else

alert("Try again 💜")


}}

>


UNLOCK 💜


</button>



</div>


}

{page===5 &&


<div className="letter">


<div className="floating-hearts">

💜 ✨ ❤️ ✨ 💜 ✨ ❤️ ✨ 💜


</div>



<div className="letter-reveal">



<h2>

💌 A Special Message For You

</h2>



<p className="open-text">

A little surprise made with love ✨

</p>




<img

src={letter}

className="letterImg"

/>



<button onClick={next}>

Next 💜

</button>



</div>



</div>


}




{page===6 &&


<div className="videoPage">


<div className="final-hearts">

💜 ✨ ❤️ ✨ 💜 ✨ ❤️ ✨ 💜

</div>



<h1>

✨ SURPRISE UNLOCKED ✨

</h1>



<h2>

Happy Birthday ARMY 💜

</h2>



<p className="final-text">

A special message is waiting for you...

</p>




<div className="video-box">


<video

controls

className="video"

>


<source

src={birthdayVideo}

/>


</video>


</div>




<h3>

ARMY FOREVER 💜✨

</h3>



</div>


}



</div>


)

}


export default App;