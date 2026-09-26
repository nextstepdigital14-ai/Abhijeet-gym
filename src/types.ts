export interface ProgramItem {
  id: string;
  title: string;
  category: 'strength' | 'fat-loss' | 'transformation' | 'conditioning' | 'personal-training' | 'beginner';
  tagline: string;
  description: string;
  features: string[];
  imageUrl: string;
  badge?: string;
  whatsappMessage: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  durationLabel: string;
  price: string;
  originalPrice?: string;
  billingPeriod: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  isPlaceholderPrice: boolean;
  whatsappMessage: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  certifications: string[];
  imageUrl: string;
  isPlaceholder: boolean;
}

export interface Transformation {
  id: string;
  title: string;
  duration: string;
  achievement: string;
  category: string;
  beforeImg: string;
  afterImg: string;
  story: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  duration: string;
  rating: number;
  review: string;
  program: string;
  isPlaceholder: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'facility' | 'equipment' | 'training' | 'community';
  imageUrl: string;
  caption: string;
}

export interface GymBranch {
  name: string;
  landmark: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  timings: string;
  mapsUrl: string;
  embedQuery: string;
  isMainBranch?: boolean;
}
