import "./home.css"


const action = ["build", "create", "change", "shape"];

function addWord(action){
  return action;
}
console.log(addWord(action));

const word = action[Math.floor(Math.random()*4)];



export const Home = () => {
  return (
    <main className="home-main">
      <h1>What shall <br />
        we {word} <br />
        today?</h1>
    </main>
    )
}
