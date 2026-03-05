"use client";

import { useState, type FormEvent } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`card card--accent ${styles.success}`}>
        <h3 style={{ marginBottom: "var(--space-4)", color: "var(--color-teal)" }}>
          Thank You
        </h3>
        <p>
          Your inquiry has been received. Our investor relations team will be in
          touch within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="firstName">
            First Name <span className={styles.required}>*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="lastName">
            Last Name <span className={styles.required}>*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email <span className={styles.required}>*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="organization">
          Organization / Company
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="investorType">
          Investor Type
        </label>
        <select
          id="investorType"
          name="investorType"
          className={styles.input}
          defaultValue=""
        >
          <option value="" disabled>
            Select one
          </option>
          <option value="individual">Individual</option>
          <option value="family-office">Family Office</option>
          <option value="institution">Institution</option>
          <option value="ria">RIA / Advisor</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={styles.input}
          placeholder="Tell us about your investment interests or any questions you may have."
        />
      </div>

      <div className={styles.checkbox}>
        <input
          id="accredited"
          name="accredited"
          type="checkbox"
          required
          className={styles.checkboxInput}
        />
        <label htmlFor="accredited" className={styles.checkboxLabel}>
          I confirm that I am an accredited investor as defined under Regulation
          D of the Securities Act of 1933, or I am inquiring on behalf of a
          qualified institutional investor. <span className={styles.required}>*</span>
        </label>
      </div>

      <button type="submit" className="btn btn--primary btn--lg" style={{ width: "100%" }}>
        Submit Request
      </button>

      <p className="text-legal" style={{ marginTop: "var(--space-4)" }}>
        All information provided is kept strictly confidential and will be used
        solely for investor relations purposes.
      </p>
    </form>
  );
}
