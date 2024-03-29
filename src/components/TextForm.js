import React, {useState} from 'react' //importing useState hook 

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleNewClick = () => { //alternating text
    let newText = "";
    for(let i=0; i<text.length; i++){
      if(text[i] === text[i].toUpperCase()){
        newText += text[i].toLowerCase();
      } else {
        newText += text[i].toUpperCase();
      }
    }
    setText(newText);
  }

  const handleClearClick = () => { // clears the text
    let newText = "";
    setText(newText);
  }

  const handleCopy = () => { //copies text to clipboard
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
// Defined a state variable called 'text' and a function to update it, 'setText'
  const [text, setText] = useState('');   //text and setText initialised by useState hook
  // text = "new text"; //wrong way to change state
  // setText("new text");//correct way to change state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleNewClick}>Alternating Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes required to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter the text in the textbox above to preview it"}</p>
    </div>
    </>
  )
}
//onChange necessary to be able to type in the textarea
