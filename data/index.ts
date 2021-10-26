export type Tenant = {
  id: number
  name: string
  description: string
  domains: Domain[]
}

export type Domain = {
  url: string
  type: string
  primary: boolean
}

export const mockDB: Tenant[] = [
  {
    id: 1,
    name: "Tenant One",
    description:
      "Every component is embedded live directly on the page, and you can even see what they look like at different breakpoints by dragging the slider on the right.",
    domains: [
      {
        url: `tenant-one-domain-1.${process.env.ROOT_URL}`,
        type: "subdomain",
        primary: true,
      },
      {
        url: `tenant-one-domain-2.${process.env.ROOT_URL}`,
        type: "subdomain",
        primary: false,
      },
      {
        url: `tenant-one-custom-domain.${process.env.ROOT_URL}`,
        type: "custom",
        primary: false,
      },
    ],
  },
  {
    id: 2,
    name: "Tenant Two",
    description:
      'Click the "Code" tab to see the code for a component and grab the part that you need, or click the clipboard button to quickly copy the entire snippet in one step.',
    domains: [
      {
        url: `tenant-two-domain-1.${process.env.ROOT_URL}`,
        type: "subdomain",
        primary: true,
      },
      {
        url: `tenant-two-domain-2.${process.env.ROOT_URL}`,
        type: "subdomain",
        primary: false,
      },
      {
        url: `tenant-two-custom-domain.${process.env.ROOT_URL}`,
        type: "custom",
        primary: false,
      },
    ],
  },
  {
    id: 3,
    name: "Tenant Three",
    description:
      "Every component is built entirely out of Tailwind utility classes, so you can easily dive in and adjust anything you want to better fit your use case.",
    domains: [
      {
        url: `tenant-three-domain-1.${process.env.ROOT_URL}`,
        type: "subdomain",
        primary: true,
      },
      {
        url: `tenant-three-domain-2.${process.env.ROOT_URL}`,
        type: "subdomain",
        primary: false,
      },
      {
        url: `tenant-three-custom-domain.${process.env.ROOT_URL}`,
        type: "custom",
        primary: false,
      },
    ],
  },
]
