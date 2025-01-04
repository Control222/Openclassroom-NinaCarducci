const images = document.querySelectorAll('source[data-srcset]');
console.log(`Found ${images.length} images with data-srcset.`);

images.forEach((img) => {
  let srcset = img.getAttribute('data-srcset');

  // replace multiple spaces with a single space
  srcset = srcset.replace(/\s+/g, ' ').trim();

  const deviceWidth = window.innerWidth; // device's width
  console.log(`Processing image with clientWidth: ${deviceWidth}`);

  let bestMatch = srcset.split(',')[0].trim(); // Default first option

  srcset.split(',').forEach((option) => {
    const [src, width] = option.trim().split(' ');

    const widthValue = parseInt(width.trim(), 10);
    console.log(`Evaluating option: src=${src}, width=${widthValue}`);

    if (widthValue <= deviceWidth) {
      bestMatch = src; // Select the best match based on the width
    }
  });

  // Set the srcset of the <source> element to the best match
  img.srcset = bestMatch;
  console.log(`Best match for the image: ${bestMatch}`);
});
