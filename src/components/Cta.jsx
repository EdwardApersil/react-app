import content1 from '../images/content1.png';
const Cta = () => { 
    return (
        <>
            <div className="call-to-action grid md:grid-cols-2 sm:grid-cols-1">
                <div className="cta-content">
                    <h1>Join our waiting list</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi tempore temporibus at, nostrum sit modi consectetur odit voluptatibus voluptatum dolores!</p>

                    <div className="form">
                        <form action="">
                            <input className="drop-shadow-lg" type='email' placeholder="Enter your email address"/>
                        </form>
                        <Button />
                    </div>
                </div>

                <div className="cta-img ">
                    <img src={content1} alt="image" />
                </div>
            </div>
        </>
    )
}

const Button = () => { 
    return (
        <>
            <div className="cta-button  rounded-lg ">
                <button className='shadow-lg'>Learn more</button>
            </div>
        </>
    )
}

export default Cta;
