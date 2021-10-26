import Head from "next/head"
import { Layout, Page, Text, Link, List } from "@vercel/edge-functions-ui"
import { getDomains, getTenantByUrl } from "../../../services"
import type { Tenant } from "../../../data"

interface AboutPageProps {
  tenant: Tenant
  currentUrl: string
}

Index.Layout = Layout

export default function Index({ tenant, currentUrl }: AboutPageProps) {
  return (
    <Page>
      <Head>
        <title>{tenant.name}</title>
        <link rel="icon" href={"/favicon.ico"} />
        <meta itemProp="description" content={tenant.description} />
      </Head>
      <Text variant="h1" className="mb-6">
        {tenant.name}
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
        <b>{tenant.description}</b>
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
        corporis dolore est harum hic, magnam maiores quaerat quasi quis,
        quisquam rem sapiente similique tempore totam, velit. Eum, sequi, vitae!
        Accusantium adipisci doloremque nemo pariatur porro, repellendus.
        Aliquid consequuntur cupiditate error incidunt magnam maiores nihil
        odio, officiis quis sed? Dicta, fugit.
      </Text>

      <Text variant="h2" className="mb-4">
        Domains
      </Text>

      <ul className="space-y-2">
        {tenant.domains.map((domain) => (
          <li
            key={domain.url}
            className="relative max-w-md p-3 bg-blue-50 rounded-md">
            <Link href={"http://" + domain.url}>{domain.url}</Link>
            <Text>{domain.type}</Text>
            {currentUrl === domain.url && (
              <div className="absolute inset-y-0 right-0 p-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-600">
                  <path
                    fill="currentColor"
                    d="M16.3403 1.9998H7.67031c-3.39 0-5.67 2.38-5.67 5.92v8.17c0 3.53 2.28 5.91 5.67 5.91h8.66999c3.39 0 5.66-2.38 5.66-5.91v-8.17c0-3.54-2.27-5.92-5.66-5.92Z"
                  />
                  <path
                    fill="#fff"
                    d="M10.8134 15.2479c-.224 0-.448-.085-.619-.256l-2.37302-2.373c-.342-.342-.342-.896 0-1.237.342-.342.895-.343 1.237-.001l1.75502 1.755 4.128-4.128c.342-.342.895-.342 1.237 0 .342.342.342.896 0 1.238l-4.746 4.746c-.171.171-.395.256-.619.256Z"
                  />
                </svg>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Page>
  )
}

export async function getStaticPaths() {
  const paths = getDomains().map((domain) => ({ params: { url: domain.url } }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { url } }) {
  return {
    props: {
      tenant: getTenantByUrl(url),
      currentUrl: url,
    },
  }
}
