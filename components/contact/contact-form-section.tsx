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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(1, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  countryCode: z.string().optional(),
  subject: z.string().min(1, "Please enter a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactFormSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      countryCode: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);

      // PhoneInput already provides the full international format (e.g., +2348123456789)
      const phoneNumber = values.phone.trim();

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not configured");
      }

      await axios.post(`${apiUrl}/general/contact`, {
        full_name: values.name.trim(),
        email: values.email.trim(),
        phone_number: phoneNumber,
        subject: values.subject.trim(),
        message: values.message.trim(),
      });

      toast.success("Message sent successfully!", {
        description: "We'll get back to you soon",
        position: "top-center",
      });

      // Reset form without triggering validation
      form.reset({
        name: "",
        email: "",
        phone: "",
        countryCode: "",
        subject: "",
        message: "",
      });

      // Clear all form errors
      form.clearErrors();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Please try again later";

      toast.error("Something went wrong", {
        description: errorMessage,
        position: "top-center",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-[1352px] px-6 py-16 sm:px-10 lg:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-twklausanne text-3xl font-semibold text-[#101828] sm:text-4xl lg:text-5xl">
            Send us a Message
          </h2>
          <p className="text-base text-[#475467] sm:text-lg">
            Fill out the form below and we&apos;ll respond as soon as possible
          </p>
        </div>

        <div className="rounded-2xl border border-[#E1E4EA] bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-[#101828]">
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="John Doe"
                          className="h-11 rounded-[10px] border-[#E1E4EA] bg-white text-sm font-medium text-[#101828] placeholder:font-normal placeholder:text-[#A0A5B1] focus-visible:border-[#335CFF]"
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
                      <FormLabel className="text-sm font-medium text-[#101828]">
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          className="h-11 rounded-[10px] border-[#E1E4EA] bg-white text-sm font-medium text-[#101828] placeholder:font-normal placeholder:text-[#A0A5B1] focus-visible:border-[#335CFF]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#101828]">
                      Phone Number *
                    </FormLabel>
                    <FormControl>
                      <PhoneInput
                        defaultCountry="ng"
                        value={field.value}
                        onChange={(phoneValue, data) => {
                          field.onChange(phoneValue);
                          const rawDialCode = data.country?.dialCode ?? "";
                          const dialCode = rawDialCode
                            ? rawDialCode.startsWith("+")
                              ? rawDialCode
                              : `+${rawDialCode}`
                            : "";
                          form.setValue("countryCode", dialCode, {
                            shouldValidate: false,
                          });
                          // Only validate if there's a value
                          if (phoneValue) {
                            form.trigger("phone");
                          } else {
                            form.clearErrors("phone");
                          }
                        }}
                        onBlur={field.onBlur}
                        className="phoneInput w-full"
                        placeholder="(555) 000-0000"
                        inputClassName="h-11 w-full rounded-[10px] border border-[#E1E4EA] bg-white text-sm font-medium text-[#101828] outline-none placeholder:font-normal placeholder:text-[#A0A5B1] focus-visible:border-[#335CFF] focus-visible:ring-0"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#101828]">
                      Subject *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="What is this regarding?"
                        className="h-11 rounded-[10px] border-[#E1E4EA] bg-white text-sm font-medium text-[#101828] placeholder:font-normal placeholder:text-[#A0A5B1] focus-visible:border-[#335CFF]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#101828]">
                      Message *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="min-h-[150px] rounded-[10px] border-[#E1E4EA] bg-white text-sm font-medium text-[#101828] placeholder:font-normal placeholder:text-[#A0A5B1] focus-visible:border-[#335CFF] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 w-full rounded-[10px] bg-[#335CFF] text-sm font-semibold text-white hover:bg-[#2547D0] disabled:opacity-50 sm:w-auto sm:min-w-[200px]"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
