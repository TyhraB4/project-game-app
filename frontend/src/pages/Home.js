import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
function Home() {
    return (
        <>
        <h1 className="text-center text-success my-5">Welcome to the Arcade!</h1>
        <div class="cards-list">

        <div class="card 1">
        <div class="card_image"> <img src="https://media3.giphy.com/media/12BJdh2M9SwciQ/200.webp?cid=ecf05e47wthokm9x506c8z5eyizrygb5j10sp72ai0bwpw8e&rid=200.webp&ct=g" /> </div>
        <div class="card_title">
            <p>Hangman</p>
        </div>
        </div>

        <Link to={'/tictactoe'}>
        <div class="card 2">
        <div class="card_image">
            <img src="https://media2.giphy.com/media/ChzovjKPuEiYe8ePih/200w.webp?cid=ecf05e47v2hx8a4m9r635smi9rq2q1ctowk1l4qru927flz4&rid=200w.webp&ct=g" />
            </div>
        <div class="card_title">
            <p>TicTacToe</p>
        </div>
        </div>
        </Link>

        <div class="card 3">
        <div class="card_image">
            <img src="https://media2.giphy.com/media/f7STAwvEml1eIf0FEq/200w.webp?cid=ecf05e47ul8cicsa24fqo4n4peyacwaz1vwtn8sv0gkm68ft&rid=200w.webp&ct=g" />
        </div>
        <div class="card_title">
            <p>Tetris</p>
        </div>
        </div>
        
        <div class="card 4">
        <div class="card_image">
            <img src="https://media1.giphy.com/media/PHWTbRJiLO9VR0Ba33/200w.webp?cid=ecf05e47l2xn4w1xg1hudjd6wq3qrr5bp9c227g9fjkkufgf&rid=200w.webp&ct=g" />
            </div>
        <div class="card_title">
            <p>Frogger</p>
        </div>
        </div>

        </div>
        </>
    )
}

export default Home;