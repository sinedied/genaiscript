script({
    title: "image-to-mermaid",
    description: "Given an image of a diagram, generate mermaid code for it.",
    model: "azure:gpt-4o_2024-11-20",
})

defImages(env.files)

$`Given the image, generate a mermaid diagram based on the content of the image.`