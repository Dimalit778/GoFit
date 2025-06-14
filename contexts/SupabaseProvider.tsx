
import { client } from "@/lib/supabase";
import { useUser } from "@clerk/clerk-expo";
import { createContext, useContext } from "react";
const SupabaseContext = createContext<any>(null);
export function useSupabase() {
    return useContext(SupabaseContext);
  }
export const SupabaseProvider = ({ children }: any) => {
 const { user } = useUser();




  
    const getProfile = async ( ) => {
      try {
        const { data, error } = await client.from('profiles').select('*').eq('user_id', user?.id);
        if (error) {
            console.error(error);
            return null;
        }
        return data;  
    } catch (error) {
        console.error(error);
        return null;
    }
    }
    const createProfile = async (profile: any) => { 
        try {
            const { data, error } = await client.from('profiles').insert(profile);
            console.log("createProfile --- data", data);
        if (error) {
            console.error(error);
            console.log("createProfile --- error", error);
            return null;
        }
            return data;
        } catch (error) {
            console.error(error);
            console.log("createProfile --- Global error", error);
            return null;
        }
    }
    
    const value = { 
    
        getProfile,
        createProfile
    }
    return <SupabaseContext.Provider value={value}>{children}</SupabaseContext.Provider>;
};