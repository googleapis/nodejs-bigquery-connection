// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(resource, policy) {
  // [START bigqueryconnection_v1_generated_ConnectionService_SetIamPolicy_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  REQUIRED: The resource for which the policy is being specified.
   *  See the operation documentation for the appropriate value for this field.
   */
  // const resource = 'abc123'
  /**
   *  REQUIRED: The complete policy to be applied to the `resource`. The size of
   *  the policy is limited to a few 10s of KB. An empty policy is a
   *  valid policy but certain Cloud Platform services (such as Projects)
   *  might reject them.
   */
  // const policy = {}
  /**
   *  OPTIONAL: A FieldMask specifying which fields of the policy to modify. Only
   *  the fields in the mask will be modified. If no mask is provided, the
   *  following default mask is used:
   *  `paths: "bindings, etag"`
   */
  // const updateMask = {}

  // Imports the Connection library
  const {ConnectionServiceClient} = require('@google-cloud/bigquery-connection').v1;

  // Instantiates a client
  const connectionClient = new ConnectionServiceClient();

  async function callSetIamPolicy() {
    // Construct request
    const request = {
      resource,
      policy,
    };

    // Run request
    const response = await connectionClient.setIamPolicy(request);
    console.log(response);
  }

  callSetIamPolicy();
  // [END bigqueryconnection_v1_generated_ConnectionService_SetIamPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
