import { COVER_GALLERY_PRESETS, type CoverGalleryPreset } from '../../../../../shared/cover-gallery-presets.js';
import bambooShadowMinimal from '../../../assets/cover-gallery/bamboo-shadow-minimal.jpg';
import blueIslandWatercolor from '../../../assets/cover-gallery/blue-island-watercolor.jpg';
import fourSeasonsStorybook from '../../../assets/cover-gallery/four-seasons-storybook.jpg';
import grassHorizonDream from '../../../assets/cover-gallery/grass-horizon-dream.jpg';
import greenPlainClouds from '../../../assets/cover-gallery/green-plain-clouds.jpg';
import hiddenRagdollCat from '../../../assets/cover-gallery/hidden-ragdoll-cat.jpg';
import naturePlatePrint from '../../../assets/cover-gallery/nature-plate-print.jpg';
import pastelSpringBookmark from '../../../assets/cover-gallery/pastel-spring-bookmark.jpg';
import pinkFlowerFisherman from '../../../assets/cover-gallery/pink-flower-fisherman.jpg';
import scribbleBlackCat from '../../../assets/cover-gallery/scribble-black-cat.jpg';
import summerSeaFantasy from '../../../assets/cover-gallery/summer-sea-fantasy.jpg';
import sunlitWindowLeaves from '../../../assets/cover-gallery/sunlit-window-leaves.jpg';

export interface CoverGalleryItem extends CoverGalleryPreset {
  src: string;
}

const COVER_GALLERY_IMAGE_URLS: Record<string, string> = {
  'bamboo-shadow-minimal': bambooShadowMinimal,
  'blue-island-watercolor': blueIslandWatercolor,
  'four-seasons-storybook': fourSeasonsStorybook,
  'grass-horizon-dream': grassHorizonDream,
  'green-plain-clouds': greenPlainClouds,
  'hidden-ragdoll-cat': hiddenRagdollCat,
  'nature-plate-print': naturePlatePrint,
  'pastel-spring-bookmark': pastelSpringBookmark,
  'pink-flower-fisherman': pinkFlowerFisherman,
  'scribble-black-cat': scribbleBlackCat,
  'summer-sea-fantasy': summerSeaFantasy,
  'sunlit-window-leaves': sunlitWindowLeaves,
} satisfies Record<string, string>;

export const COVER_GALLERY_ITEMS: CoverGalleryItem[] = Array.from(COVER_GALLERY_PRESETS, (preset) => {
  const src = COVER_GALLERY_IMAGE_URLS[preset.id];
  if (!src) {
    throw new Error(`Missing cover gallery asset import for preset: ${preset.id}`);
  }
  return { ...preset, src };
});
