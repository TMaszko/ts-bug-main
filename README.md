Steps to reproduce the bug:

1. clone [this](https://github.com/TMaszko/ts-bug-package.git) repository and install its dependencies and run `npm link`.
2. downgrade manually `fastify` version to the `4.23.1` (in package.json) in the linked package node_modules.
3. install main project dependencies and run `npm link ts-bug-package`.
4. notice the error in the VSCode in the `index.ts` file or run `npm run build`.
