
import React, {useState} from 'react'



export default function TextForm(props) {
   const [capitalLettersCount, setCapitalLettersCount] = useState(0);
   const [LowerLettersCount, setLowerLettersCount] = useState(0);

    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked: " + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to uppercase..!", "success");
    }
    const handleOnChange = (event)=>{
      // console.log("On change");
      setText(event.target.value);
    }

    const handleLowerClick = () =>{
      let lower_text = text.toLowerCase();
      setText(lower_text);
      props.showAlert("Converted to Lowecase..!", "success")
    }

    const handleClearClick = () =>{
      setText('');
      setCapitalLettersCount(0); // Clear capital letters count when clearing text
      setLowerLettersCount(0);
      props.showAlert("Text Cleared..!", "success");
    }

    const handleCountCapitalLetters = () => {
      const capitalLettersRegex = /[A-Z]/g;
      const capitalLetters = text.match(capitalLettersRegex) || [];
      setCapitalLettersCount(capitalLetters.length)
      props.showAlert(`Find out total number of Uppercase is: ${capitalLetters.length}`, "success");
    };

    const handleCountLowerLetters = ()=>{
      const LowerLetterRegex = /[a-z]/g;
      const LowerLetters = text.match(LowerLetterRegex) || [];
      setLowerLettersCount(LowerLetters.length);
      props.showAlert(`Find out total number of Lowercase is: ${LowerLetters.length}`, "success");
    }

    const Lorem =() =>{
        let LoremValue92 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero debitis dolores aliquam voluptatibus impedit animi, earum eos ipsa aperiam sapiente quidem nam itaque molestias aliquid pariatur eligendi explicabo similique totam quia porro blanditiis eum commodi. Cupiditate deleniti ab asperiores vitae unde inventore ullam! Magni error asperiores exercitationem praesentium placeat voluptate rerum voluptatum saepe laboriosam, enim distinctio, provident voluptatibus sapiente molestias esse? Nostrum quam distinctio laboriosam optio molestias eos corrupti veritatis suscipit aliquam nihil iste doloribus, ducimus, enim hic ullam ex amet dolorem. Assumenda blanditiis amet doloremque ab impedit magni nam at pariatur.";
        setText(LoremValue92);
        props.showAlert("Generated 92 random words", "success");
    }


    const [text, setText] = useState(''); //very important
//    text = "new text"; //wrong way to set the texts
//   setText = "New text";//correct way to set the texts
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Enter Some Texts</label> */}
        <textarea className="form-control" onChange={handleOnChange}  value={text} id="myBox" rows="8" placeholder='Enter your text here..' style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={Lorem}>Lorem92</button> 
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button> 
        <button className="btn btn-primary mx-2" onClick={handleLowerClick} >Convert to Lowercase</button> 
        <button className="btn btn-primary mx-2" onClick={handleClearClick} >Clear</button> 
        <button className="btn btn-primary mx-2" onClick={handleCountCapitalLetters}> Count Capital Letters </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCountLowerLetters}> Count Lower Letters </button>

    </div>
    <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p> {text.split(" ").length-1} words, {text.length} character</p>
      {/* <p> {text.split(" ").length<=1?0:text.split(" ").length} words, {text.length} character</p> */}
      <p>{0.008 * text.split(" ").length} Minutes takes to read</p>
      <p>Total Capital Letters: {capitalLettersCount}</p>
      <p>Total Lower Letters: {LowerLettersCount}</p>
      <h2>Preview:</h2>
      <p>{text.length>0?text:"Enter Something in the textbook above to Preview it here.."}</p>
    </div>

    </>
  )

}





