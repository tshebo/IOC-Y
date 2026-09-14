"use client";
import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setLoading(true);
    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_e77viqg",
          "template_vy09n8k",
          form.current,
          "G8N3YyLXXwsMoVWN5"
        );
        setShowAlert(true);
        reset();
        setTimeout(() => setShowAlert(false), 3000);
      }
    } catch (error) {
      alert("Failed to send the message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      <div className="mb-8">
        <h2 className="text-sm font-medium tracking-widest uppercase text-primary mb-2">
          Send a Message
        </h2>
        <p className="text-sm text-muted-foreground">
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              className="h-11 rounded-xl bg-background border-border focus:border-primary/40"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-xs text-destructive">{errors.name.message}</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email"
              className="h-11 rounded-xl bg-background border-border focus:border-primary/40"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-xs text-destructive">{errors.email.message}</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Your phone number"
            className="h-11 rounded-xl bg-background border-border focus:border-primary/40"
            {...register("phone", { required: "Phone is required" })}
          />
          {errors.phone && (
            <span className="text-xs text-destructive">{errors.phone.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="text-sm font-medium text-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="How can we help you?"
            className="min-h-[140px] rounded-xl bg-background border-border focus:border-primary/40 resize-none"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <span className="text-xs text-destructive">{errors.message.message}</span>
          )}
        </div>

        <Button
          type="submit"
          className="w-full h-12 rounded-xl text-sm font-medium gap-2 mt-2"
          disabled={loading}
        >
          {loading ? (
            "Sending..."
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>

      {/* Success toast */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-lg transition-all duration-300 ${
          showAlert
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
        <div>
          <p className="text-sm font-medium text-foreground">Message sent</p>
          <p className="text-xs text-muted-foreground">
            We&apos;ll get back to you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}
