export const database = {
  faqQuestions: [
    {
      title: "What About Matthew 28:19?",
      content: `Matthew 28:19 is very Popular among the certain Christian denominations. 
      It was originally read and declared among the early Church to be representing Jesus and Him Only. 
      Thought the Years it has become misinterpreted, emphasizing the Title, when in Fact, the Very Name was 
      the Emphasis. There is One singular name, and throughout scripture Jesus Himself points to be the encapsilation 
      over every Title.
      `
    },
    {
      title: "what about 1 John 5: 7-8?",
      content: `We see the titles that state These Three are "one". If we read further down it mentions Spirit, Water, and Blood,
      and those three "agree" in one. There is a stark difference in "agreeing" in one, and truly "being" one. For their to be a seperation 
      of Father, Son, and Spirit, there would have to be an "agreeing", for example, If there was three distinct persons, the Son would have 
      to submit Himself to the Father in the garden of gathsemedy. This would prove an "agreeing" not a oneness in the sense in which we would speak of God.
      God is One, the Father, Word, and Spirit, are the separate manifestation of that One God.`
    },
  ]
}

export const getFaqQuestions = () => {
  return structuredClone(database.faqQuestions)
}