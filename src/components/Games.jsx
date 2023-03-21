import { games } from "../data"
import Game from "./Game"

const Games = () => {
  return (
    <section id="games">
        <div style={{display: "grid", gridTemplateColumns: `repeat(${games.length}, 1fr)`,
                     justifyItems: "center", alignItems: "center", width: "100vw", padding: "100px 0"}}>
            {games.map((game) => {
                return (
                    <Game key={game.id} {...game}/>
                )
            })}
        </div>
    </section>
  )
}
export default Games