// AOS animation configurations for consistent animations across the site
export const aosConfig = {
  // Basic animations
  fadeUp: {
    'data-aos': 'fade-up',
    'data-aos-duration': '800',
    'data-aos-easing': 'ease-in-out',
    'data-aos-once': 'true',
  },
  fadeDown: {
    'data-aos': 'fade-down',
    'data-aos-duration': '800',
    'data-aos-easing': 'ease-in-out',
    'data-aos-once': 'true',
  },
  fadeLeft: {
    'data-aos': 'fade-left',
    'data-aos-duration': '800',
    'data-aos-easing': 'ease-in-out',
    'data-aos-once': 'true',
  },
  fadeRight: {
    'data-aos': 'fade-right',
    'data-aos-duration': '800',
    'data-aos-easing': 'ease-in-out',
    'data-aos-once': 'true',
  },
  zoomIn: {
    'data-aos': 'zoom-in',
    'data-aos-duration': '1000',
    'data-aos-easing': 'ease-in-out',
    'data-aos-once': 'true',
  },
  flipUp: {
    'data-aos': 'flip-up',
    'data-aos-duration': '1000',
    'data-aos-easing': 'ease-in-out',
    'data-aos-once': 'true',
  },
  // For staggered animations
  getStaggered: (index: number, baseDelay = 100) => ({
    'data-aos': 'fade-up',
    'data-aos-delay': String(baseDelay * index),
    'data-aos-duration': '800',
    'data-aos-easing': 'ease-in-out',
    'data-aos-once': 'true',
  }),
} as const;

// Animation presets for different sections
export const sectionAnimations = {
  sectionHeader: {
    title: {
      'data-aos': 'fade-up',
      'data-aos-delay': '100',
      'data-aos-duration': '800',
    },
    subtitle: {
      'data-aos': 'fade-up',
      'data-aos-delay': '200',
      'data-aos-duration': '800',
    },
    description: {
      'data-aos': 'fade-up',
      'data-aos-delay': '300',
      'data-aos-duration': '800',
    },
  },
  card: {
    container: (index: number) => ({
      'data-aos': 'fade-up',
      'data-aos-delay': String(100 + index * 100),
      'data-aos-duration': '800',
      'data-aos-once': 'true',
    }),
  },
  feature: {
    container: (index: number) => ({
      'data-aos': 'fade-up',
      'data-aos-delay': String(100 + index * 100),
      'data-aos-duration': '800',
      'data-aos-once': 'true',
    }),
  },
};
