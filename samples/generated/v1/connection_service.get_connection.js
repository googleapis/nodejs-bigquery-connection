// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(name) {
  // [START connection_get_connection_sample]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the requested connection, for example:
   *  `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
   */
  // const name = 'abc123'

  // Imports the Connection library
  const {ConnectionServiceClient} =
    require('@google-cloud/bigquery-connection').v1;

  // Instantiates a client
  const connectionClient = new ConnectionServiceClient();

  async function getConnection() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await connectionClient.getConnection(request);
    console.log(response);
  }

  getConnection();
  // [END connection_get_connection_sample]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
