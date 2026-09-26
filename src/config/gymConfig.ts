import type {
  ProgramItem,
  MembershipPlan,
  Trainer,
  Transformation,
  Testimonial,
  GalleryItem,
  GymBranch
} from '../types';

/**
 * ============================================================================
 * ABHIJEET GYM - MASTER CONFIGURATION FILE
 * ============================================================================
 * Managed for client Abhijeet Gym by NextStep Digital.
 * 
 * INSTRUCTIONS FOR NEXTSTEP DIGITAL / CLIENT:
 * 1. WhatsApp Number: Change `whatsappNumber` below to update all website CTAs.
 *    Use international format without '+' or spaces (e.g. 919096285228).
 * 2. Membership Pricing: Update the `price` fields in `membershipPlans`.
 *    Current prices are clearly marked placeholders.
 * 3. Trainers & Testimonials: Replace the placeholder items with confirmed
 *    coach names, photos, and genuine client reviews.
 * ============================================================================
 */

export const GYM_CONFIG = {
  // Brand Identity
  brandName: "Abhijeet Gym",
  brandSubtitle: "Premium Fitness & Strength Centre",
  establishedYear: "2015",
  tagline: "BUILD YOUR STRONGER SELF.",
  subTagline: "Train harder. Get stronger. Become your best.",
  shortDescription: "Kolhapur's premier fitness destination built for those who value discipline, heavy lifting, transformative endurance, and authentic results.",
  
  // WhatsApp Configuration (Single source of truth)
  // Format: CountryCode + 10-digit number (no '+' sign, no spaces, no dashes)
  whatsappNumber: "919096285228",
  displayPhone: "+91 90962 85228",
  alternatePhone: "+91 90962 85228",
  email: "info@abhijeetgym.com", // Client placeholder

  // Verified Business Locations (Kolhapur, Maharashtra)
  branches: [
    {
      name: "Mangalwar Peth Branch (Main)",
      landmark: "Near Padmaraje Girls High School, Sangar Galli",
      address: "Suvarna Plaza, Sangar Galli, Mangalwar Peth",
      city: "Kolhapur",
      pincode: "416012",
      phone: "+91 90962 85228",
      timings: "Mon – Sat: 5:30 AM – 9:30 PM | Sun: Closed",
      mapsUrl: "https://maps.app.goo.gl/4RdxbvDNZ6oRDGfC9",
      embedQuery: "Abhijeet+Gym+Mangalwar+Peth+Kolhapur",
      isMainBranch: true,
    },
    {
      name: "Apte Nagar Branch",
      landmark: "Near Apte Nagar Panyachi Taaki, Salokhe Nagar Road",
      address: "Jetvan, Salokhe Nagar Road, Apte Nagar",
      city: "Kolhapur",
      pincode: "416007",
      phone: "+91 90962 85228",
      timings: "Mon – Sat: 5:30 AM – 9:30 PM | Sun: Closed",
      mapsUrl: "https://maps.app.goo.gl/4RdxbvDNZ6oRDGfC9",
      embedQuery: "Abhijeet+Gym+Apte+Nagar+Kolhapur",
      isMainBranch: false,
    }
  ] as GymBranch[],

  // Primary Google Maps link provided
  primaryMapsLink: "https://maps.app.goo.gl/4RdxbvDNZ6oRDGfC9",

  // Verified Operating Hours
  operatingHours: {
    weekdays: "5:30 AM – 9:30 PM",
    morningSlot: "5:30 AM – 12:30 PM",
    eveningSlot: "4:30 PM – 9:30 PM",
    sunday: "Closed (Rest & Recovery Day)",
    note: "Unrestricted access during batch hours for all active members."
  },

  // Social Links (Editable Placeholders - update when official handles are linked)
  socialLinks: {
    instagram: "https://instagram.com/abhijeetgym",
    facebook: "https://facebook.com/abhijeetgym",
    youtube: "https://youtube.com/@abhijeetgym",
    googleMaps: "https://maps.app.goo.gl/4RdxbvDNZ6oRDGfC9",
  },

  // Core Pillars / Philosophy
  pillars: [
    {
      title: "Strength & Power",
      description: "Progressive overload, high-tensile barbells, and ergonomic strength stations designed to build raw, functional power.",
      icon: "Dumbbell"
    },
    {
      title: "Consistency & Drive",
      description: "Fitness isn't an occasional sprint; it's a relentless daily habit reinforced by a motivating, high-energy environment.",
      icon: "Flame"
    },
    {
      title: "Discipline & Form",
      description: "Zero ego lifting. We emphasize biomechanically sound form, mobility drills, and injury-free progressive training.",
      icon: "ShieldCheck"
    },
    {
      title: "Community & Brotherhood",
      description: "An inclusive, high-vibe family of athletes, professionals, and fitness beginners cheering each other on every set.",
      icon: "Users"
    }
  ],

  // Key Quick Metrics
  metrics: [
    { value: "10+", label: "Years of Fitness Legacy" },
    { value: "500+", label: "Transformations Achieved" },
    { value: "2", label: "State-of-the-Art Branches" },
    { value: "5:30 AM", label: "Early Morning Start" }
  ],

  // Agency Attribution
  agency: {
    name: "NextStep Digital",
    tagline: "Your Growth, Our Vision.",
    website: "https://nextstepdigital.in"
  }
};

