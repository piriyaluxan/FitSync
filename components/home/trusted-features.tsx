"use client";

import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  CreditCard,
  Dumbbell,
  BarChart3,
  Smartphone,
} from "lucide-react";

const brands = [
  "PowerGym",
  "IronFit",
  "Elite Club",
  "Prime Fitness",
  "Titan Gym",
  "FlexZone",
];

const features = [
  {
    icon: Users,
    title: "Member Management",
    description:
      "Store member profiles, plans, renewals, attendance history, and progress in one place.",
  },
  {
    icon: CalendarDays,
    title: "Trainer Scheduling",
    description:
      "Manage trainer availability, sessions, and bookings with an easy calendar system.",
  },
  {
    icon: CreditCard,
    title: "Subscription Billing",
    description:
      "Automate monthly memberships, reminders, and payment tracking effortlessly.",
  },
  {
    icon: Dumbbell,
    title: "Workout Plans",
    description:
      "Create custom workout programs for clients and track performance improvements.",
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description:
      "Monitor growth, revenue, retention, and attendance through visual dashboards.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Members and trainers can manage schedules and plans from any device.",
  },
];

export default function TrustedFeatures() {
  return (
    <section className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-20">
        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by 500+ gyms worldwide
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((brand) => (
              <div
                key={brand}
                className="rounded-2xl border bg-background px-4 py-5 text-sm font-semibold text-muted-foreground shadow-sm transition hover:text-foreground"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features Preview */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="text-sm font-semibold text-primary">
              Powerful Features
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Grow Your Gym
            </h2>

            <p className="mt-4 text-muted-foreground">
              Replace spreadsheets and manual work with one smart platform built
              for gyms, trainers, and fitness businesses.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl border bg-background p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl bg-primary/10 p-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
