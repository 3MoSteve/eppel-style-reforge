import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Login logic will be implemented with backend
    setTimeout(() => {
      toast.success("Login erfolgreich!");
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Signup logic will be implemented with backend
    setTimeout(() => {
      toast.success("Konto erfolgreich erstellt!");
      setIsLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="card-elegant p-8 bg-card">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold font-serif mb-2">
              <span className="text-primary">Eppel</span>
              <span className="text-accent">Style</span>
            </h1>
            <p className="text-muted-foreground">Willkommen zurück!</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Anmelden</TabsTrigger>
              <TabsTrigger value="signup">Registrieren</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail</label>
                  <Input type="email" placeholder="max@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Passwort</label>
                  <Input type="password" placeholder="••••••••" required />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Wird angemeldet..." : "Anmelden"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Vollständiger Name</label>
                  <Input placeholder="Max Mustermann" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">E-Mail</label>
                  <Input type="email" placeholder="max@example.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefon (optional)</label>
                  <Input type="tel" placeholder="+49 123 456789" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Passwort</label>
                  <Input type="password" placeholder="••••••••" required minLength={8} />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Wird erstellt..." : "Konto erstellen"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Mit der Registrierung stimmst du unseren Nutzungsbedingungen zu.
                </p>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Button variant="link" onClick={() => navigate("/")} className="text-sm">
              Zurück zur Startseite
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
