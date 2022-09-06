
const Nav = () => {
    return (
        <>
            <div id="nav" className=" p-4 text-end font-4lg ">
                <div className="logo">ChatMe</div>
                <div className="form">
                    <form action="">
                        <input className="shadow-lg" type="text" placeholder="Search a friend"/>
                    </form>
                </div>
                <div>
                    <button>
                    <i className='fas fa-home'></i>
                </button>
                <button>
                    <i className='fas fa-comment-alt'></i>  
                </button>
                <button>
                    <i className='fas fa-compass'></i>
                </button>
                <button>
                    <i className='fas fa-heart'></i>
                </button>
                </div>
            </div>
        </>
    )
}

export default Nav;


