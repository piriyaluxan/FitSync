"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Mail, Phone, MapPin } from "lucide-react";

export default function CtaFooter() {
  return (
    <footer className="relative overflow-hidden border-t bg-background">
      {/* CTA SECTION */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Transform Your Gym?
            </h2>

            <p className="mt-4 text-muted-foreground">
              Join modern fitness businesses using FitSync to manage members,
              trainers, billing, and growth — all in one platform.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <div className="border-t">
        <div className="container mx-auto grid gap-10 px-4 py-16 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold">
              <Dumbbell className="h-5 w-5 text-primary" />
              FitSync
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Modern gym management SaaS helping fitness businesses grow smarter
              and faster.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/features">Features</Link>
              </li>
              <li>
                <Link href="/pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact</h4>

            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                support@fitsync.com
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +94 77 123 4567
              </div>

              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Colombo, Sri Lanka
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-foreground md:flex-row">
            <p>© {new Date().getFullYear()} FitSync. All rights reserved.</p>

            <div className="flex gap-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
