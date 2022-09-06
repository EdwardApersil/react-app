import hero from '../images/hero.png'


const number = 7;

const Hero = () => { 
    return (
        <>
            <div className="hero bg-white rounded-lg">
                <div className="hero-image">
                    <img className='shadow-lg' src={hero} alt="hero" />
                </div>
                <div className="hero-content">
                    <h1> <span className="span">ChatMe</span> {number} is the best place to meet, chat, and collaborate</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam error, sit quisquam culpa architecto aliquam placeat dolore beatae nihil quaerat tempore sint, inventore ut ipsum temporibus quos eligendi aut tempora!</p>
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

