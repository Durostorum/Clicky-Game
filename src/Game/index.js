import React, { Component } from 'react';
import Header from '../Components/FooterHeader/Header';
import Jumbotron from '../Components/FooterHeader/Jumbotron';
import Footer from '../Components/FooterHeader/Footer'
// import Container from './Components/Container';
import Cards from '../Components/Cards/Cards'

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            cards : [
                {
                  name: "Some",
                  link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx36BA0SU8E28XG4HsSAp1i_rkf_VAZQk8Qfje0i9fxPcXnshbEw',
                  clicked: false,
                  bestScore:0,
                  score: 0,                 
                },
                {
                    name: 'Unsplash',
                    link: 'https://images.unsplash.com/photo-1523895665936-7bfe172b757d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                    clicked: false,
                    bestScore:0,
                    score: 0, 
                },
                {
                  name: "Some2",
                  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf5f3ZOGtXY--7Hdi4iTgAOlgo_gF2GeYH15jAZDAm7iidb-gE",
                  clicked: false,
                  bestScore:0,
                  score: 0, 
                },
                {
                  name: "Some3",
                  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwdBhTY9XD_KJgfJDHAcvcWSA0FBWzNnPhGo9Xr-VD6UewAYfNQw",
                  clicked: false,
                  bestScore:0,
                  score: 0, 
                },
                {
                  name: "Some4",
                  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WnzXzbr2hiB8lPq3n_p5fnQdvOMc3Ouummyk11uVylX-7rtdXA",
                  clicked: false,
                  bestScore:0,
                  score: 0, 
                },
                {
                  name: "Some5",
                  link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8F2e8Xm8Y1SL5uPNFFyncyyYoFIqATcOCsf4EnLaO3OZYFhh",
                  clicked: false,
                  bestScore:0,
                  score: 0, 
                },
                {
                  name:'Unspalsh 2',
                  link: 'https://images.unsplash.com/photo-1545866282-9a1bb35f3b8b?ixlib=rb-1.2.1&w=1000&q=80',
                  clicked: false,
                  bestScore:0,
                  score: 0,
                }
              ]
         }
    }

    shuffleCards(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
      };


      ClickEvent = (name) =>{
        //let newArr =[...this.state.cards]
        this.shuffleCards(this.state.cards);
        this.setState({cards: this.state.cards.map((card,index)=> {
          if(card.name === name && !card.clicked)
          {  
            this.updateScore();
              card.clicked=true;
              card.value=1;
              this.winCondition()
          } else if (card.clicked && name===card.name) {
            
            this.handleLoss()
            console.log(card)
          }
          return card
        })})
        
      };
      updateScore = () => {
        this.setState({cards: this.state.cards.map((card)=> {
          if(card.score === card.bestScore) {
          card.score++;
          card.bestScore++;
          console.log(card.score)
      
        } else {
          card.score++
        }
        return card
      })})
      };
      
      
      handleLoss = () => {
      alert("You Lost");
      this.setState({cards: this.state.cards.map((card)=>{ return (card.clicked=false, card.score=0)
      
      })})
    }

      winCondition = () => {
        let clickChecker = this.state.cards.filter((a) => {
          return !a.clicked
        })
        if(clickChecker.length === 0){
          alert("you won")
          
          this.setState({cards: this.state.cards.map((a) => {
            return(
            a.score=0,
            a.clicked = false,
            a.value = 0)
          }) })
          console.log(clickChecker)
        }
      };



    render() { 
        return ( 
            <div>
            <Header  >Score: {this.state.cards[0].score} | BestScore: {this.state.cards[0].bestScore}</Header>
    <Jumbotron />
    <div className="container">
    <Cards cards={this.state.cards} itemClicked={this.ClickEvent} />
    
    </div>
    <Footer />
    </div>
         );
    }
}

 
export default Game;