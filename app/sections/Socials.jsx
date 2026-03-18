import Image from "next/image";

export default function Socials() {
  const sponsors = [
    {
      site_url: "https://www.mdc.edu/north/",
      image_url: "https://i.ibb.co/jP408Hh5/mdc.png",
      alt: "mdc_north_logo",
      w: 200,
      h: 200,
      c: ""
    },
    {
      site_url: "https://miamitechworks.org/",
      image_url: "/svgs/miami_tech_works.svg",
      alt: "miami_tech_works_logo",
      w: 200,
      h: 200,
      c: "m-10"
    }
  ];

  return (
    <section className="socials-bg h-dvh flex items-center justify-center p-4">
      <div className="bg-gray-500 w-full max-w-2xl h-[400px] grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 rounded-xl">
        {sponsors.length > 0 ? (
          <>
            {sponsors.map((sponsor, index) => (
              <a
                href={sponsor.site_url}
                key={index}
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <Image
                  src={sponsor.image_url}
                  height={sponsor.h}
                  width={sponsor.w}
                  alt={sponsor.alt}
                  className={`${sponsor.c}`}
                />
              </a>
            ))}
          </>
        ) : (
          <div className="col-span-1 md:col-span-2 text-white text-2xl font-bold">
            no sponsors : &#40;
          </div>
        )}
      </div>
    </section>
  );
}