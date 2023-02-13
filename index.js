let checkVowel = document.querySelector('.check-btn');
let displayOutput = document.querySelector('.output');
let input = document.querySelector('.input');
let count = 0;


function removeAfterSetTime(){
    location.reload();
}

checkVowel.addEventListener('click', () => {
    let input = document.querySelector('.input').value.toLowerCase();
    let split = input.split('');
    input.value = '';

    //we will loop through and look at each letter in the word of the input to detrermine if its a vowel or
    //if it is a vowel, then we will increment the count variable by 1

    for(let i = 0; i<split.length; i++){
        if(split[i] == 'a' || split[i] == 'e' || split[i] == 'i' || split[i] == 'o' || split[i] == 'u'){
            count++;
        }
        if(count > 1){
            displayOutput.innerHTML = `There are ${count} vowels`;
        }else{
            displayOutput.innerHTML = `There are ${count} vowel`;
        }
        let timeout = setTimeout(removeAfterSetTime, 5000);
        //This variable will reload our page in 2.5s once the button is clicked.
    }
})