import Image from 'next/image'

export default function Hero() {
  return (
    <section className=
    "h-dvh w-dvw hero-bg flex justify-center items-center flex-row max-[700px]:flex-col relative"
    >
      <div className="w-[200px] h-[100px] bg-blue-300">
        <h1 className="text-4xl">
          SharkByte
        </h1>
      </div>
      <div className="z-2">
        <Image
          src="/svgs/logo.svg"
          alt="SharkByte Logo"
          width={200}
          height={200}
          priority
          className=""
        />
      </div>

      <Image
        src={"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdW1wa25tbTh1anJ2ZmhhZWw0dmNzMWoyaGNpMzJzazhwM3duc3B4ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/acgjwHIpOlRh4wB1Lb/giphy.gif"}
        alt="Jester"
        width={200}
        height={200}
        loading="eager"
        className="absolute top-50 left-60 z-1 h-auto w-auto" // absolute / fixed
      />
    </section>
  )
}