"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const testimonials = [
  {
    name: "Daniel Perera",
    role: "Owner, PowerGym",
    quote:
      "FitSync helped us manage 300+ members with zero chaos. Billing and attendance are now effortless.",
  },
  {
    name: "Nisha Fernando",
    role: "Manager, Prime Fitness",
    quote:
      "Our trainers love the scheduling system. We save hours every week and members stay more engaged.",
  },
  {
    name: "Arjun Silva",
    role: "Founder, Titan Gym",
    quote:
      "The dashboard insights helped us increase renewals and grow monthly revenue consistently.",
  },
];

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes. FitSync offers a 14-day free trial with full access to key features.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Absolutely. You can upgrade, downgrade, or cancel anytime with no hidden fees.",
  },
  {
    question: "Can trainers have separate logins?",
    answer:
      "Yes. Trainers can access schedules, assigned members, and progress tools through separate accounts.",
  },
  {
    question: "Does FitSync support multiple branches?",
    answer:
      "Yes. Our Enterprise plan supports multi-branch gym management with centralized reporting.",
  },
];

export default function TestimonialsFaq() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold text-primary">Customer Success</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Modern Gyms Worldwide
          </h2>

          <p className="mt-4 text-muted-foreground">
            See why fitness businesses choose FitSync to simplify operations and
            grow faster.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current text-primary" />
                ))}
              </div>

              <p className="text-sm leading-7 text-muted-foreground">
                “{item.quote}”
              </p>

              <div className="mt-6">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-24 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm font-semibold text-primary">
              Frequently Asked Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything You Need to Know
            </h2>

            <p className="mt-4 text-muted-foreground">
              Quick answers about pricing, accounts, and getting started.
            </p>
          </motion.div>

          <div className="mt-10 rounded-3xl border bg-background p-4 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="px-3"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
