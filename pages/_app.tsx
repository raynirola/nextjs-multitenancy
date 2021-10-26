import type { AppProps } from "next/app"
import type { LayoutProps } from "@vercel/edge-functions-ui/layout"
import { getLayout } from "@vercel/edge-functions-ui"
import "@vercel/edge-functions-ui/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = getLayout<LayoutProps>(Component)

  return (
    <Layout
      title="What is this title?"
      path="hostname-rewrites"
      deployButton={{ env: ["ROOT_URL"] }}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
