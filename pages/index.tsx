import Head from "next/head"
import { Layout, Page, Text, Link } from "@vercel/edge-functions-ui"
import type { Domain, Tenant } from "../data"
import { getTenants } from "../services"
import { GetStaticProps } from "next"

const Index = ({ tenants }: { tenants: Tenant[] }) => {
  function getPrimaryDomain(tenant: Tenant): Domain {
    return tenant.domains.find((domain) => domain.primary == true)
  }

  return (
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
        Multi-Tenancy For NextJS
      </Text>
      <div className="mb-4">
        <Link className="mr-2.5" href="/">
          Home
        </Link>
      </div>
      <Text className="mb-6">
        <b>Next Middleware</b>
        <br />
        Tenant aware SSG / ISG now possible using NextJS Middleware and Edge
        functions.
      </Text>

      <Text variant="h2" className="mb-4">
        Tenants
      </Text>
      <div className="space-y-4">
        {tenants.map((tenant) => (
          <Link
            href={"http://" + getPrimaryDomain(tenant).url}
            className="mb-6 block bg-blue-50 bg-opacity-80 p-3 rounded-md shadow-sm">
            <Text className="mb-2">
              <b>{tenant.name}</b>
              <br />
              {tenant.description}
            </Text>
          </Link>
        ))}
      </div>
    </Page>
  )
}

Index.Layout = Layout

export default Index

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    tenants: getTenants(),
  },
})
