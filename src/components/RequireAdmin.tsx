import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface RequireAdminProps {
  children: React.ReactNode;
}

const RequireAdmin = ({ children }: RequireAdminProps) => {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) {
        setIsAdmin(false);
        setChecking(false);
        return;
      }

      try {
        // Check if user has admin role
        const { data, error } = await supabase
          .from("user_roles")
          .select("role")
          .eq("user_id", user.id)
          .eq("role", "admin")
          .maybeSingle();

        if (error) {
          console.error("Error checking admin role:", error);
          setIsAdmin(false);
          toast.error("Error checking permissions");
        } else if (data) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
          toast.error("Admin access required");
        }
      } catch (error) {
        console.error("Error in admin check:", error);
        setIsAdmin(false);
      } finally {
        setChecking(false);
      }
    };

    if (!authLoading) {
      checkAdminRole();
    }
  }, [user, authLoading]);

  if (authLoading || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

export default RequireAdmin;
