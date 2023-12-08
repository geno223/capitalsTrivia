/* ***************
APP STATE
************* */

const state= {
    player1:0,
    player2:0,
    currentQuestion: {},
    which: true,
}

let questions= []

/* ***************
MAIN DOM ELEMENTS
************* */

const $question= $('#question')
const $a = $('#a')
const $b = $('#b')
const $c = $('#c')
const $d =$('#d')
const $p1score =$('#player1 h4')
const $p2score =$('#player2 h4')

console.log($p2score, $p1score)


//************
///FUNCTIONS*/
///******** */


const pickAnswer= (event, question)=>{
    console.log(event)
    if(event.target.innerText === question.answer){
        console.log(('correct'))
        if(state.which){
            state.player1++
            console.log(state)
            $p1score.text(state.player1)
            
        }else{
            state.player2++
            $p2score.text(state.player2)
            console.log(state)
        }
        setBoard(questions)

     }else{
        console.log('incorrect')
        setBoard(questions)
        state.which= !state.which
     }    function winCondition(){
        if($p1score === 11 ){
                alert("You Won")
                player1.winGame = true
            }
    } winCondition()

}


const setBoard = (q) => {
    //Getting arandom question
    const randomIndex = Math.floor(Math.random()* q.length)
    const randomQuestion = q[randomIndex]
    ///UPDATES QUESTION
    $question.text (randomQuestion.question)
    $a.text (randomQuestion.a)
    $b.text  (randomQuestion.b)
    $c.text  (randomQuestion.c)
    $d.text  (randomQuestion.d)
    //UPDATE PLAYER SCORE
    $p1score.text(state.player1)
    $p2score.text(state.player2)
    $('li').off()
    $('li').on('click', (event) => {
        pickAnswer(event, randomQuestion)
    })

}


// *******
// MAIN APPS LOGIC
// ********




const URL ="https://cdn.contentful.com/spaces/60c0fuf4kl9b/environments/master/entries?access_token=S11M-iSrZpsp6sdspPQrDEvQsiJo6unuIzJYNbkp3t0&content_type=triviaQ"
 $.ajax(URL)
 .then((data) => {
    questions = data.items.map((q) => q.fields)
     console.log(data)
     console.log(questions)

     setBoard(questions)
 })
