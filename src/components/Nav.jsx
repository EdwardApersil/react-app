
const Nav = () => {
    return (
        <>
            <div id="nav" className="sm:grid-cols-4 p-4 text-end font-4lg ">
                <div className="logo">ChatMe</div>
                <div className="form">
                    <form action="">
                        <input className="shadow-lg" type="text" placeholder="Search a friend"/>
                    </form>
                </div>
                <div className="links flex-1">
                   
                        <a href=""><i className='fas fa-home'></i></a>
                   
                        <a href=""><i className='fas fa-comment-alt'></i>  </a>
                        
                        <a href=""> <i className='fas fa-compass'></i></a>
                        
                        <a href=""><i className='fas fa-heart'></i></a>
                        
                  
                </div>
            </div>
        </>
    )
}

export default Nav;


