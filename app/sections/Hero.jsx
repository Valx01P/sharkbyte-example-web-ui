import Image from 'next/image'

export default function Hero() {
  return (
    <section className=
    "h-dvh w-dvw hero-bg flex justify-center items-center flex-row max-[700px]:flex-col relative"
    >

      <div className="z-2 ">
        <Image
          src="/svgs/logo.svg"
          alt="SharkByte Logo"
          width={200}
          height={200}
          priority
          className=""
        />
      </div>

    </section>
  )
}