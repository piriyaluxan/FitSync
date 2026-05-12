"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, CalendarDays, CreditCard, BarChart3 } from "lucide-react";

export default function FeaturesHero() {
  return (
    <section className="relative overflow-hidden border-b">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <Badge className="rounded-full px-4 py-1 text-sm">
            Powerful SaaS Features
          </Badge>

          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Everything Your Gym Needs to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Operate Smarter
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            FitSync helps gyms, fitness clubs, and personal trainers manage
            members, schedules, billing, analytics, and business growth — all
            from one powerful platform.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          <div className="rounded-3xl border bg-background p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3">
              <Users className="h-5 w-5 text-primary" />
            </div>

            <h3 className="text-2xl font-bold">10K+</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Active gym members managed through FitSync.
            </p>
          </div>

          <div className="rounded-3xl border bg-background p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3">
              <CalendarDays className="h-5 w-5 text-primary" />
            </div>

            <h3 className="text-2xl font-bold">25K+</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Trainer sessions and schedules organized monthly.
            </p>
          </div>

          <div className="rounded-3xl border bg-background p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3">
              <CreditCard className="h-5 w-5 text-primary" />
            </div>

            <h3 className="text-2xl font-bold">$1.2M+</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Membership payments processed securely every year.
            </p>
          </div>

          <div className="rounded-3xl border bg-background p-6 shadow-sm">
            <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>

            <h3 className="text-2xl font-bold">92%</h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Average customer retention rate using FitSync.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
