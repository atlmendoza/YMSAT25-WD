const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");

  if (offScreenMenu.classList.contains("active")) {
    offScreenMenu.style.display = "block";
  } else {
    offScreenMenu.style.display = "none";
  }
});


document.getElementById("background-audio").play();


document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Function to get selected value of a question
    function getScore(questionName) {
        let selected = document.querySelector(`input[name="${questionName}"]:checked`);
        return selected ? parseInt(selected.value) : 0; // Defaults to 0 if unanswered
    }

    // Calculate scores for each character
    let scores = {
        Jay: getScore("q2") + getScore("q4") + getScore("q8"),
        Claire: getScore("q2") + getScore("q5") + getScore("q12"),
        Phil: getScore("q6") + getScore("q7") + getScore("q10"),
        Gloria: getScore("q1") + getScore("q5") + getScore("q11"),
        Mitchell: getScore("q3") + getScore("q11") + getScore("q14"),
        Cameron: getScore("q1") + getScore("q6") + getScore("q14"),
        Alex: getScore("q2") + getScore("q8") + getScore("q15"),
        Haley: getScore("q1") + getScore("q4") + getScore("q11"),
        Luke: getScore("q6") + getScore("q9") + getScore("q10"),
        Lily: getScore("q3") + getScore("q12") + getScore("q15")
    };
  
  
  
    let messages = {
        Jay: "You're most like Jay! You value tradition and are driven to succeed. You're not afraid to speak your mind and have a dry wit that might surprise people. Just remember to loosen up a bit and enjoy the ride!",
        Claire: "You're most like Claire! You're organized, detail-oriented, and always striving for perfection. You value family and tradition, and you're a natural leader. Don't be afraid to loosen up a bit and enjoy the lighter side of life!",
        Phil: "You're most like Phil! You're optimistic, enthusiastic, and always looking for the bright side of things. You love to have fun and make others laugh. Embrace your inner goofball and never stop believing in the magic of life!",
        Gloria: "You're most like Gloria! You're passionate, vibrant, and full of life. You love your family and friends deeply. Embrace your zest for life and always remember to enjoy the little things.",
        Mitchell: "You're most like Mitchell. You're intelligent, compassionate, and always striving for justice. You value honesty and integrity. Remember to also embrace your playful side and enjoy the lighter moments in life.",
        Cameron: "You're most like Cameron! You're creative, expressive, and full of personality. You love to entertain and make people laugh. Embrace your unique style and never be afraid to express yourself!",
        Alex: "You're most like Alex. You're intelligent, independent, and a bit of a perfectionist. You value knowledge and logic. Embrace your intellectual curiosity and don't be afraid to challenge yourself.",
        Haley: "You're most like Haley. You're social, outgoing, and always looking for the next adventure. You value your friendships and enjoy the finer things in life. Embrace your confidence and never stop chasing your dreams.",
        Luke: "You're most like Luke. You're free-spirited, adventurous, and a bit of a goofball. You enjoy the simple things in life and have a unique perspective on the world. Embrace your playful side and never take life too seriously!",
        Lily: "You're most like Lily. You are witty, independent, and wise beyond your years. You are confident and unafraid to speak your mind. Embrace your unique voice and never be afraid to stand up for what you believe in.",        
    
    
    };

    // Determine the character with the highest score
    let highestScore = -1;
    let bestCharacter = "";

    for (let character in scores) {
        if (scores[character] > highestScore) {
            highestScore = scores[character];
            bestCharacter = character;
        }
    }

    // Show result in an alert
    alert(messages[bestCharacter]);
});

