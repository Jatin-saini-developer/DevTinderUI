import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CardDemo() {
  return (
    <Card className="bg-zinc-900 border-zinc-800 shadow-xl text-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold mb-1">
          Login to your account
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-pink-600 focus-visible:ring-0 text-white placeholder-gray-500"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" className="text-gray-300">
                Password
              </Label>
              <a
                href="#"
                className="text-sm text-pink-500 hover:underline underline-offset-4"
              >
                Forgot password?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              required
              className="bg-zinc-800 border-zinc-700 focus:border-pink-600 focus-visible:ring-0 text-white"
            />
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex flex-col gap-3">
        <Button
          type="submit"
          className="w-full bg-gradient-to-r from-rose-600 to-pink-600 hover:opacity-90 transition-all"
        >
          Login
        </Button>

        <Button
          variant="outline"
          className="w-full border-zinc-700 text-gray-300 hover:bg-zinc-800"
        >
          Login with Google
        </Button>

        <p className="text-sm text-gray-400 text-center mt-2">
          Don't have an account?{" "}
          <a href="#" className="text-pink-500 hover:underline">
            Sign Up
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
