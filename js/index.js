
    alert('Hey! Let\'s solve a quadratic equation');
    
    const a = parseFloat(prompt('Enter number A'));
    const b = parseFloat(prompt('Enter number B'));
    const c = parseFloat(prompt('Enter number C'));
    
    alert('So, we have numbers ' + a + ', ' + b + ' and ' + c +'. Our quadratic equation looks like this: ' + a + 'x^2 + ' + b + 'x +' + c + '=0. Now let\'s solve it!');
    
    const result = solveQuadr(a,b,c);
    alert(result);


    function solveQuadr(a,b,c) {
        const discr = calcD(a,b,c);
        let x1, x2;
        if(discr > 0){
            x1 = ((-b) + Math.sqrt(discr)) / (2 * a);
            x2 = ((-b) - Math.sqrt(discr)) / (2 * a);
            return 'Root x1 = ' + x1 + '. Root x2 = ' + x2;
        } else if(discr === 0){
            x1 = (-b) / (2 * a);
            return 'x1 = x2 = ' + x1;
        } else{  
            return'Sorry. There are no valid roots'
        }
    }
        
    
    
    function calcD(a,b,c){
        return b**2 - 4 * a * c;
    }

// TO DO:
// check if entered values are numbers 
// if yes - solve the sequence
// if no - ask again to enter numbers

//if(a is number && b is number && c is number){
//   alert('All cool! Let\'s count');
//   solveQuadr(a, b, c);
//}else {
//    alert('Not a number! Enter numbers here!');
//    getPrompts(a, b, c);
//}

//function solveQuadr(a,b,c){ }
    





    