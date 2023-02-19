import Slides from "./swipe"
export default function Collections() {
  return (
    <div className="bg-gradient-to-t from-black via-gray-900 to-black p-20">
  <div className="container flex justify-center mx-auto mt-10">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center font-extrabold sm:w-4/6 w-5/6 mx-auto">Collection</h1>
                </div>
            </div>
      <div id="slide" className='p-10 content-center m-20 -mt-2'>
      <Slides/>
      </div>
    </div>

  )
}
