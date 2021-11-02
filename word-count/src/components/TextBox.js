
function TextBox(){ 
    return (
        <div>
            <textarea id="wordCount" name="textbox" className="textarea">
            </textarea>        
        </div>
    )
}
const wordCount = document.getElementById('wordCount');

wordCount.addEventListener('keydown', findWordCount);

function findWordCount(key) {
    //check each keypress for a space - return \.
    // preceded by either a letter, period, quotation, parathensis.. etc?
        //run further check on anything non-letter 
    
    console.log(key.code)
    
}

export default TextBox;
