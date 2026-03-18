export default function Sponsors() {
  return (
    <section className="bg-blue-300 h-[50dvh] flex items-center justify-center">
      {/* clamp(minimum_size --static, ideal_size --dynamic, maximum_size --static). */}
      {/* Container: 
        Width shrinks to 300px on phones, scales with 60vw, caps at 600px.
        Height uses min-h so it can still grow if the text wraps on tiny screens!
      */}
      <div className="bg-green-300 flex flex-col items-center justify-center text-center gap-2 p-4
                      w-[clamp(300px,60vw,600px)] 
                      min-h-[clamp(150px,25vh,250px)]">
        
        {/* Title: Never smaller than 24px, scales with screen width, never larger than 32px */}
        <h1 className="text-[clamp(24px,5vw,32px)] font-bold">
          Sponsors
        </h1>
        
        {/* Subtitle: Scales smoothly between 18px and 1.24px */}
        <p className="text-[clamp(18px,3.5vw,24px)]">
          Thank you to all of our sponsors
        </p>
        
      </div>
    </section>
  )
}