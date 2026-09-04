import { pg_background_urls } from '../../themes/pg-tailwindcss/tokens.mjs'

// Wide / landscape hero backdrop
const heroImageUrl =
  pg_background_urls['design-image-large'] || pg_background_urls['design-image']

// Square, face-cropped pet photo for framed hero visuals
const heroImage =
  pg_background_urls['design-image'] || pg_background_urls['design-image-large']

export { heroImageUrl, heroImage }
