import Footer from '../components/Footer';


export const metadata = {
  title: "Cookie Policy | MySteelIndia",
  description: "Cookie Policy for mysteelindia.in",
};

export default function CookiePolicy() {
  return (
    <div>
    <div className="max-w-5xl mx-auto px-6 py-14 text-gray-700">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Cookie Policy
      </h1>

      <p className="text-sm text-gray-500 mb-6">
        <strong>Effective Date:</strong> March 8, 2026
      </p>

      <p className="mb-6">
        MySteelIndia.in uses cookies to enhance scrap dealer experience,
        compliant with DPDP Act and IT Rules.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
        What Are Cookies?
      </h2>

      <p className="mb-3">
        Small files storing preferences; types:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Analytics:</strong> Usage patterns (Google Analytics).
        </li>
        <li>
          <strong>Functional:</strong> Saved searches for scrap types.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
        How We Use Them
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Improve site speed/navigation.</li>
        <li>Track popular scrap (e.g., MS scrap trends).</li>
        <li>No ad-tracking; no third-party sharing without consent.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-10 mb-3 text-gray-900">
        Your Choices
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Consent banner on first visit.</li>
        <li>Manage via browser (Chrome/Firefox settings).</li>
        <li>Opt-out doesn't affect core functions.</li>
      </ul>

      <p className="mt-6">
        We respect Do Not Track signals. Updates notified via Site.
      </p>

      <p className="mt-6">
        <strong>Contact:</strong>{" "}
        <a
          href="mailto:info@mysteelindia.in"
          className="text-blue-600 underline"
        >
          info@mysteelindia.in
        </a>
      </p>

      <p className="mt-6 text-sm text-gray-500">
        Last updated: March 8, 2026
      </p>
    </div>
      <Footer />
    </div>
  );
}