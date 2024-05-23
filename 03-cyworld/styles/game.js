
const word_game = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText

    let lastchar = word[word.length -1]
    let firstchar = myword[0]

    if (lastchar === firstchar) {
        document.getElementById("word_result").innerText = "That's right!"
        document.getElementById("word").innerText = myword.charAt(0).toUpperCase() + myword.slice(1)
        document.getElementById("myword").value = ""
    } else {
        console.log("else")
        document.getElementById("word_result").innerText = "Hmm..Are you sure?"
    }

}

const lotto = () => {

}
