"use client";

import { useState } from "react";
import { faqItems } from "@/data/faq";
import styles from "./FAQAccordion.module.css";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = Array.from(new Set(faqItems.map((item) => item.category)));

  return (
    <div>
      {categories.map((category) => (
        <div key={category} style={{ marginBottom: "var(--space-10)" }}>
          <h3 style={{ marginBottom: "var(--space-6)" }}>{category}</h3>
          <div className={styles.accordionGroup}>
            {faqItems
              .filter((item) => item.category === category)
              .map((item) => {
                const globalIndex = faqItems.indexOf(item);
                const isOpen = openIndex === globalIndex;

                return (
                  <div key={globalIndex} className={styles.item}>
                    <button
                      className={styles.trigger}
                      onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.question}>{item.question}</span>
                      <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className={styles.content}>
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
