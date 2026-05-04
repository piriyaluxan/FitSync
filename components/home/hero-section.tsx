"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, Users, CreditCard, BarChart3 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-5 rounded-full px-4 py-1 text-sm">
              Trusted by modern gyms
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Run Your Gym{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Smarter
              </span>{" "}
              with FitSync
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Manage members, trainers, schedules, billing, and performance
              analytics — all from one powerful platform built for fitness
              businesses.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="#">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div>✔ No credit card required</div>
              <div>✔ 14-day free trial</div>
              <div>✔ Cancel anytime</div>
            </div>
          </motion.div>

          {/* Right Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border bg-background p-5 shadow-2xl">
              {/* Top */}
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Monthly Revenue
                  </p>
                  <h3 className="text-2xl font-bold">$12,480</h3>
                </div>

                <div className="rounded-xl bg-primary/10 p-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Mini Stats */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Members</span>
                  </div>
                  <p className="text-2xl font-bold">326</p>
                  <p className="text-xs text-muted-foreground">
                    +24 this month
                  </p>
                </div>

                <div className="rounded-2xl border p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Subscriptions</span>
                  </div>
                  <p className="text-2xl font-bold">281</p>
                  <p className="text-xs text-muted-foreground">
                    Auto-renew active
                  </p>
                </div>
              </div>

              {/* Schedule */}
              <div className="mt-4 rounded-2xl border p-4">
                <p className="text-sm font-medium">Today’s Classes</p>

                <div className="mt-3 space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                    <span>Yoga Session</span>
                    <span>08:00 AM</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                    <span>CrossFit</span>
                    <span>05:30 PM</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                    <span>Zumba</span>
                    <span>07:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -right-4 -top-4 rounded-2xl border bg-background px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground">New Signups</p>
              <p className="text-lg font-bold">+42</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
