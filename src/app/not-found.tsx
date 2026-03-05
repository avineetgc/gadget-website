import Link from "next/link";

export default function NotFound() {
  return (
    <section
      className="section section--dark"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "72px",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <p
          style={{
            fontSize: "var(--text-6xl)",
            fontWeight: "var(--weight-bold)",
            color: "var(--color-teal)",
            marginBottom: "var(--space-4)",
          }}
        >
          404
        </p>
        <h1 style={{ color: "var(--color-white)", marginBottom: "var(--space-6)" }}>
          Page Not Found
        </h1>
        <p style={{ color: "rgba(255, 255, 255, 0.7)", marginBottom: "var(--space-8)", maxWidth: "400px", margin: "0 auto var(--space-8)" }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn btn--inverse">
          Return Home
        </Link>
      </div>
    </section>
  );
}
