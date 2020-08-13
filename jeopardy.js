const categories = [
  {
    title: 'Sci-Fi Stuff',
    clues: [
      {
        text: `The latex prosthetic ears worn by this 'Star Trek' actor in the late '60s even have some residual makeup left on them`,
        value: 200,
        answer: `Who is Leonard Nimoy`
      },
      {
        text: `The piece here is really green cast resin in crystal form, but in 'Superman III', it was called this, & appeared onscreen with Christopher Reeve`,
        value: 400,
        answer: `What is Kryptonite`
      },
      {
        text: `Seen in Dr. Zaius' private chambers, the Lawgiver statue from this 1968 film looks to be stone, but is actually made of cast & carved rigid polyfoam`,
        value: 600,
        answer: `What is Planet of the Apes`
      }
    ]
  },
  {
    title: 'TV Shows By Couple',
    clues: [
      {
        text: `Monica & Chandler`,
        value: 200,
        answer: `What is Friends`
      },
      {
        text: `Carrie & Mr. Big`,
        value: 400,
        answer: `What is Sex and the City`
      },
      {
        text: `Jim Halpert & Pam Beesly, who hooked up at work`,
        value: 600,
        answer: `What is The Office`
      }
    ]
  },
  {
    title: 'Mother Goose',
    clues: [
      {
        text: `They were the 'Three Men in a Tub'`,
        value: 200,
        answer: `Who is the butcher, the baker, the candlestick maker`
      },
      {
        text: `March winds & April showers brings forth these`,
        value: 400,
        answer: `What is May Flowers`
      },
      {
        text: `After 'Jack fell down and broke his crown', he 'went to bed to mend his head' using brown paper & this liquid`,
        value: 600,
        answer: `What is Vinegar`
      }
    ]
  }
]

for(let i = 0; i < categories.length; i++){
  document.getElementsByClassName("title")[i].innerHTML = categories[i].title;
  document.getElementsByClassName("cell")[i].innerHTML = categories[0].clues[i].value;
  document.getElementsByClassName("cell")[i+3].innerHTML = categories[1].clues[i].value;
  document.getElementsByClassName("cell")[i+6].innerHTML = categories[2].clues[i].value;
}

for(let i = 0; i < categories.length*3; i++){
  document.getElementsByClassName("cell")[i].onclick = function(){
    document.getElementById("overlay").classList.toggle("show");
    document.getElementById("clue").innerHTML = categories[Math.floor(i/3)].clues[i%3].text;
    document.getElementById("answer").innerHTML = categories[Math.floor(i/3)].clues[i%3].answer;
  }

  document.getElementById("close").onclick = function(){
    if(document.getElementById("close").innerHTML === "close"){
      document.getElementById("close").innerHTML = "Show Answer";
      document.getElementById("overlay").classList.toggle("show")
      document.getElementById("answer").classList.toggle("show");
    }else{
      document.getElementById("answer").classList.toggle("show");
      document.getElementById("close").innerHTML = "close"
    }
  }
}

