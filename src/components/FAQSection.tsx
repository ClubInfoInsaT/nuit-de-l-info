import { QuestionMarkCircleIcon } from './Icons';

export type FAQ = {
  title: string;
  content: string;
};

interface FAQCArdProps {
  faq: FAQ;
}

interface FAQProps {
  faqs: FAQ[];
}

const FAQ = ({ faq }: FAQCArdProps) => {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <QuestionMarkCircleIcon />,
        </div>
        <div className="flex-1">
          <h2 className="text-left text-lg font-bold">{faq.title}</h2>
          <p className="text-left">{faq.content}</p>
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({ faqs }: FAQProps) => {
  return (
    <section className="h-fit py-20 md:h-screen" id="faqs">
      <div className="text-center">
        <p className="font-bold text-pink-500">FAQs</p>
        <h1 className="text-xl font-bold md:text-4xl">
          Foire aux <span className="text-pink-500">questions</span>
        </h1>

        <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {faqs.map((faq) => (
            <FAQ faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
