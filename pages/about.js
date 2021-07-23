import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <Image
              src={siteMetadata.image}
              alt="avatar"
              width="192px"
              height="192px"
              className="w-48 h-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">Backend Developer</div>
            <div className="text-gray-500 dark:text-gray-400">OSS Developer</div>
            <div className="flex pt-6 space-x-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
              <SocialIcon kind="github" href={siteMetadata.github} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SocialIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>It's my pleasure to introduce my self, My name is Yasser Tahiri.</p>
            <p>
              I am an experienced Backend developer | Penetration Tester. I am mostly self-taught,
              and I am very passionate about new technologies. My strongest skills lie within
              Python/JavaScript, both backends.
            </p>
            <p>
              I can learn quickly anything thrown at me, I am flexible & Comfortable with new
              technologies and I can work with them faster than Speedy Gonzales.
            </p>
            <p>
              Besides technology, I am more passionate about new Ideas and new ways of Thinking.
            </p>
            <p>
              Relate to My Passion, I like watching and reading all the things that relate to
              Ancient Greece, As examples the Dark Ages of the 12th–9th centuries also the Ancient
              Greek philosophy, Socrates, Aristotle my greatest philosopher of all the time.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
