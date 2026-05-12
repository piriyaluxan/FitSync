import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "For small gyms and trainers",
    features: {
      members: "Up to 100",
      scheduling: true,
      billing: true,
      analytics: false,
      support: "Email",
    },
  },
  {
    name: "Pro",
    price: "$49",
    description: "For growing fitness businesses",
    features: {
      members: "Up to 500",
      scheduling: true,
      billing: true,
      analytics: true,
      support: "Priority",
    },
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For gym chains & franchises",
    features: {
      members: "Unlimited",
      scheduling: true,
      billing: true,
      analytics: true,
      support: "24/7 Dedicated",
    },
  },
];

const faqs = [
  {
    q: "Can I switch plans anytime?",
    a: "Yes, you can upgrade or downgrade your plan at any time.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, all plans include a 14-day free trial with full access.",
  },
  {
    q: "Do you offer refunds?",
    a: "We offer refunds within the first 7 days if you're not satisfied.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription anytime with no hidden fees.",
  },
];

export default function PricingPage() {
  return (
    <main className="container mx-auto px-4 py-24 space-y-24">
      {/* HEADER */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-muted-foreground">
          Choose the plan that fits your gym size and scale as you grow.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border rounded-3xl p-6 shadow-sm hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-sm text-muted-foreground mt-1">
              {plan.description}
            </p>

            <div className="text-3xl font-bold mt-6">{plan.price}</div>

            <button className="mt-6 w-full bg-primary text-primary-foreground py-2 rounded-xl">
              Get Started
            </button>
          </div>
        ))}
      </section>

      {/* COMPARISON TABLE */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8">
          Feature Comparison
        </h2>

        <div className="overflow-x-auto border rounded-2xl">
          <table className="w-full text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="p-4 text-left">Features</th>
                {plans.map((p) => (
                  <th key={p.name} className="p-4 text-center">
                    {p.name}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="p-4">Members</td>
                {plans.map((p) => (
                  <td key={p.name} className="p-4 text-center">
                    {p.features.members}
                  </td>
                ))}
              </tr>

              <tr className="border-t">
                <td className="p-4">Scheduling</td>
                {plans.map((p) => (
                  <td key={p.name} className="p-4 text-center">
                    {p.features.scheduling ? (
                      <Check className="mx-auto text-green-500" />
                    ) : (
                      <X className="mx-auto text-red-500" />
                    )}
                  </td>
                ))}
              </tr>

              <tr className="border-t">
                <td className="p-4">Billing</td>
                {plans.map((p) => (
                  <td key={p.name} className="p-4 text-center">
                    {p.features.billing ? (
                      <Check className="mx-auto text-green-500" />
                    ) : (
                      <X className="mx-auto text-red-500" />
                    )}
                  </td>
                ))}
              </tr>

              <tr className="border-t">
                <td className="p-4">Analytics</td>
                {plans.map((p) => (
                  <td key={p.name} className="p-4 text-center">
                    {p.features.analytics ? (
                      <Check className="mx-auto text-green-500" />
                    ) : (
                      <X className="mx-auto text-red-500" />
                    )}
                  </td>
                ))}
              </tr>

              <tr className="border-t">
                <td className="p-4">Support</td>
                {plans.map((p) => (
                  <td key={p.name} className="p-4 text-center">
                    {p.features.support}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border rounded-2xl p-4">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="text-sm text-muted-foreground mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
