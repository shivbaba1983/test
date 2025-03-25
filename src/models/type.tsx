export interface User{
    userId: number;
  username: string;
  email: string;
  profile: {
    firstName: string;
    lastName: string;
    birthDate: string;
    gender: string;
    avatarUrl: string;
    bio: string;
  };
  preferences: {
    language: string;
    theme: string;
    notifications: {
      email: boolean;
      sms: boolean;
      push: boolean;
    };
    privacy: {
      showOnlineStatus: boolean;
      profileVisibility: string;
    };
  };
  accountStatus: {
    isActive: boolean;
    lastLogin: string;
    createdAt: string;
  };
  activityLogs: {
    timestamp: string;
    activity: string;
  }[];
}

export interface Tile {
  id: number;
  title: string;
  content: string;
}