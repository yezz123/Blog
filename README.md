# Using this repository

You can run the website locally, or you can run it in a container runtime. We strongly recommend using the container runtime, as it gives deployment consistency with the live website.

## Development

First, run the development server:

```bash
npm start
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Deploy

**Vercel**  
The easiest way to deploy the template is to use the [Vercel Platform](https://vercel.com) from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

**Netlify / Github Pages / Firebase etc.**  
As the template uses `next/image` for image optimization, additional configurations has to be made to deploy on other popular static hosting websites like [Netlify](https://www.netlify.com/) or [Github Pages](https://pages.github.com/). An alternative image optimization provider such as Imgix, Cloudinary or Akamai has to be used. Alternatively, replace the `next/image` component with a standard `<img>` tag. See [`next/image` documentation](https://nextjs.org/docs/basic-features/image-optimization) for more details.
