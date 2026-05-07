import Image from 'next/image'

export default function Hero() {
  return (
    <section id='hero' className=
    "h-dvh w-dvw hero-bg flex justify-center items-center flex-row max-[700px]:flex-col relative"
    >

      <div className="z-2 ">
        <Image
          src="/svgs/logo.svg"
          alt="SharkByte Logo"
          width={100}
          height={100}
          priority
          className="w-[300px] h-[300px] tablet:w-[350px] tablet:h-[350px] laptop:w-[400px] laptop:w-[400px] desktop:w-full desktop:h-full"
        />
      </div>

    </section>
  )
}