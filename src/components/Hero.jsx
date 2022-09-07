import hero from '../images/hero.png'




const Hero = () => { 
    return (
        <>
            <div className="hero grid sm:grid-cols-1 md:grid-cols-2  bg-white rounded-lg">
                <div className="hero-image">
                    <img className='shadow-lg' src={hero} alt="hero" />
                </div>
                <div className="hero-content">
                    <h1 className=''> <span className="span">ChatMe</span> is the best place to meet, chat, and collaborate</h1>
                    <p className="w-10 hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam error, sit quisquam culpa architecto aliquam placeat dolore beatae nihil quaerat tempore sint, inventore ut ipsum temporibus quos eligendi aut tempora!</p>
                    <Button />
                </div>
            </div>
        </>
    )
}

const Button = () => { 
    return (
        <>
            <div className="button  rounded-lg shadow-lg ">
                <button>Learn more</button>
            </div>
        </>
    )
}

export default Hero;

