import promptSync from "prompt-sync";

const prompt = promptSync();

const NO_CHOICES_COMMAND = "go";

export class Event {
  constructor(text, choices, autoCommand = null, story_moment=null) {
    this.text = text;
    this.choices = choices;
    this.autoCommand = autoCommand;
    this.story_moment = story_moment
  }
  processChoice() {
    console.log(this.text);
    this.choices.forEach((elem) => {
      console.log(`${elem.letter}) ${elem.text}`);
    });
    if (this.choices.length === 0) {
      this.printStoryMoment()
      if (this.autoCommand !== null) {
        return this.autoCommand;
      }
      return NO_CHOICES_COMMAND;
    }
    const answer = prompt("Что ты выберешь? ");
    let command = this.choices.filter((e) => e.letter === answer)[0].result;
    this.printStoryMoment()
    return command;
  }
  printStoryMoment() {
    if (this.story_moment !== null) {
      console.log(this.story_moment)
    }
  }
}

export class Choice {
  constructor(letter, text, result) {
    this.letter = letter;
    this.text = text;
    this.result = result;
  }
}
