import { mockDB } from "../data"

export const getDomains = () => {
  return mockDB.flatMap((tenant) => tenant.domains.flatMap((domain) => domain))
}

export const getTenants = () => {
  return mockDB
}

export const getTenantByUrl = (url: string) => {
  return mockDB.find((tenant) =>
    tenant.domains.find((domain) => domain.url == url)
  )
}
