I was having an issue with my production repo and Macros.

In my code, both using `Bun.build({...}` and `bun build ./file.ts` had this error, but it appears that this reproduction only `bun build ./file.ts` does.

To see the error try running `bun build ./index.ts`

inside `index.ts` you should see a build macro `import {getContent} from './macro' with { type: "macro" }`

The behavior I saw was as follows.

```bash
bun run ./index.ts
Entered getContent
test.txt exists: true
# hangs here not continuing.
```
