const Statistics = () => 
{
    const stats = [
        { text: "200+ Attendees", hoverColor: "hover:text-blue-700" },
        { text: "130 Participants", hoverColor: "hover:text-pink-400" },
        { text: "49 Completed Projects", hoverColor: "hover:text-yellow-400" },
    ];

    // Draw the following statistics in a pixel art style on-screen
    return (

        <section id = "statistics" className = "w-screen h-screen flex items-center justify-center relative overflow-hidden stats-bg">

            {/* THE BOX: Starts at p-8 for phones, grows to p-16 on tablets/laptops */}
            <div className = "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white border-3 border-gray-600 pixel-shadow p-8 tablet:p-12 laptop:p-16 desktop:p-18">
                
                {/* THE TEXT GAPS: Starts at gap-6 for phones, grows to gap-12 on tablets/laptops */}
                <div className = "flex flex-col gap-6 tablet:gap-8 laptop:gap-10 desktop:gap-12">

                    {/* THE TEXT: Starts at text-2xl for phones, grows to text-4xl on tablets/laptops */}
                    {stats.map((stat, index) => (
                        <h2 key={index} className={`font-bold text-2xl tablet:text-4xl laptop:text-5xl desktop:text-6xl ${stat.hoverColor}`}>{stat.text}</h2>
                    ))}

                </div>

            </div>

    </section>

    )
}

export default Statistics