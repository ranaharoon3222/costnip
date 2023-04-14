import React from 'react'

const Price = () => {
    return (
        <div className='bg-gray-50 py-14'>
            <div className="text-center">
                <h3 className='pb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum, mollitia.</h3>
            </div>
            <div className="w-[90%] max-w-[1300px] mx-[auto] text-center grid grid-cols-1 gap-y-10 md:grid-cols-3 ">
                <div className='text-center'>
                    <h1 className='text-6xl font-black pb-3'>$1000 </h1>
                    <h4 className='text-lg font-semibold'>with a cigna plan </h4>
                </div>
                <div className='text-center'>
                    <h1 className='text-6xl font-black pb-3'>$1000 </h1>
                    <h4 className='text-lg font-semibold'>with a cigna plan </h4>
                </div>
                <div className='text-center'>
                    <h1 className='text-6xl font-black pb-3'>$1000 </h1>
                    <h4 className='text-lg font-semibold'>with a cigna plan </h4>
                </div>
            </div>
        </div>
    )
}

export default Price