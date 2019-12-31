const btn = document.querySelector('.talk');
const content = document.querySelector('.content');


//
const greetings = ['Im fine thank you', 'Doin good homeboi', 'Leave me alone'];

const weather = ['Weather is fine', 'You need a tan'];


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
	console.log('Voice is activated, you can speak');
};

 recognition.onresult = function(event){
 	const current = event.resultIndex;

 	const transcript = event.results[current][0].transcript;
 	content.textContent = transcript;
 	readOutLoud(transcript);
 };

 //add the listener to the btn

 btn.addEventListener('click', () => {
 	recognition.start();
 });

 function readOutLoud(message)
 {
 	const speech = new SpeechSynthesisUtterance();

 	speech.text = 'I dont know what you said';
 	if(message.includes('how are you doing')){
 		const reply1 = greetings[Math.floor(Math.random() * greetings.length)];
 		speech.text = reply1;
 	}
 	else if(message.includes('how is the weather'))
 	{
 		const reply2 = weather[Math.floor(Math.random() * weather.length)];
 		speech.text = reply2;
 	}
 	speech.volume = 1;
 	speech.rate = 0.7;
 	speech.pitch = 1;

 	window.speechSynthesis.speak(speech);
 }