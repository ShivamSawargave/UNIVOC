import React from 'react'

function JobRoll() {
    return (
        <>
            <div className='flex flex-col md:flex-row pt-12 bg-blue-200 md:mx-12'>
                <div className='flex flex-col text-center md:ml-20'>
                    <div className='md:text-5xl font-semibold text-3xl underline'>Job Roles</div>
                    <div className='flex flex-col md:flex-row text-center p-6 md:text-xl'>
                        <ul>
                            <li>Process Engineer</li>
                            <li>Chemical Plant Manager</li>
                            <li>Environmental Engineer</li>
                            <li>Ouality control engineers</li>
                            <li>Material scientists</li>

                            <li>Safety Engineer</li>
                            <li>Product Development Engineer</li>
                            <li>Rearch and Development (R&d) Chemist</li>
                            <li>Process control Engineer</li>
                            <li>Manufacturing Engineer</li>
                        </ul>
                    </div>
                </div>
                <div className='md:ml-20 flex flex-col text-center'>
                    <div className='md:text-5xl font-semibold text-3xl underline'>Related Courses</div>
                    <div className='flex flex-row'>
                        <img src="image-15.png" alt="" className='h-32' />
                        <div className='pt-8'>
                            <div>Electrical and Electronics</div>
                            <div><div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input
                                    type="radio"
                                    name="rating-4"
                                    className="mask mask-star-2 bg-orange-400"
                                    defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            </div></div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-row'>
                        <img src="Frame 2300-5.png" alt="" className='h-24' />
                        <div className='pt-8'>

                            <div>Mechanical Engineering</div>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-4"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-row'>
                        <img src="image-16.png" alt="" className='h-32' />
                        <div className='pt-8'>

                            <div>Hotel Management</div>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-4"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='flex flex-row'>
                        <img src="image-4.png" alt="" className='h-32' />
                        <div className='pt-8'>
                            <div>Computer Science</div>
                            <div>
                                <div className="rating">
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-4"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr />
                </div>
            </div>



            

        </>
    )
}

export default JobRoll