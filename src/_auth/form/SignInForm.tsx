// import { Button } from "@/components/ui/button";

// const SignInForm = () => {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   );
// };

// export default SignInForm;

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInFormValidation } from "@/lib/validation";
import { z } from "zod";
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";
import { createUserAccount } from "@/lib/appwrite/api";

const SignupForm = () => {
  const form = useForm<z.infer<typeof signInFormValidation>>({
    resolver: zodResolver(signInFormValidation),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInFormValidation>) {
    const newUser = await createUserAccount(values);

    console.log(newUser);
  }

  const isLoading = false;

  return (
    <Form {...form}>
      <div className="flex flex-col justify-center ">
        <img src="/public/assets/images/logo.svg" alt="img" />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-5">
          Create a new account
        </h2>
        <p className="text-light-3 small-medium md:base-regular sm:mb-5">
          To use snapgram enter your detail
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your Email address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="shad-input"
                    placeholder="Enter your Email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    className="shad-input"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary w-full">
            {isLoading ? <Loader></Loader> : "Sign in"}
          </Button>
          <p>
            Doesnot have an account?
            <Link
              to="/sign-up"
              className="ml-2 text-light-3 hover:text-light-4"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};

export default SignupForm;
