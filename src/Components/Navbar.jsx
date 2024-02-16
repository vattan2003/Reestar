function Navbar() {
    return (
        <nav className="bg-black text-white py-5 ">
            <center>
                <h1 className="font-bold text-4xl font-serif">REESTAR</h1>
                <menu className="flex justify-evenly mt-3 border py-1 rounded"><i class="fa-brands fa-shopify"></i> <i class="fa-solid fa-truck-fast"></i><i class="fa-solid fa-location-dot"></i> <i class="fa-solid fa-bookmark"></i>  <i class="fa-solid fa-list"></i></menu>

            </center>
        </nav>
    )
}
export default Navbar