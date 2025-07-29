import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff, Mail, Lock, TrendingUp, Zap } from "lucide-react"
import { Background3D } from "./Background3D"
import { useToast } from "@/hooks/use-toast"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular login
    await new Promise(resolve => setTimeout(resolve, 2000))

    toast({
      title: "🚀 Acesso Liberado!",
      description: "Dashboard carregando... Prepare-se para decolar!",
    })

    setIsLoading(false)
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-background flex items-center justify-center">
        <div className="w-full max-w-md animate-pulse">
          <div className="bg-card/50 h-96 rounded-2xl"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-background flex items-center justify-center p-4 relative overflow-hidden">
      <Background3D />

      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo e título */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-hero rounded-2xl shadow-glow mb-4 animate-float relative">
            <TrendingUp className="w-10 h-10 text-primary-foreground animate-pulse" />
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Zap className="w-3 h-3 text-yellow-900" />
            </div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">
            Despachante Marcelino
          </h1>
          <p className="text-lg font-semibold text-primary mb-1">
            Portal de Gestão
          </p>
        </div>

        {/* Formulário de login */}
        <Card className="backdrop-blur-sm bg-card/80 border border-primary/20 shadow-elegant animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              Login
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo Email */}
              <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                </div>
              </div>

              {/* Campo Senha */}
              <div className="space-y-2 animate-slide-in-right" style={{ animationDelay: "0.6s" }}>
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10 bg-background/50 border-primary/20 focus:border-primary"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 h-4 w-4 text-muted-foreground hover:text-primary"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Botão de envio */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full animate-slide-in-right"
                style={{ animationDelay: "1s" }}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Processando...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Acelerar Acesso
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Rodapé */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: "1.8s" }}>
          <p className="text-xs text-muted-foreground">
            © 2024 Despachante Marcelino. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  )
}
