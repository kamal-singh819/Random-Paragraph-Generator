const input = document.getElementById("numOfWords");
const container = document.querySelector(".container");

//generate a random word of length 'n'
const generateWord = (n) =>{
    let word = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for(let i=0; i<n; i++){
        const randomIndex =  (Math.random()*51).toFixed(0);
        word += letters[randomIndex];
    }
    return word;
};

//now generate para of given input words
const generatePara = () =>{
    const numberOfWords = Number(input.value);

    let data = "";
    for(let i=0; i<numberOfWords; i++){
        const randomNumber = (Math.random()*15).toFixed(0);
        data += generateWord(randomNumber);
        data += " ";
    }
    const para = document.createElement("p"); //create a paragraph tag
    para.innerText = data; //inner text is changed

    para.setAttribute("class", "paras");
    container.append(para);
};