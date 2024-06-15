import { SchemaEncoder } from '@ethereum-attestation-service/eas-sdk';

const getSchemaEncoder = () => {
  const schemaEncoder = new SchemaEncoder('address[] creators');

  return schemaEncoder;
};

export default getSchemaEncoder;
