import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqContent = ({
  faqs,
}: {
  faqs: any[];
}) => {

  return (
    <section>

      <h3 className="text-xl sm:text-2xl font-bold text-black mb-5 sm:mb-6">

        Frequently asked questions

      </h3>

      <Accordion
        type="single"
        collapsible
      >

        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={`item-${idx + 1}`}
          >

            <AccordionTrigger className="text-left">

              {faq.question}

            </AccordionTrigger>

            <AccordionContent>

              {faq.answer}

            </AccordionContent>

          </AccordionItem>
        ))}

      </Accordion>
    </section>
  );
};

export default FaqContent;