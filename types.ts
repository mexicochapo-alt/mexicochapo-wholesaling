
export interface Deal {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  arv: number;
  repairs: number;
  assignmentFee: number;
  status: 'Lead' | 'Under Contract' | 'Assigned' | 'Closed';
  type: 'Single Family' | 'Multi Family' | 'Land' | 'Commercial';
  financeType: 'Cash' | 'Subject-To' | 'Seller Finance' | 'Novation';
  imageUrl: string;
  postedBy: string;
  postedAt: string;
  likes: number;
  description: string;
  beds: number;
  baths: number;
  sqft: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isTyping?: boolean;
}

export interface DashboardStats {
  activeDeals: number;
  cashBuyers: number;
  pendingRevenue: number;
  aiSuggestions: number;
}

export enum AppRoute {
  LANDING = '/',
  DASHBOARD = '/dashboard',
  FEED = '/feed',
  NETWORK = '/network',
  TOOLKIT = '/toolkit',
  LOGIN = '/login'
}
