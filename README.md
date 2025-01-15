# Deploying to GitHub Pages

This example supports deploying a statically exported Next.js application to GitHub Pages.

The `out` directory should not be ignored by version control.

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example github-pages github-pages-app
```

```bash
yarn create next-app --example github-pages github-pages-app
```

```bash
pnpm create next-app --example github-pages github-pages-app
```

### Deploy to GitHub Pages

1.  Create a new public GitHub repository.
2.  Edit `next.config.js` to match your GitHub repository name:
    - Given the pattern `https://github.com/<user>/<repo>`, update your `basePath` config to `/repo`.
3.  Push the starter code to the `main` branch.
4.  Run the `deploy` script (e.g. `npm run deploy`) to create the `gh-pages` branch.
5.  On GitHub, go to **Settings** > **Pages** > **Branch**, and choose `gh-pages` as the branch with the `/root` folder. Hit **Save**.
6.  Make a change.
7.  Run the `deploy` script again to push the changes to GitHub Pages.

Congratulations! You should have a URL like:

[https://MattSoo.github.io/portfolio/](https://MattSoo.github.io/portfolio/)
