import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Shoppingfy',
  description: 'We sell the best products at the cheapest price',
  keywords: 'electronics, buyelectronics, cheap electronics',
};

export default Meta;
