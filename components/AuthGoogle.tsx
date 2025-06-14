import { verticalScale } from "@/constants/sizes";
import { Image, TouchableOpacity } from "react-native";

        export default function GoogleAuth({signIn,signUp, loading, setLoading, setError}: { signIn?: any, signUp?: any, loading: boolean, setLoading: (loading: boolean) => void, setError: (error: string) => void}) {
  
    const googleAuth = async () => {
    
        setLoading(true);
        setError("");

        try {
          await (signIn || signUp).authenticateWithRedirect({
            strategy: "oauth_google",
            redirectUrl: "/",
            redirectUrlComplete: "/(tabs)",
          });
        } catch (err: any) {
          setError(err.message || "Something went wrong");
          setLoading(false);
        }
      };
    return (
        <TouchableOpacity onPress={googleAuth} disabled={loading} style={{ alignItems: "center",justifyContent: "center" }} >
            <Image source={require("../assets/google/ios_google_dark.png")} style={{ width:verticalScale(250),height: verticalScale(55) }} resizeMode="contain" />

        </TouchableOpacity>
    )
}
