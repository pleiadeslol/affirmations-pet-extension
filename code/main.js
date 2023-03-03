const aff = ["I am successful", "I am confident", "I am powerful", "I am strong", "I am getting better and better every day", 
  "All I need is within me right now", "I wake up motivated", "I am an unstoppable force of nature", "I am a living, breathing example of motivation",
  "I am living with abundance", "I am having a positive and inspiring impact on the people I come into contact with",
  "I am inspiring people through my work", "I’m rising above the thoughts that are trying to make me angry or afraid",
  "Today is a phenomenal day", "I am turning DOWN the volume of negativity in my life, while simultaneously turning UP the volume of positivity",
  "I am filled with focus", "I am not pushed by my problems; I am led by my dreams", "I am grateful for everything I have in my life",
  "I am independent and self-sufficient", "I can be whatever I want to be", "I am not defined my by past; I am driven by my future",
  "I use obstacles to motivate me to learn and grow", "Today will be a productive day", "I am intelligent and focused",
  "I feel more grateful each day", "I am getting healthier every day",]

const random = Math.floor(Math.random() * aff.length);
let random_aff = aff[random];

function clickme(){
  var x = document.getElementById("affirmation");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    x.innerHTML = random_aff;
}