/**
 * 6 Core Fitness Programs
 * Tailored cards with rich imagery, descriptions, and custom WhatsApp messages
 */
export const FITNESS_PROGRAMS: ProgramItem[] = [
  {
    id: "weight-training",
    title: "Weight Training & Strength",
    category: "strength",
    tagline: "Master the Iron. Build Unbreakable Strength.",
    description: "Comprehensive strength conditioning utilizing Olympic barbells, power cages, dumbbells up to 40kg, and dedicated plate-loaded machines. Perfect for developing tendon strength, bone density, and peak athletic power.",
    features: [
      "Deadlifts, Squats & Bench Press specialization",
      "Progressive overload tracking",
      "Form correction & biomechanical safety",
      "Powerlifting & functional strength splits"
    ],
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
    badge: "Most Popular",
    whatsappMessage: "Hello Abhijeet Gym! I am interested in joining the Weight Training & Strength Building program. Please share batch timings and membership details."
  },
  {
    id: "weight-loss",
    title: "Weight Loss & Fat Loss",
    category: "fat-loss",
    tagline: "Burn Calories. Elevate Metabolic Rate.",
    description: "High-intensity cardio circuit protocols combined with resistance training designed to melt stubborn body fat while preserving lean muscle mass and boosting daily energy levels.",
    features: [
      "HIIT & metabolic circuit workouts",
      "Heart-rate targeted cardio sessions",
      "Caloric balance & practical diet advice",
      "Weekly body composition progress tracking"
    ],
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
    badge: "High Burn",
    whatsappMessage: "Hello Abhijeet Gym! I am interested in your Weight Loss & Fat Loss transformation program. Please let me know how I can get started."
  },
  {
    id: "muscle-building",
    title: "Muscle Building & Hypertrophy",
    category: "transformation",
    tagline: "Sculpt Size. Define Athletic Proportions.",
    description: "Scientific hypertrophy programming focused on mechanical tension, volume progression, and muscle recovery to help you build a solid, aesthetic, and muscular physique.",
    features: [
      "Custom body-part split routines (PPL, Arnold split)",
      "Targeted machine & free weight isolation",
      "Hypertrophy rep ranges & time-under-tension",
      "Macro nutrient guidance for lean mass"
    ],
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80",
    badge: "Transformation",
    whatsappMessage: "Hello Abhijeet Gym! I want to enroll in the Muscle Building & Body Transformation program. Please share details on trainer guidance and plans."
  },
  {
    id: "personal-training",
    title: "1-on-1 Personal Training",
    category: "personal-training",
    tagline: "Dedicated Coach. Fast-Track Results.",
    description: "Direct one-on-one coaching with certified fitness trainers. Every rep is scrutinized, workout routines are customized daily to your unique physiology, and personal accountability guarantees success.",
    features: [
      "100% personalized workout & meal protocols",
      "Daily technique review & spotter assistance",
      "Posture correction & mobility rehabilitation",
      "Flexible schedule coordination"
    ],
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
    badge: "Elite Guidance",
    whatsappMessage: "Hello Abhijeet Gym! I would like to enquire about 1-on-1 Personal Training packages. Please connect me with a trainer."
  },
  {
    id: "cardio-conditioning",
    title: "Cardio & Fitness Conditioning",
    category: "conditioning",
    tagline: "Stamina, Agility & Cardiovascular Health.",
    description: "State-of-the-art commercial treadmills, cross trainers, spin bikes, and bodyweight conditioning stations that strengthen your heart, lungs, and athletic endurance.",
    features: [
      "Commercial grade cardio equipment",
      "Stamina & lung capacity elevation",
      "Agility drills and aerobic cross-training",
      "Stress relief & active recovery protocols"
    ],
    imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80",
    badge: "Endurance",
    whatsappMessage: "Hello Abhijeet Gym! I am interested in your Cardio & Fitness Conditioning facilities. Please share membership offers."
  },
  {
    id: "beginners-fitness",
    title: "General Fitness & Beginners",
    category: "beginner",
    tagline: "Welcoming, Non-Intimidating Iron Foundation.",
    description: "Taking your first step into a gym? Our supportive floor trainers walk you through proper machine usage, warm-up habits, safe posture, and basic workout fundamentals so you feel confident from day one.",
    features: [
      "Complete gym walkthrough & orientation",
      "Safety-first machine instruction",
      "Low impact foundation strength building",
      "Habit formation & friendly community"
    ],
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80",
    badge: "Beginner Friendly",
    whatsappMessage: "Hello Abhijeet Gym! I am a beginner looking to join the gym. Please guide me on getting started with membership."
  }
];

