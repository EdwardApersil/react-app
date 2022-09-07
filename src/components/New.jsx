import content1 from '../images/content1.png';
import content2 from '../images/content2.png';
import content3 from '../images/content3.png';
import content4 from '../images/content4.png';

const New = () => { 
    return (
        <>
            <div className="howItWorks">
                <div className="how-content">
                    <h1>How ChatMe Works</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, deserunt molestias magni sit eum, ullam corporis placeat explicabo repudiandae laudantium quae autem perspiciatis rerum voluptas.</p>
                </div>
                <div className="cards grid sm:grid-cols-1 md:grid-cols-2">
                    <div className="card  shadow-lg">
                        <img className='shadow-lg' src={content1} alt="image" />
                        <h3>Sign-up</h3>
                        <p className=' text-gray-600 text-base pt-3 font-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque est reiciendis ex, nisi iure repellat magnam voluptate debitis autem!</p>
                        <Button />
                    </div>

                    <div className="card  shadow-lg">
                        <img className='shadow-lg' src={content2} alt="image" />
                        <h3>Login</h3>
                        <p className=" text-gray-600 text-base pt-3 font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque est reiciendis ex, nisi iure repellat magnam voluptate debitis autem!</p>
                        <Button />
                    </div>

                    <div className="card shadow-lg">
                        <img className='shadow-lg' src={content3} alt="image" />
                        <h3>Search a Friend</h3>
                        <p className="t text-gray-600 text-base pt-3 font-normal">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque est reiciendis ex, nisi iure repellat magnam voluptate debitis autem!</p>
                        <Button />
                    </div>

                    <div className="card shadow-lg">
                        <img className='shadow-lg' src={content4} alt="image" />
                        <h3>Start chatting</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui cumque est reiciendis ex, nisi iure repellat magnam voluptate debitis autem!</p>
                        <Button />
                    </div>
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

export default New;

