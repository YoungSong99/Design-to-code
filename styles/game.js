
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
//     1 - 45
    const numbers = new Set();
    while (numbers.size < 6) {
        const num = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
        numbers.add(num)
    }

    const numbers_arr = Array.from(numbers)

    numbers_arr.forEach((num, idx) => {
        document.getElementById(`lotto_num${idx+1}`).innerText = num
    })
}