/**
 * Membership Plans
 * Notice: Clearly documented editable placeholders as required by user specifications.
 * Real fees to be updated by NextStep Digital / Abhijeet Gym.
 */
export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly Starter",
    duration: "1 Month",
    durationLabel: "Per Month",
    price: "₹1,200",
    billingPeriod: "Billed Monthly",
    popular: false,
    description: "Great for testing the gym floor, temporary visitors, or building a short-term routine.",
    features: [
      "Full access to gym equipment & weights",
      "Morning & evening batch flexibility",
      "Locker & changing room facility",
      "General floor trainer guidance",
      "Basic fitness & workout orientation"
    ],
    isPlaceholderPrice: true,
    whatsappMessage: "Hello Abhijeet Gym! I am interested in the Monthly Starter Plan (₹1,200/mo placeholder). Please confirm the current offer and admission process."
  },
  {
    id: "quarterly",
    name: "Quarterly Transformation",
    duration: "3 Months",
    durationLabel: "3 Months",
    price: "₹3,200",
    originalPrice: "₹3,600",
    billingPeriod: "Billed Quarterly",
    popular: true,
    badge: "Most Popular",
    description: "The ideal timeframe to see tangible fat loss, strength gains, and establish an unbroken workout habit.",
    features: [
      "All Monthly Starter inclusions",
      "Free monthly body fat & fitness assessment",
      "Personalized workout split template",
      "Priority equipment orientation",
      "Access to both Kolhapur branches"
    ],
    isPlaceholderPrice: true,
    whatsappMessage: "Hello Abhijeet Gym! I am interested in the Quarterly Transformation Plan (3 Months). Please share the membership admission details."
  },
  {
    id: "half-yearly",
    name: "Half-Yearly Athlete",
    duration: "6 Months",
    durationLabel: "6 Months",
    price: "₹5,800",
    originalPrice: "₹7,200",
    billingPeriod: "Billed Semi-Annually",
    popular: false,
    badge: "Best Value",
    description: "Deep dedication for serious athletes and transformation seekers who want high value and long-term results.",
    features: [
      "All Quarterly inclusions",
      "Complimentary diet & nutrition guidelines",
      "Bi-weekly progress check-ins",
      "Guest pass (2 free visits for friends)",
      "Zero registration charges"
    ],
    isPlaceholderPrice: true,
    whatsappMessage: "Hello Abhijeet Gym! I am interested in the Half-Yearly Athlete Plan (6 Months). Please confirm the available discounts and timings."
  },
  {
    id: "annual",
    name: "Annual Elite Commitment",
    duration: "12 Months",
    durationLabel: "Full Year",
    price: "₹9,999",
    originalPrice: "₹14,400",
    billingPeriod: "Billed Annually",
    popular: false,
    badge: "Maximum Savings",
    description: "Transform your lifestyle with a full year of elite fitness access at the lowest effective monthly rate.",
    features: [
      "365-day unrestricted gym floor access",
      "1 Complimentary 1-on-1 Personal Training session",
      "Quarterly body transformation audit",
      "Free membership pause option (up to 30 days)",
      "Exclusive Abhijeet Gym merchandise discount"
    ],
    isPlaceholderPrice: true,
    whatsappMessage: "Hello Abhijeet Gym! I want to join for the Annual Elite Commitment Plan (1 Year). Please share the best pricing offer and payment options."
  }
];

/**
 * Trainers & Team Showcase
 * Note: Clearly designated placeholders until client provides confirmed coach profiles.
 */
