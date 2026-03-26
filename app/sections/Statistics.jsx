import Image from 'next/image'
{/* Add in the corresponding background image for the statistics section */}

const Statistics = () => 
{

    {/* Draw the following statistics in a pixel art style on-screen */}
    return (

        <section id = "statistics" className = "w-screen h-screen flex items-center justify-center relative overflow-hidden pixel-bg-statistics bg-red-900">
        {/* later add pixel-bg-statistics for background */}

            {/* Content */}
            <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white p-6 border-3 border-gray-600 pixel-shadow max-[1350px]:text-sm max-[650px]:text-xs max-[1350px]:p-4 max-[650px]:p-3">
                    
                <div className="flex flex-col gap-4 max-[1350px]:gap-3 max-[650px]:gap-2">

                    <h2 className="font-bold text-sm max-[650px]:text-xs max-[500px]:text-[20px]">36 hours of non-stop coding</h2>
                    <h2 className="font-bold text-sm max-[650px]:text-xs max-[500px]:text-[20px]">Innovative ideas and projects</h2>
                    <h2 className="font-bold text-sm max-[650px]:text-xs max-[500px]:text-[20px]">Expert-led workshops</h2>

                </div>

            </div>

    </section>

    )
}

export default Statistics