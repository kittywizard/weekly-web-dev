
function TextBox(){ 
    return (
        <div>
            <textarea id="wordCount" name="textbox" className="textarea" onKeyPress={findWordCount}>
            </textarea>        
        </div>
    )
}
let words = 0;
let letters = 0;
let keys = [];

function findWordCount(key) {
    keys.push(key.key); //pushing each press into an array so we can check it ?
    letters++;
    
    if(key.code === "Space") {
        
        //check to see what the preceding key was - see the array
    }
    words++;
    
    console.log(key.code + " " + words)

    
}

export default TextBox;
