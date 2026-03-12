import Footer from '../components/Footer';


export const metadata = {
  title: "Privacy Policy | MySteelIndia",
  description:
    "Privacy Policy for MySteelIndia.in – India's platform connecting scrap metal dealers, buyers and sellers.",
};

export default function PrivacyPolicy() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 py-14 text-gray-700">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-sm text-gray-500 mb-6">
          <strong>Effective Date:</strong> March 8, 2026
        </p>

        <p className="mb-6">
          Welcome to <strong>MySteelIndia.in</strong>, India's leading online
          platform connecting scrap metal dealers, buyers, and sellers. This
          Privacy Policy ("Policy") is published under the Information
          Technology Act, 2000 ("IT Act"), and the Digital Personal Data
          Protection Act, 2023 ("DPDP Act"), along with relevant rules.
          It applies to all users accessing our site for scrap trading services.
        </p>

        {/* Information We Collect */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
          Information We Collect
        </h2>

        <p className="mb-3">
          We collect minimal personal data necessary for scrap transactions:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Personal Identifiers:</strong> Name, email, phone number,
            GSTIN/PAN/Aadhaar for KYC verification.
          </li>

          <li>
            <strong>Transaction Data:</strong> Scrap type (ferrous/non-ferrous),
            quantity, price, delivery address, payment details.
          </li>

          <li>
            <strong>Usage Data:</strong> IP address, browser type, pages visited
            and timestamps via cookies.
          </li>

          <li>
            <strong>Documents:</strong> ID proofs and scrap quality certificates
            uploaded for listings.
          </li>
        </ul>

        <p className="mt-4">
          Data is collected directly from you during registration,
          inquiries, or orders. No sensitive data is processed
          without explicit consent.
        </p>

        {/* How We Use Data */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
          How We Use Your Data
        </h2>

        <p className="mb-3">Your information enables:</p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Processing scrap buy/sell orders and payments.</li>
          <li>Verifying dealer credentials to prevent illegal trade.</li>
          <li>Logistics coordination with India couriers.</li>
          <li>Sending transactional emails or SMS updates.</li>
          <li>
            Analytics to improve pricing for steel, aluminum,
            and copper scrap.
          </li>
          <li>
            Legal compliance including 5-year record retention
            for audits under Scrap (Control) Order, 2012.
          </li>
        </ul>

        <p className="mt-4">
          We do not sell data to third parties. Sharing occurs only with
          payment processors, logistics partners, or government authorities
          where legally required for GST or tax reporting.
        </p>

        {/* Storage */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
          Data Storage and Security
        </h2>

        <p>
          Data is hosted on secure Indian servers with encryption
          (AES-256), firewalls, and access controls.
        </p>

        <p className="mt-3">
          <strong>Retention:</strong> Transaction records are stored for
          5 years after order completion as required by regulation,
          after which they are anonymized.
        </p>

        <p className="mt-3">
          In case of a data breach, users and authorities will be notified
          within 72 hours as required under the DPDP Act.
        </p>

        {/* Rights */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
          Your Rights
        </h2>

        <p className="mb-3">
          Under the Digital Personal Data Protection Act:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Access, correct, or delete your personal data.</li>
          <li>Withdraw consent which may limit some services.</li>
          <li>Portability for verified dealers.</li>
          <li>Grievance redressal: Contact our Data Officer at the email above; resolution within 30 days.</li>
        </ul>

        <p className="mt-4">
          Children under 18 years cannot use this website
          without guardian consent.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
          Contact Information
        </h2>

        <p>
          <strong>Privacy Officer</strong>
          <br />
          MySteelIndia.in
          <br />
          Kerala, India
          <br />
          Email:{" "}
          <a
            href="mailto:info@mysteelindia.in"
            className="text-blue-600 underline"
          >
            info@mysteelindia.in
          </a>
        </p>

        <p className="mt-10 text-sm text-gray-500">
          Last Updated: March 8, 2026
        </p>
      </div>
      <Footer />
    </div>
  );
}