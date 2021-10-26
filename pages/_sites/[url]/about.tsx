import Head from "next/head"
import { Layout, Page, Text, Link, List } from "@vercel/edge-functions-ui"
import { GetStaticPaths, GetStaticProps } from "next"
import { getDomains, getTenantByUrl } from "../../../services"
import type { Tenant } from "../../../data"

const AboutPage = (tenant: Tenant) => (
  <Page>
    <Head>
      <title>Multi-Tenancy For NextJS</title>
      <link rel="icon" href={"/favicon.ico"} />
      <meta
        itemProp="description"
        content="Tenant aware SSG / ISG with Nextjs Middleware"
      />
    </Head>

    <Text variant="h1" className="mb-6">
      About
    </Text>
    <div className="mb-4">
      <Link className="mr-2.5" href="/">
        Home
      </Link>
      <Link className="mr-2.5" href={"/about"}>
        About
      </Link>
    </div>

    <Text className="mb-6">
      <b>About {tenant.name}</b>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
      debitis eveniet non quae quasi qui quo, quos reiciendis veniam voluptatem.
    </Text>
  </Page>
)

AboutPage.Layout = Layout

export default AboutPage

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getDomains().map((domain) => ({ params: { url: domain.url } }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params: { url } }) => ({
  props: getTenantByUrl(url as string),
})
