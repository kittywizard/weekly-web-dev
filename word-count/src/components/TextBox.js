
function TextBox(){ 
    return (
        <div>
            <textarea id="wordCount" name="textbox" className="textarea" onKeyPress={findWordCount}>
            </textarea>        
        </div>
    )
}

function findWordCount(key) {
    //check each keypress for a space - return \.
    // preceded by either a letter, period, quotation, parathensis.. etc?
        //run further check on anything non-letter 
    
    console.log("testing" + key.code)
    
    
}

export default TextBox;
