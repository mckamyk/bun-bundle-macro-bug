import { getContent } from "./macro" with { type: "macro" }

const content = await getContent();

console.log("Content:", content)
