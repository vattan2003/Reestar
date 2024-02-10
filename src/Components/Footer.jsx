import "./Styles/Footer.css"

function Footer(){
    function submite(){
        alert("👍︎ Details are Successfuly Submited")
    }
    return(
        <footer>
            
         <h1 className="ml-10 font-bold">Contact Us</h1>
         <label className="flex gap-[10px] justify-evenly mt-10 flex-col flex-wrap ">
          <p><i class="fa-solid fa-user"> Name</i></p>
            <input type="text" placeholder="Enter a Name" className=""></input>
            <p><i class="fa-solid fa-location-dot"> Location</i></p>
            <input type="text" placeholder="Enter a Location"></input>
            <p><i class="fa-solid fa-phone"> Phone</i></p>
            <input type="number" placeholder="Enter a Phone"></input>
            <button class="footer-btn" onClick={submite}>SUBMITE</button>
         </label>
         
        </footer>
    )
}
export default Footer