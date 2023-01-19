' use client'

import NewsletterForm from '../components/forms/newsletterform'
import Guides from '../components/sections/guide-section'

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto sm:py-12 sm:px-6 lg:px-8">
      <NewsletterForm />
      <Guides />
    </div>
  )
}

// import IndexPage from 'components/IndexPage'
// import PreviewIndexPage from 'components/PreviewIndexPage'
// import { PreviewSuspense } from 'components/PreviewSuspense'
// import { getAllPosts, getSettings } from 'lib/sanity.client'
// import { previewData } from 'next/headers'

// export default async function IndexRoute() {
//   // Fetch queries in parallel
//   const [settings, posts] = await Promise.all([getSettings(), getAllPosts()])

//   if (previewData()) {
//     const token = previewData().token || null

//     return (
//       <PreviewSuspense
//         fallback={
//           <IndexPage loading preview posts={posts} settings={settings} />
//         }
//       >
//         <PreviewIndexPage token={token} />
//       </PreviewSuspense>
//     )
//   }

//   return <IndexPage posts={posts} settings={settings} />
// }

// // FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
// export const revalidate = 1
