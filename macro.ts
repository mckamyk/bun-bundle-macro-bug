export const getContent = async () => {
  console.log("Entered getContent")
  const contentFile = Bun.file('./test.txt')
  console.log("test.txt exists: ", await contentFile.exists())
  const contents = await contentFile.text();
  console.log("Content length:", contents.length)

  return contents
}

