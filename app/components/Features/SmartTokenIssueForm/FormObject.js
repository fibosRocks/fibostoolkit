import React from 'react';

import ToolForm from 'components/Tool/ToolForm';
import ToolInput from 'components/Tool/ToolInput';

const FormData = [
  {
    id: 'name',
    label: 'Recipient',
    placeholder: 'Account that receives the Token',
  },
  {
    id: 'quantity',
    label: 'Quantity (in Tokens)',
    placeholder: 'How many Tokens to issue',
  },
  {
    id: 'symbol',
    label: 'Symbol',
    placeholder: 'Symbol of the Token',
  },
  {
    id: 'issuer',
    label: 'Issuer',
    placeholder: 'Issuer of the Token',
  },
  {
    id: 'memo',
    label: 'Memo',
    placeholder: 'A memo to attach to transfer',
    md: 12,
  },
];

const FormObject = props => {
  const { handleSubmit } = props;
  const formProps = {
    handleSubmit,
    submitColor: 'rose',
    submitText: 'Issue',
  };
  return (
    <ToolForm {...formProps}>
      {FormData.map(form => {
        return <ToolInput key={form.id} {...form} {...props} />;
      })}
    </ToolForm>
  );
};

export default FormObject;
