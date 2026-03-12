import Footer from '../components/Footer';


export const metadata = {
    title: "Terms and Conditions | MySteelIndia",
    description: "Terms and Conditions for mysteelindia.in",
};

export default function TermsConditions() {
    return (
        <div>
            <div className="max-w-5xl mx-auto px-6 py-14 text-gray-700">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                    Terms and Conditions
                </h1>

                <p className="text-sm text-gray-500 mb-6">
                    <strong>Effective Date:</strong> March 8, 2026
                </p>

                <p className="mb-6">
                    These Terms and Conditions ("Terms") govern your use of mysteelindia.in
                    ("Site"), operated by MySteel India. By registering or transacting, you
                    agree to these Terms, IT Act, and Indian Contract Act, 1872.
                </p>

                {/* Eligibility */}
                <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
                    Eligibility and Account
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Must be 18+ and a registered scrap dealer with valid GST/PAN.</li>
                    <li>
                        Provide accurate KYC; false info leads to account suspension.
                    </li>
                    <li>
                        You control account security; notify us of breaches immediately.
                    </li>
                </ul>

                {/* Services */}
                <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
                    Services
                </h2>

                <p className="mb-4">
                    We facilitate scrap listings, quotes, payments, and delivery. No
                    ownership of scrap passes via Site—we're a marketplace only. Pricing is
                    indicative; final via negotiation.
                </p>

                {/* Prohibited */}
                <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
                    Prohibited Activities
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        Illegal scrap (e.g., stolen metal) or non-compliant trade.
                    </li>
                    <li>
                        Fraud, spam, scraping, or system overload.
                    </li>
                    <li>
                        IP infringement, harmful content, or unauthorized data collection.
                    </li>
                    <li>
                        Reselling without quality certification.
                    </li>
                </ul>

                {/* Payments */}
                <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
                    Payments and Refunds
                </h2>

                <ul className="list-disc pl-6 space-y-2">
                    <li>Secure via gateways; fees deducted upfront.</li>
                    <li>
                        Refunds only for non-delivery (7 days); no liability for market price
                        fluctuations.
                    </li>
                    <li>Taxes: GST as applicable; invoice provided.</li>
                </ul>

                {/* Liability */}
                <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
                    Liability and Disclaimers
                </h2>

                <p className="mb-4">
                    Site provided "as is"; no warranties on scrap quality/quantity.
                    Liability capped at order value. Force majeure applies. Governing law:
                    Laws of India; disputes in Kerala courts.
                </p>

                {/* Termination */}
                <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
                    Termination
                </h2>

                <p className="mb-6">
                    We may suspend/terminate for violations without notice. You may close
                    account anytime.
                </p>

                {/* Contact */}
                <p>
                    <strong>Contact:</strong>{" "}
                    <a
                        href="mailto:info@mysteelindia.in"
                        className="text-blue-600 underline"
                    >
                        info@mysteelindia.in
                    </a>
                </p>

                <p className="mt-6 text-sm text-gray-500">
                    Last updated: March 8, 2026.
                </p>

            </div>
            <Footer />
        </div>
    );
}