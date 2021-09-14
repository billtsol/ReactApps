import './../css/QuizApp.css';
import React, { useEffect,useState} from 'react';

const QuizApp = () => {
    const Questions=[
        {},
        {
            "question" : "A water lily doubles in size every day. On the 30th day, the whole swamp is filled. Which day did its size cover half the swamp?",
            "answer":[0,"15th","29th","10th","25th"],
            "correct": 2
        },
        {
            "question" : "Who is ceo of tesla?",
            "answer": [0,"Jeff Bezos","Bill Gates","Donald Trump","Elon Musk"],
            "correct": 4
        },
        {
            "question" : "In a website browser address bar, what does “www” stand for?",
            "answer": [0,"World Wide Web","World Wrong Woman","Wired/Wireless netWork","World Wireless Webcams"],
            "correct": 1
        },
        {
            "question" : "Which country consumes the most chocolate per capita?",
            "answer": [0,"Germany","Switzerland","Greece","Italy"
            ],
            "correct": 2 
        },
        {
            "question" : "How many ribs are in a human body?",
            "answer": [0,"24","20","10","14"],
            "correct": 1
        },
        {
            "question" : "Which planet is the hottest in the solar system?",
            "answer": [0,"marcury","Earth","Mars","Venus"],
            "correct": 4
        },
        {
            "question" : "Water has a pH level of around?",
            "answer": [0,"5","7","9","4.5"],
            "correct": 2
        },
        {
            "question" : "Who invented scissors?",
            "answer": [0,"Vincent van Gogh","Pablo Picasso","Leonardo da Vinci","Steve jobs"],
            "correct": 3
        },
        {
            "question" : "What has a gravitational pull so strong that even light cannot escape it?.",
            "answer": [0,"Supernova","Red Giant","White Dwarf","Black Hole"],
            "correct": 4
        },
        {
            "question" : "Ken Thompson and Dennis Ritchie co-created which operating system?",
            "answer": [0,"Mac OS","Android","Windows","Unix"],
            "correct": 4
        },
        {
            "question" : "Who was the first person to suggest Daylight Savings Times?",
            "answer": [0,"Frank Sinatra","Benjamin Franklin","Thomas Jefferson","Nikola Tesla"],
            "correct": 2
        },
        {
            "question" : "In regards to data storage, what does the acronym SSD stand for?",
            "answer": [0,"Super Speed Drive","Spaghetti Salat Donut","Solid State Drive","Soft State Drive"],
            "correct": 3
        },
        {
            "question" : "Bobby Fischer is considered to be the greatest player of all time in which game?",
            "answer": [0,"GO","Chess","Mario","Pacman"],
            "correct": 2
        },
        {
            "question" : "How many teeth does a human have?",
            "answer": [0,"32","29","27","40"],
            "correct": 1
        },
        {
            "question" : "When was the first time humans landed on the moon?",
            "answer": [0,"1995","2000","1945","1969"],
            "correct": 4
        }
    ]

    const [isLoading , setIsLoading] = useState(true)
    const [Choice , setChoice] = useState([0])
    let QuestionIndex =1;
    let answer =false;
    let answerIndex =0;
    let score = 0;
    useEffect(() => {
        const interval = setInterval(()=>{
            if(QuestionIndex<16 && isLoading){
                document.querySelector('.Quiz-question-span').innerText = `${QuestionIndex}/15`
                document.querySelector('.Quiz-question-p').innerText = ` ${Questions[QuestionIndex].question}` 
                document.querySelector('.Quiz-btn1').innerText = `${Questions[QuestionIndex].answer[1]}`
                document.querySelector('.Quiz-btn2').innerText = `${Questions[QuestionIndex].answer[2]}`
                document.querySelector('.Quiz-btn3').innerText = `${Questions[QuestionIndex].answer[3]}`
                document.querySelector('.Quiz-btn4').innerText = `${Questions[QuestionIndex].answer[4]}`
                if(answer){
                    if(answerIndex===Questions[QuestionIndex].correct){
                        score=score+1;
                    }
                    let array = Choice;
                    array.push(answerIndex);
                    setChoice(array);
                    
                    QuestionIndex+=1;
                    answer=false;
                    if(QuestionIndex===16 && isLoading){    
                        setIsLoading(false);
                        const res = parseInt(score*100/15);
                        document.querySelector('.Quiz-result-p').innerText = `Score: ${res}%`;     
                    }
                }
            }
        },1);
        return () => clearInterval(interval);
    }, []);

    const runCallback=(cb)=>{return cb();};
    return(
    <div id='Quiz-body'>
        <a href="." class="btn btn-info Mybtn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
            Back
        </a>

        <div className="Quiz-header"><h1 className="Quiz-h1">Quiz App</h1></div>
        {isLoading ?(
            <div className="Quiz-desk">
                <div className="Quiz-question">
                    <p className="Quiz-question-p"></p>
                    <span className="Quiz-question-span"></span>
                </div>

                <div className="Quiz-answer">
                    <button className='Quiz-btn Quiz-btn1' onClick={()=>{answer=true;answerIndex=1;}}></button>
                    <button className='Quiz-btn Quiz-btn2' onClick={()=>{answer=true;answerIndex=2;}}></button>
                    <button className='Quiz-btn Quiz-btn3' onClick={()=>{answer=true;answerIndex=3;}}></button>
                    <button className='Quiz-btn Quiz-btn4' onClick={()=>{answer=true;answerIndex=4;}}></button>
                </div>
            </div>):(<>
            <div className="Quiz-desk">
                <div className='Quiz-result'>
                    <p className='Quiz-result-p'></p>
                    <i className='Quiz-result-message'></i>
                </div>
            </div>

            {runCallback(() => {
                const row = [];
                for (var i=1;i<Questions.length;i++){
                    let nameclass1 = 'Quiz-result-btn Quiz-btn1 ';
                    if(Questions[i].correct===1){
                        nameclass1= nameclass1+' Quiz-result-btn-correct';
                    }else if(Choice[i]===1){
                        nameclass1= nameclass1+' Quiz-result-btn-wrong';
                    }
                    let nameclass2 = 'Quiz-result-btn Quiz-btn2 ';
                    if(Questions[i].correct===2){
                        nameclass2= nameclass2+' Quiz-result-btn-correct';
                    }else if(Choice[i]===2){
                        nameclass2= nameclass2+' Quiz-result-btn-wrong';
                    }
                    let nameclass3 = 'Quiz-result-btn Quiz-btn3 ';
                    if(Questions[i].correct===3){
                        nameclass3= nameclass3+' Quiz-result-btn-correct';
                    }else if(Choice[i]===3){
                        nameclass3= nameclass3+' Quiz-result-btn-wrong';
                    }
                    let nameclass4 = 'Quiz-result-btn Quiz-btn4 ';
                    if(Questions[i].correct===4){
                        nameclass4= nameclass4+' Quiz-result-btn-correct';
                    }else if(Choice[i]===4){
                        nameclass4= nameclass4+' Quiz-result-btn-wrong';
                    }
                    row.push(
                    <div className='Quiz-result-desk' key={i}>
                        <div className='Quiz-question'>
                            <p className='Quiz-question-p'>{Questions[i].question}</p>
                            <span className='Quiz-result-question-span'>{i}/15</span>
                        </div>
                        <div className='Quiz-answer'>
                            <button className={nameclass1}>{Questions[i].answer[1]}</button>
                            
                            <button className={nameclass2}>{Questions[i].answer[2]}</button>

                            <button className={nameclass3}>{Questions[i].answer[3]}</button>
                            
                            <button className={nameclass4}>{Questions[i].answer[4]}</button>
                        </div>
                    </div>);
                }
                return row;
            })}
        </>)}
    </div>)
}
export default QuizApp