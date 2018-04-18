/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { Fragment } from 'react';

import {
  EuiSpacer,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiTextColor,
  EuiSwitch,
} from '@elastic/eui';

export const Header = ({
  prompt,
  indexPatternName,
  showSystemIndices,
  isIncludingSystemIndices,
  onChangeIncludingSystemIndices,
}) => (
  <div>
    <EuiSpacer size="m"/>
    <EuiTitle>
      <h1>Create a {indexPatternName}</h1>
    </EuiTitle>
    <EuiFlexGroup justifyContent="spaceBetween" alignItems="flexEnd">
      <EuiFlexItem grow={false}>
        <EuiText>
          <p>
            <EuiTextColor color="subdued">
              Kibana uses index patterns to retrieve data from Elasticsearch indices for things like visualizations.
            </EuiTextColor>
          </p>
        </EuiText>
      </EuiFlexItem>
      {
        showSystemIndices ? (
          <EuiFlexItem grow={false}>
            <EuiSwitch
              id="checkboxShowSystemIndices"
              label="Include system indices"
              checked={isIncludingSystemIndices}
              onChange={onChangeIncludingSystemIndices}
            />
          </EuiFlexItem>
        ) : ''
      }
    </EuiFlexGroup>
    {
      prompt ? (
        <Fragment>
          <EuiSpacer size="s" />
          {prompt}
        </Fragment>
      ) : ''
    }
    <EuiSpacer size="m"/>
  </div>
);
