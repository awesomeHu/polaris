import {Tag} from '@shopify/polaris';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function TagExample() {
  return <Tag url="/collections/wholesale">Wholesale</Tag>;
}

export default withPolarisExample(TagExample);
