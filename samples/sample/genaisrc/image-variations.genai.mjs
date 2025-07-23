// Generate variations of existing images
// This script demonstrates how to create variations of existing images

script({
  title: "Image Variations with gpt-image-1",
  description: "Demonstrates image variations capabilities",
  group: "Image Generation"
})

// Generate variations of the robot image
const { image } = await generateImage(
  "Create variations of this image",
  {
    mode: "variations",
    image: "src/robots.jpg",
    model: "openai:gpt-image-1",
    quality: "high",
    size: "square"
  }
)

console.log(`🔄 Generated image variation: ${image.filename}`)

// Generate variations with different quality and size
const { image: landscapeVariation } = await generateImage(
  "", // prompt not used for variations mode
  {
    mode: "variations",
    image: "src/images/Little Mushroom in the Grass.jpg",
    model: "openai:gpt-image-1",
    quality: "medium",
    size: "landscape"
  }
)

console.log(`🍄 Generated landscape variation: ${landscapeVariation.filename}`)

// You can also create variations from other sample images
const { image: galaxyVariation } = await generateImage(
  "", 
  {
    mode: "variations",
    image: "src/vision/galaxy.jpg",
    model: "openai:gpt-image-1",
    quality: "high",
    size: "portrait"
  }
)

console.log(`🌌 Generated galaxy variation: ${galaxyVariation.filename}`)