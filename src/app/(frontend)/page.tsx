import PageTemplate, { generateMetadata } from './[slug]/page'

// Next.js route segment config (like `dynamic`) must be declared in the
// actual route file — it does not carry over through a re-export of
// another module, even though [slug]/page.tsx already sets this.
export const dynamic = 'force-dynamic'

export default PageTemplate

export { generateMetadata }
