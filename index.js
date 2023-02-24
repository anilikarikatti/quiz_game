 function quizgame(){
    let questions= [
        {
            que:"MS-Word is an example of _____   ",
            a:"Application software",
            b:"A processing device",
            c:'An input device',
            d:'An operating system',
            ans:'a'
        },
        {
            que: "Ctrl, Shift and Alt are called .......... keys.",
            a:"alphanumeric",
            b:"function",
            c:'modifier',
            d:'adjustment',
            ans:'c'
        },
        {
            que: "A computer cannot 'boot' if it does not have the _____",
            a:"Compiler",
            b:"Loader",
            c:'Operating system',
            d:'Assembler',
            ans:'c'
        }
    ];

    
    let input = document.querySelectorAll('.txt');
    let question = document.querySelector('#que');
    let radio_buttons = document.querySelectorAll('.ans');

    
    let question_number  = 0;

    function print_question(i){
        let keys = Object.keys(questions[i])

        for(let key of keys){
           
            for(let inp of input){
                // console.log(inp);
                
                if(inp.id == key){
                   
                    if(inp.id == 'que'){
                        question.innerText = questions[i].que;
                        
                    }
                   
                    inp.value =questions[i][key];
                }
                
                
            }
        }
    }

    let user_answers =[];
    

    let buttons = document.querySelectorAll('button')

    // console.log(buttons);


    for(let button of buttons){
        button.onclick=btn_clicked;
        
    }


    function btn_clicked(e){
        console.log(e);

        let innerText_val = e.target.innerText;
        
        if(innerText_val == 'Next')
            next();
        else if(innerText_val == 'Previous')
            previous()
        else if(innerText_val == 'Submit')
            submit();
           
        
    }

    
    function next(){
        if(question_number < questions.length-1){
           
            question_number+=1;
            
                
                }
                
        else{
            alert("questions are completed please click submit button")
        }   


            for(let radio of radio_buttons){
                if(radio.checked){
                    user_answers.push(radio.value);
                    console.log(user_answers);
                    radio.checked = false;
                    
                }
                
            } 
            print_question(question_number);
            
             
    }

    function previous(){
        if(question_number > 0){
            question_number-=1;
            print_question(question_number);

            user_answers.pop();
             console.log(user_answers);

        }
    }

    function submit(){
        verify();
    }


    function verify(){

    let answers  = questions.map(elem => elem.ans);
   
    let correct_answers  = answers.filter((elem,index) => elem ==user_answers[index] )
    alert (`congratulations you answered only ${correct_answers.length}  out of ${answers.length}`)
    
    }
    

    function order(){
        print_question(question_number);

    }
  order()

}
window.onload = quizgame;