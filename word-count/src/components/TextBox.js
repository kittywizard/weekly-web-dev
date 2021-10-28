
function TextBox(){ 
    return (
        <div>
            <textarea id="wordCount" name="textbox" className="textarea">
            </textarea>        
        </div>
    )
}

const wordCount = document.getElementById('wordCount');
console.log(wordCount)
//wordCount.addEventListener('keypress', findWordCount);

function findWordCount() {
    //check each keypress for a space - return \.
    // preceded by either a letter, period, quotation, parathensis.. etc?
        //run further check on anything non-letter 
    
    console.log('key pressed')
}

export default TextBox;
