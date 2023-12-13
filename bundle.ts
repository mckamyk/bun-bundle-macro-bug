console.log("Starting bundle...")
const build = Bun.build({
  entrypoints: ['./index.ts'],
  outdir: '.',
  minify: true
})
console.log("Awaiting bundle completion...")
await build
console.log("Bundle completed!")


