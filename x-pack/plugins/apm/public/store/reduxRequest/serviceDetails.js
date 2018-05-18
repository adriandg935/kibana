/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { withInitialData } from './helpers';
import { ReduxRequest } from '../../components/shared/ReduxRequest';
import { loadServiceDetails } from '../../services/rest';

const ID = 'serviceDetails';
const INITIAL_DATA = { types: [] };

export function getServiceDetails(state) {
  return withInitialData(state.reduxRequest[ID], INITIAL_DATA);
}

export function getDefaultTransactionType(state) {
  const types = _.get(state.reduxRequest.serviceDetails, 'data.types');
  return _.first(types);
}

export function ServiceDetailsRequest({ urlParams, render }) {
  const { serviceName, start, end, kuery } = urlParams;
  return (
    <ReduxRequest
      id={ID}
      shouldInvoke={Boolean(serviceName && start && end)}
      fn={loadServiceDetails}
      args={[{ serviceName, start, end, kuery }]}
      selector={getServiceDetails}
      render={render}
    />
  );
}

ServiceDetailsRequest.propTypes = {
  urlParams: PropTypes.object.isRequired,
  render: PropTypes.func.isRequired
};