export const TRAINERS_DATA: Trainer[] = [
  {
    id: "trainer-1",
    name: "Head Coach (Placeholder)",
    role: "Chief Strength & Conditioning Coach",
    specialty: "Powerlifting, Hypertrophy & Biomechanics",
    experience: "8+ Years Experience",
    bio: "Passionate about proper form, injury-free heavy lifting, and helping lifters shatter plateaus through scientific programming.",
    certifications: ["Certified Strength Coach", "K11/ACSM Specialization", "CPR Certified"],
    imageUrl: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=700&q=80",
    isPlaceholder: true
  },
  {
    id: "trainer-2",
    name: "Transformation Coach (Placeholder)",
    role: "Fat Loss & Metabolic Specialist",
    specialty: "Body Recomposition, HIIT & Calisthenics",
    experience: "6+ Years Experience",
    bio: "Dedicated to crafting sustainable fat loss routines and high-energy circuits that make working out fun, intense, and rewarding.",
    certifications: ["Functional Training Specialist", "Certified Nutrition Coach"],
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
    isPlaceholder: true
  },
  {
    id: "trainer-3",
    name: "Personal Trainer (Placeholder)",
    role: "Senior Personal Trainer",
    specialty: "1-on-1 Coaching, Muscle Sculpting & Posture",
    experience: "5+ Years Experience",
    bio: "Focused on beginners and professionals looking for dedicated accountability, custom workout splits, and daily technique guidance.",
    certifications: ["Certified Personal Trainer (CPT)", "Sports Conditioning"],
    imageUrl: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=700&q=80",
    isPlaceholder: true
  }
];

/**
 * Transformations Showcase
 * Note: Marked as placeholders until authorized client transformations are provided.
 */
export const TRANSFORMATIONS_DATA: Transformation[] = [
  {
    id: "trans-1",
    title: "Lean Mass Recomposition",
    duration: "16 Weeks",
    achievement: "-14 kg Fat Loss & +4 kg Muscle",
    category: "Weight Loss",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
    story: "Disciplined progressive overload combined with controlled caloric intake achieved a complete lifestyle change.",
    isPlaceholder: true
  },
  {
    id: "trans-2",
    title: "Strength & Hypertrophy Split",
    duration: "24 Weeks",
    achievement: "Deadlift 90kg to 160kg (+8kg Muscle)",
    category: "Muscle Building",
    beforeImg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    afterImg: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80",
    story: "Overcame lifting plateaus with daily form scrutiny and tailored high-protein dietary guidance.",
    isPlaceholder: true
  }
];

/**
 * Member Testimonials
 * Note: Clearly marked editable placeholders until verified member testimonials are supplied.
 */
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "test-1",
    name: "Rohan Patil (Member Placeholder)",
    role: "Regular Member",
    duration: "Member for 1.5 Years",
    rating: 5,
    review: "Abhijeet Gym has the best lifting atmosphere in Kolhapur. The equipment is heavy-duty, the early 5:30 AM timing fits my work schedule perfectly, and everyone pushes you to lift better.",
    program: "Weight Training & Strength",
    isPlaceholder: true
  },
  {
    id: "test-2",
    name: "Amit Desai (Member Placeholder)",
    role: "Personal Training Client",
    duration: "Member for 8 Months",
    rating: 5,
    review: "Lost 11 kilos in 5 months without any unhealthy fad diets. The trainers pay attention to every single rep and teach you real form. Best gym decision I've made.",
    program: "Weight Loss & Conditioning",
    isPlaceholder: true
  },
  {
    id: "test-3",
    name: "Swapnil Shinde (Member Placeholder)",
    role: "Strength Enthusiast",
    duration: "Member for 2 Years",
    rating: 5,
    review: "Spacious training floor with top-notch dumbbell racks, heavy barbells, and reliable machines. Both the Mangalwar Peth and Apte Nagar facilities are well-kept and energetic.",
    program: "Muscle Building & Hypertrophy",
    isPlaceholder: true
  }
];

/**
 * Gym Facility & Equipment Gallery
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Heavy Free Weight Zone",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    caption: "Hex dumbbells, Olympic barbells, and competition rubber bumper plates."
  },
  {
    id: "gal-2",
    title: "Squat Racks & Power Cages",
    category: "training",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    caption: "Heavy-duty power cages for safe squats, overhead presses, and benching."
  },
  {
    id: "gal-3",
    title: "Cardio Endurance Deck",
    category: "facility",
    imageUrl: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80",
    caption: "Commercial treadmills, cross trainers, and stationary bikes for cardiovascular conditioning."
  },
  {
    id: "gal-4",
    title: "Cable Crossover & Pulley Stations",
    category: "equipment",
    imageUrl: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800&q=80",
    caption: "Dual adjustable pulleys and lat pulldown towers for targeted hypertrophy."
  },
  {
    id: "gal-5",
    title: "High-Energy Workout Environment",
    category: "community",
    imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80",
    caption: "Well-ventilated, motivating music and disciplined athletic brotherhood."
  },
  {
    id: "gal-6",
    title: "Dedicated Stretching & Functional Turf",
    category: "facility",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    caption: "Mat area for dynamic warm-ups, core stabilization, and post-workout cool downs."
  }
];
