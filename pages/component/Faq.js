import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is ice cream made of?',
      answer: 'Ice cream is typically made of milk, cream, sugar, and flavorings such as vanilla, chocolate, or fruit.',
    },
    {
      question: 'How many flavors of ice cream are there?',
      answer: 'There are hundreds of ice cream flavors, ranging from classic vanilla and chocolate to more exotic ones like matcha or lavender.',
    },
    {
      question: 'What is the difference between gelato and ice cream?',
      answer: 'Gelato is made with more milk and less cream than ice cream, and it is churned at a slower speed, resulting in a denser texture.',
    },
    {
      question: 'Can you make ice cream without an ice cream maker?',
      answer: 'Yes, you can make ice cream without an ice cream maker by freezing a mixture of whipped cream, condensed milk, and flavoring, then stirring it occasionally to break up ice crystals.',
    },
    {
      question: 'How can I make dairy-free ice cream?',
      answer: 'You can make dairy-free ice cream by using coconut milk, almond milk, or oat milk as a base and adding natural sweeteners like maple syrup or agave.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='faq_container' style={styles.faqContainer}>
      <p className="popular mb-14">Frequently Asked Question</p>

      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            ...styles.faqItem,
            backgroundColor: openIndex === index ? 'white' : '#5D4037', // White when open, chocolate when closed
          }}
        >
          <div style={styles.faqHeader} onClick={() => toggleFAQ(index)}>
            <span
              className='faq_question'
              style={{
                color: openIndex === index ? '#3E2723' : 'white', // Chocolate text when open, white when closed
              }}
            >
              {faq.question}
            </span>
            <button style={styles.toggleButton}>
              {openIndex === index ? '-' : '+'}
            </button>
          </div>
          {openIndex === index && (
            <div
              className='faq_anser'
              style={{
                ...styles.faqAnswer,
                color: openIndex === index ? '#3E2723' : 'white', // Chocolate answer text when open, white when closed
              }}
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const styles = {
  faqContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#3E2723', // Dark chocolate color
    color: 'white', // White text color
    overflowY: 'auto',
  },
  faqItem: {
    width: '100%',
    marginBottom: '10px',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  faqHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  toggleButton: {
    background: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'white', // Ensure button color is white
  },
  faqAnswer: {
    marginTop: '10px',
    fontSize: '16px',
  },
};

export default FAQ;
