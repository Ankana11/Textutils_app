import React, {useState} from 'react'

export default function Textform(props) {
  const handleup=()=>{
    
    let new_text= Text.toUpperCase()
    setText(new_text)
  }
  const handlereverse = () => {
    let rev_text = Text.split('').reverse().join('');
    setText(rev_text);
  }
  const handleremove = () => {
    let newstr = Text.replace(/(\n|\r)/g, '');
    setText(newstr);
  }
  const handleclear = () => {
    setText('');
  }
  
  const handleOnchange=(event)=>{
    setText(event.target.value)
  }
  const [Text, setText] = useState(" ");
  return (
<>
<div className='Container' style={{color:props.mode==="dark"?'white':'black'}}>
  <h1>{props.heading}</h1>   

  <div className="mb-3">
  <textarea className="form-control" value ={Text} onChange={handleOnchange} style={{backgroundColor:props.mode==="dark"?'#0D1072':'white' , color:props.mode==="dark"?'white':'black'}} id="exampleFormControlTextarea1"  rows="4"></textarea>
  </div>
  <button className="btn btn-primary my-3" onClick={handleup}>Uppercase</button>
  <button className="btn btn-primary mx-3" onClick={handlereverse}>Reverse Text</button>
  <button className="btn btn-primary mx-2" onClick={handleremove}>Line Remover</button>
  <button className="btn btn-primary mx-2" onClick={handleclear}>clear text</button>
</div>

<div className="Container" style={{color:props.mode==="dark"?'white':'black'}}>
<h1>Your Text Summary</h1>
  {Text && Text.trim() !== "" ? (
    <p>{Text.split(" ").length} word and {Text.length} character</p>
  ) : (
    <p>No text input provided</p>
  )}
</div> 
</> 
  )
}
