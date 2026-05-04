"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Users,
  CalendarCheck,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardShowcase() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute right-10 top-20 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl border bg-background p-5 shadow-2xl">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Performance Dashboard
                  </p>
                  <h3 className="text-2xl font-bold">FitSync Analytics</h3>
                </div>

                <div className="rounded-2xl bg-primary/10 p-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </div>

              {/* Top Stats */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border p-4">
                  <p className="text-xs text-muted-foreground">Revenue</p>
                  <p className="mt-1 text-xl font-bold">$18.4k</p>
                  <p className="text-xs text-green-500">+12%</p>
                </div>

                <div className="rounded-2xl border p-4">
                  <p className="text-xs text-muted-foreground">Members</p>
                  <p className="mt-1 text-xl font-bold">542</p>
                  <p className="text-xs text-green-500">+31</p>
                </div>

                <div className="rounded-2xl border p-4">
                  <p className="text-xs text-muted-foreground">Retention</p>
                  <p className="mt-1 text-xl font-bold">92%</p>
                  <p className="text-xs text-green-500">Excellent</p>
                </div>
              </div>

              {/* Activity */}
              <div className="mt-5 rounded-2xl border p-4">
                <p className="mb-4 text-sm font-medium">Today’s Activity</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                    <span className="text-sm">Morning Yoga</span>
                    <span className="text-sm">42 Joined</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                    <span className="text-sm">CrossFit Session</span>
                    <span className="text-sm">28 Joined</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-muted px-3 py-2">
                    <span className="text-sm">Payments Received</span>
                    <span className="text-sm">$2,480</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -left-5 top-10 rounded-2xl border bg-background px-4 py-3 shadow-lg">
              <p className="text-xs text-muted-foreground">New Members</p>
              <p className="text-lg font-bold">+18 Today</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary">
              Powerful Dashboard
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Control Your Entire Gym from One Smart Dashboard
            </h2>

            <p className="mt-5 text-lg text-muted-foreground">
              Track revenue, manage schedules, monitor attendance, and grow your
              fitness business with real-time insights.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <Users className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">Member Insights</h4>
                  <p className="text-sm text-muted-foreground">
                    View active members, renewals, and engagement instantly.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CalendarCheck className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">Trainer Scheduling</h4>
                  <p className="text-sm text-muted-foreground">
                    Organize sessions and staff calendars with ease.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Wallet className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">Automated Billing</h4>
                  <p className="text-sm text-muted-foreground">
                    Collect subscriptions and manage invoices automatically.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="mt-1 h-5 w-5 text-primary" />
                <div>
                  <h4 className="font-semibold">Secure & Reliable</h4>
                  <p className="text-sm text-muted-foreground">
                    Your data stays protected with enterprise-grade security.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="#">
                  Explore Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
