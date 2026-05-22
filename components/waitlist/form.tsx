"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormItem,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import logoTransparent from "@/public/logo-transparent.svg";
import Image from "next/image";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1, "Please input your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(8, "Please your phone number should be at least 8 characters"),
  countryCode: z.string().optional(),
});

const WaitlistForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      setIsLoading(true);
      const trimmedPhone = values.phone.trim();
      const trimmedCountryCode = values.countryCode?.trim() ?? "";
      const localPhone = (() => {
        if (!trimmedCountryCode) {
          return trimmedPhone;
        }

        if (trimmedPhone.startsWith(trimmedCountryCode)) {
          return trimmedPhone.slice(trimmedCountryCode.length).trimStart();
        }

        const codeWithoutPlus = trimmedCountryCode.replace(/^\+/, "");
        if (codeWithoutPlus && trimmedPhone.startsWith(codeWithoutPlus)) {
          return trimmedPhone.slice(codeWithoutPlus.length).trimStart();
        }

        return trimmedPhone;
      })();

      console.log(localPhone, "local phone");

      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/general/waitlist`, {
          name: values.name,
          phone_number: localPhone,
          email: values.email,
          country_code: values.countryCode,
        })
        .then((res) => {
          //   console.log(res);
          toast.success("You are now on the waitlist", {
            description: "We will notify you when we launch",
            position: "top-center",
          });
        })
        .catch((err) => {
          //   console.log(err);
          toast.error("Something went wrong", {
            description: "Please try again",
            position: "top-center",
          });
        });
    } catch (error) {
      //   console.log(error);
      toast.error("Something went wrong", {
        description: "Please try again",
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
      form.reset();
    }
  };

  return (
    <div className="relative w-full h-full justify-center flex-col items-center flex">
      <div className="flex flex-col items-start md:items-center justify-center max-w-[376px] mx-auto w-full pb-6 sm:border-b border-b-[#E1E4EA] text-center">
        <Image
          src={logoTransparent.src}
          alt="logo"
          width={100}
          height={100}
          className="h-full w-20 mb-2"
        />
        <h1 className="text-[#0E121B] font-medium text-2xl mb-1">
          Get early access
        </h1>
        <p className="text-[#525866] text-base md:text-center text-start">
          Be one of the first to get access to uzel
        </p>
      </div>
      <div className="max-w-[376px] mx-auto w-full pt-6 ">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#0E121B]">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      className="h-10 rounded-[10px] border-[#E1E4EA] bg-white text-sm font-medium text-[#0E121B] placeholder:font-normal placeholder:text-[#A0A5B1]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#0E121B]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your Email"
                      className="h-10 rounded-[10px] border-[#E1E4EA] bg-white text-sm font-medium text-[#0E121B] placeholder:font-normal placeholder:text-[#A0A5B1]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#0E121B]">
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      defaultCountry="ng"
                      {...field}
                      onChange={(phoneValue, data) => {
                        field.onChange(phoneValue);
                        const rawDialCode = data.country?.dialCode ?? "";
                        const dialCode = rawDialCode
                          ? rawDialCode.startsWith("+")
                            ? rawDialCode
                            : `+${rawDialCode}`
                          : "";
                        form.setValue("countryCode", dialCode, {
                          shouldValidate: true,
                        });
                      }}
                      className="phoneInput w-full"
                      placeholder="(555) 000-0000"
                      inputClassName="h-10 w-full rounded-[10px] border border-[#E1E4EA] bg-white text-sm font-medium text-[#0E121B] outline-none placeholder:font-normal placeholder:text-[#A0A5B1] focus-visible:border-[#335CFF] focus-visible:ring-0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center justify-center mt-auto md:h-full h-[calc(100dvh-520px)]">
              <Button
                type="submit"
                className="h-10 w-full mt-auto text-sm bg-linear-to-r from-[#335CFF] to-[#427EFF]  font-medium "
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default WaitlistForm;
