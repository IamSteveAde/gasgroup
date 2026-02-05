"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function PolicySection({ title, children }: SectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-6 pt-2 text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-10">
          Chuks AI – Website Policies & Legal Information
        </h1>

        <div className="space-y-6">

          {/* 1.0 TERMS OF SERVICE */}
          <PolicySection title="1.0 Terms of Service">
            <p>
              Chuks AI is a paid, AI-powered digital service designed to assist users
              with automation, content generation, and decision-support tools.
              By accessing or using the platform, you agree to be legally bound by
              these Terms of Service.
            </p>

            <h3 className="font-semibold mt-4">1.1 Service Overview</h3>
            <p>
              Chuks AI provides automated AI-driven outputs for personal and business
              use. Access to features is granted only after successful payment.
              We reserve the right to modify, suspend, or discontinue any part of
              the service at our discretion.
            </p>

            <h3 className="font-semibold mt-4">1.2 Eligibility</h3>
            <ul className="list-disc pl-6">
              <li>Users must be at least 18 years of age.</li>
              <li>The service is currently intended for use within Nigeria.</li>
            </ul>

            <h3 className="font-semibold mt-4">1.3 Account Responsibility</h3>
            <p>
              You are solely responsible for maintaining the confidentiality of
              your account credentials and for all activities carried out under
              your account. Chuks AI will not be liable for unauthorized access
              resulting from user negligence.
            </p>

            <h3 className="font-semibold mt-4">1.4 Acceptable Use</h3>
            <p>Users must not use Chuks AI for:</p>
            <ul className="list-disc pl-6">
              <li>Fraud, impersonation, or unlawful activities</li>
              <li>Harassment, hate speech, or abusive conduct</li>
              <li>Malware creation, hacking, or cybersecurity attacks</li>
              <li>Training, reverse-engineering, or replicating competing AI systems</li>
            </ul>

            <h3 className="font-semibold mt-4">1.5 AI Limitations</h3>
            <p>
              AI-generated outputs may be inaccurate, incomplete, or inappropriate
              for specific professional or regulated use cases. Users must apply
              independent judgment and seek professional advice where necessary.
            </p>

            <h3 className="font-semibold mt-4">1.6 Intellectual Property</h3>
            <p>
              All platform technology, systems, and branding belong to Chuks AI.
              Users retain rights to their generated content but may not resell,
              sublicense, or replicate the service itself.
            </p>

            <h3 className="font-semibold mt-4">1.7 Suspension & Termination</h3>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these terms, without notice or refund.
            </p>

            <h3 className="font-semibold mt-4">1.8 Governing Law</h3>
            <p>
              These terms are governed by and construed in accordance with the
              laws of the Federal Republic of Nigeria.
            </p>
          </PolicySection>

          {/* 2.0 PRIVACY POLICY */}
          <PolicySection title="2.0 Privacy Policy">
            <p>
              Chuks AI is committed to protecting user privacy and complying with
              the Nigeria Data Protection Act (NDPA).
            </p>

            <h3 className="font-semibold mt-4">2.1 Data Collected</h3>
            <ul className="list-disc pl-6">
              <li>Personal identification information</li>
              <li>Contact details such as email and phone number</li>
              <li>Payment and billing information</li>
              <li>Usage logs, prompts, and interaction data</li>
              <li>Device and browser information</li>
            </ul>

            <h3 className="font-semibold mt-4">2.2 Use of Data</h3>
            <ul className="list-disc pl-6">
              <li>Service delivery and improvement</li>
              <li>Customer support and communication</li>
              <li>Fraud prevention and security monitoring</li>
            </ul>

            <h3 className="font-semibold mt-4">2.3 Data Storage & Security</h3>
            <p>
              We implement commercially reasonable security measures to protect
              user data. However, no system can be guaranteed to be 100% secure.
            </p>

            <h3 className="font-semibold mt-4">2.4 Data Sharing</h3>
            <p>
              We do not sell user data. Limited sharing may occur with trusted
              third parties such as payment processors, cloud infrastructure
              providers, or legal authorities when required by law.
            </p>

            <h3 className="font-semibold mt-4">2.5 User Rights</h3>
            <p>
              Users may request access, correction, deletion, or account closure
              by contacting: <strong>support@chuks.ai</strong>
            </p>
          </PolicySection>

          {/* 3.0 PRICING & BILLING */}
          <PolicySection title="3.0 Pricing, Billing & Subscription Policy">
            <p>
              All payments are processed in Nigerian Naira (₦) through approved
              payment gateways.
            </p>

            <p>
              Subscription plans may be monthly, annual, or usage-based and renew
              automatically unless cancelled before the renewal date.
            </p>

            <p>
              Cancellation stops future charges but does not entitle the user to
              refunds for the current billing period.
            </p>
          </PolicySection>

          {/* 4.0 REFUND POLICY */}
          <PolicySection title="4.0 Refund Policy">
            <p>
              Due to the nature of digital AI services, all payments are
              non-refundable once access is granted.
            </p>

            <p>
              Refunds may only be issued for confirmed billing errors or duplicate
              charges, subject to review.
            </p>

            <p>
              Requests must be submitted within 7 days to:
              <strong> support@chuks.ai</strong>
            </p>
          </PolicySection>

          {/* 5.0 ACCEPTABLE USE */}
          <PolicySection title="5.0 Acceptable Use Policy">
            <p>
              Users must use Chuks AI responsibly, ethically, and in compliance
              with all applicable laws.
            </p>

            <ul className="list-disc pl-6">
              <li>No harmful or misleading content</li>
              <li>No political manipulation or misinformation</li>
              <li>No professional advice presented as authoritative</li>
              <li>No illegal or unethical activities</li>
            </ul>
          </PolicySection>

          {/* 6.0 AI ETHICS */}
          <PolicySection title="6.0 AI Ethics & Responsible Use">
            <p>
              Chuks AI promotes responsible AI usage. All outputs are informational
              and must not replace qualified human judgment.
            </p>
          </PolicySection>

          {/* 7.0 DISCLAIMER */}
          <PolicySection title="7.0 Disclaimer & Limitation of Liability">
            <p>
              Chuks AI is provided on an “as-is” and “as-available” basis. We make
              no warranties regarding accuracy, reliability, or suitability.
            </p>

            <p>
              To the fullest extent permitted by law, Chuks AI shall not be liable
              for any direct, indirect, incidental, or consequential damages
              arising from the use of the platform.
            </p>
          </PolicySection>

          {/* 8.0 CONTACT */}
          <PolicySection title="8.0 Contact & Support">
            <p>
              For questions regarding these policies, account issues, billing
              inquiries, or legal concerns, please contact our support team.
            </p>

            <p>
              📧 <strong>Email:</strong> support@chuks.ai
            </p>

            <p>
              We aim to respond to all legitimate requests within a reasonable
              timeframe.
            </p>
          </PolicySection>

        </div>
      </div>
    </div>
  );
}
