

import Slider from "react-slick";



function Benifits() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="flex bg-blue-200 flex-col text-center md:mx-12">
                <div className="text-3xl md:text-6xl mt-10">Benifits</div>
                <div className="slider-container mt-10 bg-blue-200">
                    <Slider {...settings}>
                        <div className=" flex md:flex-row pb-10 sm:w-96">
                            <h3 className="mx-6"><div className="flex md:w-72 md:mx-20 w-86 flex-col rounded-3xl bg-blue-500 p-6 gap-4 hover:scale-105">
                                <div className="flex items-center gap-4">
                                    <div className="h-16 w-16 shrink-0"><img src="Frame 2418.png" alt="" /></div>
                                    <div className="flex flex-col gap-4">

                                        <div className="h-6 w-28 text-white font-bold text-xl">Placement Facilitation</div>
                                    </div>
                                </div>
                                <div className="h-32 w-full text-white ">Career support ans placement facilitation provided to students who successfully complele the programs</div>
                            </div></h3>
                        </div>
                        <div>
                            <h3 className="mx-6"><div className="flex md:w-72 w-86 md:mx-20 flex-col rounded-3xl bg-blue-500 p-6 gap-4 hover:scale-105">
                                <div className="flex items-center gap-4">
                                    <div className=" h-16 w-16 shrink-0 rounded-full"><img src="Frame 2418.png" alt="" /></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="h-4 w-28 text-white font-bold text-xl">Blended Delivery</div>
                                    </div>
                                </div>
                                <div className="h-32 w-full  text-white">Chemical engineering courses combine online learning with hands-on in-person sessions, enhancingtheoretical understanding and practical skills. </div>
                            </div></h3>
                        </div>
                        <div>
                            <h3 className="mx-6"><div className="flex md:w-72 w-86 md:mx-20 flex-col rounded-3xl bg-blue-500 p-6 gap-4 hover:scale-105">
                                <div className="flex items-center gap-4">
                                    <div className=" h-16 w-16 shrink-0 rounded-full"><img src="Frame 2418.png" alt="" /></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="h-4 w-2 text-white font-bold text-xl">Vallues Additions</div>
                                    </div>
                                </div>
                                <div className="h-32 w-full  text-white">The student will enabled with various other initiatives including Engineers esemble free micro-learning webinar and other impactiful events.</div>
                            </div></h3>
                        </div>

                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Benifits