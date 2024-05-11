const appTests = (id) => {
    const app = document.getElementById(id)
    
    const wrapper = document.createElement("section")
    wrapper.setAttribute("class", "tests");
    app.append(wrapper);

    let script = document.createElement("script")
    script.src = "testsTopics.js"
    document.head.appendChild(script);

    script.onload = function () {
        const renderMainPage = () => {
            wrapper.innerHTML = `
                    <p class="mainHeading">Выберите тему теста:</p>
                `
    
            Object.entries(testsTopics).map(([code, topic]) => { 
                wrapper.insertAdjacentHTML('beforeend', `   
                    <div>
                        <button data-topic="${code}" class="basicButton">
                            ${topic.title}
                        </button>
                    </div>
                `)
                const topicButtons = wrapper.querySelectorAll('button')

                for (const button of topicButtons) {
                    const topic = testsTopics[button.dataset.topic]
                    button.onclick = () => { 
                        shuffledQuestions = topic.questions.sort(() => Math.random() - 0.5)
                        renderTopic(topic, shuffledQuestions)
                    }
                }
            })
        }   
    
        renderMainPage()

        const renderTopic = (topic, shuffledQuestions) => {
            let currentQuestion = 0
            let correctAnswers = 0
    
            wrapper.innerHTML = `
                <p class="mainHeading">${topic.title}</p>
                <div class="question"></div>
            `
    
            const questionContainer = wrapper.querySelector('.question')
            
            const renderQuestion = () => {
                if (currentQuestion === shuffledQuestions.length) {
                    renderResult(topic, correctAnswers)
                    return
                }
                
                const question = shuffledQuestions[currentQuestion]
    
                const answers = question.answers.map((ans) => {
                    return `
                        <div class="answerText">
                            <label>
                                <input type="radio" name="q${currentQuestion}" data-correct="${ans.isCorrect}">
                                ${ans.text}
                            </label>
                        </div>
                    `
                }).join('')
    
                if (currentQuestion == shuffledQuestions.length - 1) {
                    questionContainer.innerHTML = `
                    <p class="progressText">Остался ${shuffledQuestions.length - currentQuestion} вопрос из ${shuffledQuestions.length}</p>`
                } else if (currentQuestion == shuffledQuestions.length - 2 || currentQuestion == shuffledQuestions.length - 3 || currentQuestion == shuffledQuestions.length - 4) {
                    questionContainer.innerHTML = `
                    <p class="progressText">Осталось ${shuffledQuestions.length - currentQuestion} вопроса из ${shuffledQuestions.length}</p>`
                } else {
                    questionContainer.innerHTML = `
                        <p class="progressText">Осталось ${shuffledQuestions.length - currentQuestion} вопросов из ${shuffledQuestions.length}</p>
                    `
                }

                questionContainer.insertAdjacentHTML('beforeEnd',`
                        <p class="questionText">${question.text}</p>
                        ${answers}
                        <div>
                            <button class="checkBtn">Проверить</button>
                            <button class="nextBtn">Далее</button>
                        </div>
                    `)
    
                const checkBtn = questionContainer.querySelector('.checkBtn')
                const nextBtn = questionContainer.querySelector('.nextBtn')
                nextBtn.style.display = 'none'
                checkBtn.disabled = true 
                questionContainer.onchange = () => {
                    checkBtn.disabled = false
                }
    
                checkBtn.onclick = () => {
                    const selected = questionContainer.querySelector('input:checked')
                    const wrapperAns = selected.closest('div')
    
                    if (selected.dataset.correct === 'true') {
                        wrapperAns.setAttribute("class", "correctAns");
                        correctAnswers++
                    } else {
                        wrapperAns.setAttribute("class", "wrongAns");
                        const correctWrapper = questionContainer.querySelector('input[data-correct="true"]').closest('div')
                        correctWrapper.setAttribute("class", "correctAns");
                    }
                    
                    checkBtn.style.display = 'none'
                    nextBtn.style.display = ''
                }

                nextBtn.onclick = () => {
                    currentQuestion++
                    renderQuestion()
                }
            }
    
            const renderResult = (topic, correctAnswers) => {
                wrapper.innerHTML = `
                    <p class="mainHeading">Результат по тесту "${topic.title}"</p>
                    <div>
                        <p class="textEnd">Вы ответили правильно на ${correctAnswers} 
							из ${shuffledQuestions.length} вопросов.</p>
                    </div>
                    <div class="progressBarContainer">
                        <div class="progressBar">0%</div>
                    </div>
                    <div>
                        <br><button class="basicButton">Выбрать другую тему теста</button>
                    </div>
                `
                let percentageResult = correctAnswers / shuffledQuestions.length * 100

                let progressBar = wrapper.querySelector('.progressBar')
                let idProgressBar = setInterval(progress, 40)
                let width = 0

                if (percentageResult == 100) {
                    width = 1
                }

                function progress() {
                    if (width >= percentageResult) {
                        clearInterval(idProgressBar)
                    } else {
                        width++
                        progressBar.style.width = width + "%"
                        progressBar.innerHTML = width * 1 + "%"
                    }
                }

                const returnMainPage = wrapper.querySelector('.basicButton')
                returnMainPage.onclick = () => {
                    renderMainPage()
                }
            }
    
            renderQuestion()
        }
    }
}