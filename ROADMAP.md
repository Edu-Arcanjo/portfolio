# Shopify + Next.js

## Next.js

### Create app

> `npx create-next-app@latest`

<br />

### Making your repo Commitizen friendly

First, install the Commitizen CLI tools:

> `npm install commitizen -g`

Next, initialize your project to use the cz-conventional-changelog adapter by typing:

> `commitizen init cz-conventional-changelog --save-dev --save-exact`

<br />

### Intall shadcn manualy

> Install the classname helpers
>
> `npm install class-variance-authority clsx tailwind-merge`

> Install the plug-ins
>
> `npm install -D @tailwindcss/aspect-ratio tailwindcss-animate tailwindcss-radix`

> Install the icons
>
> `npm install lucide-react`

<br />

Add a cn helper

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Add plug-ins to config

```javascript
// tailwind.config.js
plugins: [
  require("@tailwindcss/aspect-ratio"),
  require("tailwindcss/animate"),
  require("tailwindcss-radix")(
    variantPrefix: "rdx"
  ),
],
```

<br />

### Install prettier

> `npm install -D prettier prettier-plugin-tailwindcss`

```javascript
// prettier.config.js
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
};
```

<br />

### Install graphql type helper

> `npm i graphql apollo`

```typescript
// codegen.ts
import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [process.env.NEXT_PUBLIC_API_URL!]: {
      headers: {
        "X-Shopify-Storefront-Access-Token":
          process.env.NEXT_PUBLIC_ACCESS_TOKEN!,
      },
    },
  },
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
```

layout

- Header
- {Main}
- Footer

/

- Hero
- Produtos (Home Page)

### Shopify

- Create account
- Select the Basic Plan or higher
  - $1,00 USD/mounth first 3 mounths.
  - $19,00 USD/mounth after trial
  - 2 members (me & owner)
- Add products
- Headless plug-in
- Shopify GraphiQL App plug-in
- Custom Domain
  - R$40,00 BRL/year
