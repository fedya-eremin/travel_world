import prompt from "prompt-sync"

export class Event {
    constructor(text, choices) {
        this.text = text
        this.choices = choices
    }
    processChoice() {
        console.log(this.text)
        choices.forEach((elem) => {
            console.log(`${elem.letter}) ${elem.text}`)
        })
        const answer = prompt('Что ты выберешь?')
        choices[answer].produceResult()
        if (this.choices == []) {
            resultQueue.push('go')
            return
        }
    }
}



export class Choice {
    constructor(letter, text, result) {
        this.letter = letter 
        this.text = text
        this.result = result
    }
    produceResult() {
        resultQueue.push(this.result)
    }   
}
