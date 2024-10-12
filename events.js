import prompt from "prompt-sync"

export class Event {
    constructor(text, choices) {
        this.text = text
        this.choices = choices
    }
    processChoice() {
        console.log(this.text)
        const answer = prompt('Что ты выберешь?')
        console.log(choices[answer].produceresult())
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
    produceresult() {
        resultQueue.push(this.result)
    }   
}
