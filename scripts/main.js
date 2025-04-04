 import { getFaqQuestions } from "./database.js"
 const questions = getFaqQuestions()
 
 const updateSections = (updates) => {
  const sections = document.querySelectorAll('.faq-section')

  sections.forEach((section, i) => {
    if (updates[i]) {
      section.querySelector('h1').textContent = updates[i].title
      section.querySelector('p').textContent = updates[i].content
    }
  })
}
const questionsHTML = updateSections(questions)

const sectionContainer = document.querySelectorAll('.faq-section')
sectionContainer.innerHTML = questionsHTML