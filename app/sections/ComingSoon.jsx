const ComingSoon = () => 
{

    // Draw the following coming soon message in a pixel art style on-screen
    return (

        <section id = "coming-soon" className = "w-screen h-screen flex items-center justify-center relative overflow-hidden bg-green-900">

            {/* THE BOX: Starts at p-8 for phones, grows to p-16 on tablets/laptops */}
            <div className = "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white border-3 border-gray-600 pixel-shadow p-8 md:p-16">

                {/* THE TEXT: Starts at text-2xl for phones, grows to text-4xl on tablets/laptops */}
                <h2 className="font-bold text-2xl md:text-4xl">SEA YOU SOON. WE'RE COMING BACK WITH A SPLASH!!!</h2>

            </div>

        </section>

    )
}

export default ComingSoon