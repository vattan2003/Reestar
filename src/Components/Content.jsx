import { defaults } from "autoprefixer"
import food1 from "./imgs/food1.jpeg"
import food2 from "./imgs/food2.jpeg"
import food3 from "./imgs/food3.jpeg"
import food4 from "./imgs/food4.jpeg"



import "./Styles/Content.css"

function Content(){
    return(
        <content>
            <div>
                <img src={food1}></img>
                <p>Lorem ipsum dolor sit amet.</p>
                <span style={{color:"greenyellow"}}><del style={{color:"red"}}>$750</del>  $520</span>
                <button class="btn">Order Now</button>
            </div>
            <div>
                <img src={food2}></img>
                <p>Lorem ipsum dolor sit amet.</p>
                <span style={{color:"greenyellow"}}><del style={{color:"red"}}>$999</del>  $720</span>
                <button class="btn">Order Now</button>
            </div>
            <div>
                <img src={food3}></img>
                <p>Lorem ipsum dolor sit amet.</p>
                <span style={{color:"greenyellow"}}><del style={{color:"red"}}>$650</del>  $330</span>
                <button class="btn">Order Now</button>
            </div>
            <div>
                <img src={food4}></img>
                <p>Lorem ipsum dolor sit amet.</p>
                <span style={{color:"greenyellow"}}><del style={{color:"red"}}>$1750</del>  $920</span>
                <button class="btn">Order Now</button>
            </div>
        </content>
    )
}
export default Content