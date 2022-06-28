 function quizgame(){
    let questions= [
        {
            que:"delhi is in which country ",
            a:"india",
            b:"dubai",
            c:'america',
            d:'canada',
            ans:'a'
        },
        {
            que: "washington is in which country",
            a:"india",
            b:"dubai",
            c:'america',
            d:'canada',
            ans:'c'
        },
        {
            que: "dharwad is in which country",
            a:"india",
            b:"dubai",
            c:'america',
            d:'canada',
            ans:'a'
        }
    ];


    let input = document.querySelectorAll('.txt');
    let question = document.querySelector('#que');
    let radio_buttons = document.querySelectorAll('.ans');

    
    let question_number  = 0;
    function print_question(i){

        
        let keys =Object.keys(questions[i]);
    
        for(let key of keys){

            for(let inp of input){
                // console.log(inp);
                if(inp.id == key){
                    // console.log(keys);
                
                    if(inp.id == 'que'){
                        question.innerText = questions[i].que;
                        // console.log(questions[i].que);
                        
                        
                    }
                    
                    // console.log(questions[i][key]);
                    
                    inp.value =questions[i][key];
                }
                
                
            }
        }
}

    print_question(question_number);


    let buttons = document.querySelectorAll('button')

    console.log(buttons);


    for(let button of buttons){
        button.onclick=next_previous;
        
    }

    function next_previous(e){
        console.log(e);

        let innerText_val = e.target.innerText;
        
        if(innerText_val == 'Next'){
            if(question_number < questions.length-1){
                let checked_key = check_answers(question_number);
                // console.log(correct_answers);
                
                // console.log(question_number,questions.length);
                
                question_number+=1;
                // console.log(checked_key);
                
                if(checked_key != undefined)
                     checked_key.checked=false;
                print_question(question_number);
                
            }
           
        }
        else if(innerText_val == 'Previous'){
            if(question_number > 0){
                
                // 
                
                question_number-=1;
               
                print_question(question_number);
               let a =  document.querySelector(checked_keys[question_number]);
                console.log(checked_keys[question_number]);
                
                for(let radio_btn of radio_buttons){

             
                let ans  =checked_keys[question_number]

                    if(ans === radio_btn.value)
                        radio_btn.checked = true;
                }   
                

            }
        }

        else if(innerText_val == "Submit"){
            let checked_key = check_answers(question_number);
            let conform_by_user  = confirm("sure");
            
            if(conform_by_user){
                let correct_answers = verify_answers();
                alert(` your score is ${correct_answers}`);

                quizgame();
               
            }
            
        }
        
        
        
    }


    
    let correct_answers = 0;
    var checked_keys = [];
    
    

    function check_answers(i){
        for(let radio_btn of radio_buttons){

            
            if(radio_btn.checked){
                
                checked_keys[i]=radio_btn.value;
                console.log(checked_keys);
                return radio_btn;
            }

            
        }
    }

    function verify_answers(){
        for(let  i =0 ; i < questions.length ;i++){
            if(checked_keys[i] == questions[i].ans)
                correct_answers+=1;
        }
        return correct_answers;
    }
   
    


  

}
window.onload = quizgame;