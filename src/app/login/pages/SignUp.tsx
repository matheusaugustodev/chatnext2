import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import Forms from "./signup/Forms";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Username must be at least 50 characters.",
    }),
});

const setToken = () => {
  localStorage.setItem("token", "12345");
};

export default function SignUp({ AcessSign }) {
  return (
    <>
      <Card onClick={setToken} className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>User your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <Forms />
          {/* <div className='flex flex-col gap-2'>
                        <Label htmlFor="Name">Name</Label>
                        <Input type='Name' placeholder='Name'></Input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="Email">Email</Label>
                        <Input type='Email' placeholder='Email'></Input>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Label htmlFor="Password">Password</Label>
                        <Input type='Password' placeholder='Password'></Input>
                    </div>
                    <Button>Sign Up</Button> */}
        </CardContent>
      </Card>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Do you have a account?</CardTitle>
          <CardDescription>Joy using your account</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Button onClick={AcessSign}>Sign In</Button>
        </CardContent>
      </Card>
    </>
  );
}
