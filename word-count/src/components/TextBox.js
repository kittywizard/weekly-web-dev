
function TextBox(){ 
    return (
        <div>
            <textarea id="wordCount" name="textbox" className="textarea" onKeyPress={findWordCount}>
            </textarea>        
        </div>
    )
}
let words = 0;
let keys = [];
const regex  = new RegExp('[a-z]');

function findWordCount(key) {
    keys.push(key.key); //pushing each press into an array so we can check it ?

    if(key.code === "Space") {
        console.log(keys[keys.length - 2]);

        if(regex.test(keys[keys.length - 2])) {
            
            //compare ^^ that to a regex expression that checks for :
                //letters, period, quotation marks etc
            //if it checks out, increment words
            words++;
            console.log(words)
            //update display
        }
        
    }
    

    
}

export default TextBox;
