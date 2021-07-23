import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://yezz.me/">
            <div>{siteMetadata.author}</div>
          </Link>
          <div>{` • `}</div>
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            <div>Theme by timlrx</div>
          </Link>
          <div>{` • `}</div>
          <Link href="https://vercel.com/">
            <div> Deployed on Vercel</div>
          </Link>
        </div>
        <div className="flex mb-8 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/yezz123/Blog/">Open Source </Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
