import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, i) => (
        <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
          <AccordionTrigger className="font-display font-semibold text-left text-foreground py-5 text-base md:text-lg hover:text-accent transition-colors">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
