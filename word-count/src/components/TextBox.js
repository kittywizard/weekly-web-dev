
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
const regex  = new RegExp('[a-z]|[A-Z]|\.|"|'); //update with all parameters at some point 

function findWordCount(key) {
    keys.push(key.key); //pushing each press into an array so we can check it ?

    if(key.code === "Space") {
        if(regex.test(keys[keys.length - 2]) && (keys[keys.length - 2] !== " ")) {
            //compare ^^ that to a regex expression that checks for :
                //letters, period, quotation marks etc
                //need to make sure its not just another space, currently not working with the above ^^
            words++;
            console.log(words);
            //update display
            const display = document.getElementById('words');
            display.textContent = words;
            //delete the array and start over.
            keys = [];
        }
        
    }
    

    
}

export default TextBox;
