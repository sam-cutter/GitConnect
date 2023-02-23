"use client";

import { useSupabase } from "@/components/SupabaseProvider";

// Supabase auth needs to be triggered client-side
export default function SignIn() {
  const { supabase } = useSupabase();

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <main>
      <button onClick={handleGitHubLogin}>GitHub Login</button>
      <button onClick={handleLogout}>Logout</button>
    </main>
  );
}
