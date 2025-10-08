import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

const Admin = () => {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!user) {
        navigate("/auth");
        return;
      }

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
        return;
      }

      if (!data) {
        setIsAdmin(false);
        // Not an admin, redirect to auth
        navigate("/auth");
      } else {
        setIsAdmin(true);
      }
    };

    if (!authLoading) {
      checkAdminRole();
    }
  }, [user, authLoading, navigate]);

  if (authLoading || isAdmin === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <main className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground mb-8">Manage your Creative Yard platform</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Contact Submissions</CardTitle>
                <CardDescription>View and manage contact form submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Access contact messages from potential clients
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blog Posts</CardTitle>
                <CardDescription>Create and edit blog content</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage your blog posts and articles
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Showcase your portfolio work</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Add and edit your project portfolio
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>Manage service offerings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Update your service descriptions and pricing
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage user roles and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Control access and user privileges
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>View site performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track visitors and engagement
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
