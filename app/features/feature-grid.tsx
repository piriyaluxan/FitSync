"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  CreditCard,
  Dumbbell,
  BarChart3,
  Smartphone,
  ShieldCheck,
  Bell,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Member Management",
    description:
      "Manage all gym members with profiles, subscriptions, attendance, and progress tracking in one place.",
  },
  {
    icon: CalendarDays,
    title: "Trainer Scheduling",
    description:
      "Easily assign trainers, manage sessions, and avoid scheduling conflicts with smart calendar tools.",
  },
  {
    icon: CreditCard,
    title: "Automated Billing",
    description:
      "Handle subscriptions, payments, renewals, and invoices automatically without manual effort.",
  },
  {
    icon: Dumbbell,
    title: "Workout Plans",
    description:
      "Create personalized workout programs and assign them to members or groups.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track revenue, attendance, retention, and gym performance with real-time insights.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Members and trainers can access schedules, workouts, and updates from any device.",
  },
  {
    icon: ShieldCheck,
    title: "Secure System",
    description:
      "Enterprise-grade security ensures member data and payments are fully protected.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Automated reminders for renewals, classes, payments, and important updates.",
  },
  {
    icon: Activity,
    title: "Live Activity Tracking",
    description:
      "Monitor gym activity in real time including attendance and engagement trends.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 border-t bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold text-primary">
            All-in-One Platform
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Powerful Features Built for Modern Gyms
          </h2>

          <p className="mt-4 text-muted-foreground">
            Everything you need to run and scale your fitness business
            efficiently.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-3xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3 group-hover:bg-primary/20 transition">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm text-muted-foreground leading-6">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
