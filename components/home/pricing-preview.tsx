"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "Perfect for small gyms and solo trainers.",
    features: [
      "Up to 100 members",
      "Basic attendance tracking",
      "Monthly billing",
      "Email support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "Best for growing fitness businesses.",
    features: [
      "Up to 500 members",
      "Trainer scheduling",
      "Advanced analytics",
      "Automated renewals",
      "Priority support",
    ],
    button: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large gym chains and franchises.",
    features: [
      "Unlimited members",
      "Multi-branch management",
      "Custom integrations",
      "Dedicated onboarding",
      "24/7 premium support",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

export default function PricingPreview() {
  return (
    <section className="relative overflow-hidden border-t bg-muted/30 py-24">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold text-primary">Simple Pricing</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Plans That Scale With Your Gym
          </h2>

          <p className="mt-4 text-muted-foreground">
            Choose the perfect FitSync plan for your gym, studio, or fitness
            business.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`relative rounded-3xl border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                plan.popular ? "ring-2 ring-primary" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-6 rounded-full px-3 py-1">
                  Most Popular
                </Badge>
              )}

              <h3 className="text-xl font-semibold">{plan.name}</h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-6">
                <span className="text-4xl font-bold">{plan.price}</span>

                {plan.price !== "Custom" && (
                  <span className="ml-1 text-muted-foreground">/month</span>
                )}
              </div>

              <ul className="mt-7 space-y-4">
                {plan.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8 w-full"
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="#">
                  {plan.button}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            No hidden fees. Cancel anytime. 14-day free trial included.
          </p>
        </div>
      </div>
    </section>
  );
}
