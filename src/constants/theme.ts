 export type Theme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    card: string;
    text: string;
    textSecondary: string;
    border: string;
    success: string;
    error: string;
    warning: string;
    accent: string;
  }
  shadows: {
    sm: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    }
    md: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    }
    lg: {
      shadowColor: string;
      shadowOffset: { width: number; height: number };
      shadowOpacity: number;
      shadowRadius: number;
      elevation: number;
    }
  }
}

export const theme = {
  colors: {
    // primary: isDark ? "#60A5FA" : "#3B82F6",
    // secondary: isDark ? "#A78BFA" : "#8B5CF6",
    // background: isDark ? "#111827" : "#FFFFFF",
    // surface: isDark ? "#1F2937" : "#F9FAFB",
    // card: isDark ? "#374151" : "#FFFFFF",
    // text: isDark ? "#F9FAFB" : "#111827",
    // textSecondary: isDark ? "#9CA3AF" : "#6B7280",
    // border: isDark ? "#4B5563" : "#E5E7EB",
    // success: isDark ? "#34D399" : "#10B981",
    // warning: isDark ? "#FBBF24" : "#F59E0B",
    // error: isDark ? "#F87171" : "#EF4444",
    // accent: isDark ? "#22D3EE" : "#06B6D4",
    primary: "#6366F1", // Indigo
    secondary: "#8B5CF6", // Purple
    background: "#1F2937", // Dark gray-blue
    surface: "#374151", // Slightly lighter gray-blue
    card: "#2D3748", // Medium gray-blue
    text: "#F3F4F6", // Almost white
    textSecondary: "#9CA3AF", // Gray
    border: "#4B5563", // Medium gray
    success: "#34D399", // Teal
    error: "#F87171", // Red
    yellow: "#FBBF24", // Amber
    accent: "#22D3EE", // Cyan
  },
  
  shadows: {
    sm: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      elevation: 4,
    },
    lg: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 8,
    },
  },
}