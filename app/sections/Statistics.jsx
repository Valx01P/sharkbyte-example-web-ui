const Statistics = () => 
{
    const stats = [
        { text: "36 hours of non-stop coding", hoverColor: "hover:text-blue-700" },
        { text: "Innovative ideas and projects", hoverColor: "hover:text-pink-400" },
        { text: "Expert-led workshops", hoverColor: "hover:text-yellow-400" },
    ];

    // Draw the following statistics in a pixel art style on-screen
    return (

        <section id = "statistics" className = "w-screen h-screen flex items-center justify-center relative overflow-hidden stats-bg">

            {/* THE BOX: Starts at p-8 for phones, grows to p-16 on tablets/laptops */}
            <div className = "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white border-3 border-gray-600 pixel-shadow p-8 md:p-16">
                
                {/* THE TEXT GAPS: Starts at gap-6 for phones, grows to gap-12 on tablets/laptops */}
                <div className = "flex flex-col gap-6 md:gap-12">

                    {/* THE TEXT: Starts at text-2xl for phones, grows to text-4xl on tablets/laptops */}
                    {stats.map((stat, index) => (
                        <h2 key={index} className={`font-bold text-2xl md:text-4xl ${stat.hoverColor}`}>{stat.text}</h2>
                    ))}

                </div>

            </div>

    </section>

    )
}

export default Statistics