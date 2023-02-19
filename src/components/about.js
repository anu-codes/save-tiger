import React from "react";

function About() {
    return (
        <div className="p-5 pt-20 pb-20 h-screen bg-gradient-to-t from-black via-gray-900 to-black">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">ABOUT</h1>
                </div>
    <div class="grid grid-cols-2 gap-20">
            <div className="ml-20 col-span-1">
                <div className="my-10">
                    <div className="bg-white rounded overflow-hidden shadow-lg">
                        <div className="text-center p-6  border-b">
                      
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="h-20 w-20 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        </svg>

                        <p className="pt-4 pb-4 text-xl font-semibold">MISSION</p>
                        <p className="pt-8 pb-8 text-lg text-black">    To ensure the survival and 
                maintenance of the tiger population in specially constituted 
                tiger reserves throughout India</p>
                        
                        </div>
                    </div>
                </div>
            </div>

            <div className="mr-20 col-span-1">
                <div className="my-10">
                    <div className="bg-white rounded overflow-hidden shadow-lg">
                        <div className="text-center p-6  border-b">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        class="h-20 w-20 mx-auto">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>

                        <p className="pt-4 pb-4 text-xl font-semibold">CAUSE</p>
                        <p className="pt-8 pb-8 text-lg text-black">Funds generated from every NFT minted will be donated to charitable organizations
                        responsible for welfare of tigers in India</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    </div>
    )
}
export default About;